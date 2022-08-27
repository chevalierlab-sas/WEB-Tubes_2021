<template>
    <div>
        <div v-if="!isLoading">
    <!-- Update lowongan modal -->
    <div class="modal" id="lowonganModal" v-if="lowongan.author_uid === userId">
    <div class="modal-box">
        <h3 class="font-bold text-lg text-center">Update lowongan</h3>
    <form @submit.prevent="updateLowongan">
    <div class="flex flex-col">
        <label for="jenis">Jenis lowongan</label>
        <input type="text" placeholder="Jenis lowongan" 
        class="input input-bordered w-full" v-model="formLowongan.jenis">
    </div>
    <div class="flex flex-col">
        <label for="instansi">Instansi</label>
        <input type="text" placeholder="instansi umum" 
        class="input input-bordered w-full" v-model="formLowongan.instansi">
    </div>
    <div class="flex flex-col">
        <label for="content">Konten lowongan</label>
        <textarea class="textarea textarea-bordered"
        placeholder="Menurut saya anime ini .." v-model="formLowongan.content">
        </textarea>
    </div> 
    <div class="flex flex-col">
        <label for="kontak">Kontak</label>
        <textarea class="textarea textarea-bordered"
        placeholder="Nomor telepon" v-model="formLowongan.kontak">
        </textarea>
    </div> 
    <div class="flex flex-col">
        <label for="alamat">Alamat</label>
        <textarea class="textarea textarea-bordered"
        placeholder="Alamat instansi" v-model="formLowongan.alamat">
        </textarea>
    </div> 
    <div class="modal-action">
        <a href="#" class="btn btn-outline" 
        ref="btnCloseLowonganModal">Tutup</a>
        <button type="submit" class="text-white btn btn-primary bg-blue-800
            border-blue-800 hover:bg-blue-600 
            hover:border-blue-600">Simpan</button>
    </div>
    </form> 
    </div>
    </div>
    <!-- End update lowongan modal -->
    </div>
      <div class="px-32">
        <div class="mt-5 card w-full bg-base-100 card-compact shadow-xl p-5">
            <div class="card-body text-center space-y-2">
                <div v-if="isLoading">Loading...</div>
                <div v-else>
                    <h1 class="font-bold text-2xl">{{ lowongan.jenis }}</h1>
                    <p class="font-normal text-lg">
                        Author: {{ lowongan.author }} - {{ lowongan.created_at }}
                    </p>
                    <div class="space-x-3 my-2" v-if="lowongan.author_uid === userId">
                        <a href="#lowonganModal" class="btn btn-warning btn-xs text-white">
                            Edit
                        </a>
                        <button class="btn btn-error btn-xs text-white" 
                        @click="deleteLowongan">
                            Delete
                        </button>
                    </div>
                    <p class="font-medium text-lg font-sans">
                            {{ lowongan.instansi}}
                    </p>
                    <p class="font-medium text-lg font-sans">
                            {{ lowongan.content}}
                    </p>
                    <table>
				<tr>
					<td>Kontak : </td>
					<td></td>
					<td>{{ lowongan.kontak }}</td>
				</tr>
				<tr>
					<td>Alamat : </td>
					<td></td>
					<td>{{ lowongan.alamat }}</td>
				</tr>
                </table>
                </div>
            </div>
        </div>
      </div>  
    </div>

</template>

<script>
import { getAuth } from '@firebase/auth';
import { getFirestore, doc, getDoc, deleteDoc, updateDoc, Timestamp } from '@firebase/firestore';

    export default{
        name: 'lowonganDetail',
        data(){
            return{
                userId: '',
                isLoading: true,
                lowongan: {},
                formLowongan: {
                    jenis: '',
                    instansi: '',
                    content: '',
                    kontak: '',
                    alamat: ''
                },
            }
        },
        created(){
            this.getLowongan();
        },
        methods: {
            getLowongan(){
                const lowonganId = this.$route.params.id;
                const db = getFirestore(this.$firebase);
                const documentRef = doc(db, 'lowongans', lowonganId);
                getDoc(documentRef)
                .then((document) => {
                    const { seconds, nanoseconds} = document.data().created_at;
                    const date = new Timestamp(seconds, nanoseconds).toDate().toLocaleDateString(); 
                    this.lowongan = {
                        ...document.data(),
                        id: document.id,
                        created_at: date
                    }
                    this.userId = getAuth().currentUser.uid;

                    if(this.userId === this.lowongan.author_uid){
                        this.formLowongan.jenis = this.lowongan.jenis;
                        this.formLowongan.instansi = this.lowongan.instansi;
                        this.formLowongan.content = this.lowongan.content;
                        this.formLowongan.kontak = this.lowongan.kontak;
                        this.formLowongan.alamat = this.lowongan.alamat;
                    }

                })
                .catch((error) => {
                    alert(error.message);
                })
                .finally(() => {
                    this.isLoading = false;
                });
            },
            updateLowongan(){
                const db = getFirestore(this.$firebase);
                const documentUpdatedRef = doc(db, 'lowongans', this.lowongan.id);
                updateDoc(documentUpdatedRef, {
                    jenis: this.formLowongan.jenis,
                    instansi: this.formLowongan.instansi,
                    content: this.formLowongan.content,
                    kontak: this.formLowongan.kontak,
                    alamat: this.formLowongan.alamat
                })
                .then(() => {
                    this.getLowongan();
                    this.$refs.btnCloseLowonganModal.click();
                })
                .catch((error) => {
                    alert(error.message);
                })
            },
            deleteLowongan(){
                const isConfirmDeleted = confirm('Yakin ingin menghapus lowongan ini?');
                if (isConfirmDeleted) {
                    const db = getFirestore(this.$firebase);
                    const documentDeletedRef = doc(db, 'lowongans', this.lowongan.id);
                    deleteDoc(documentDeletedRef)
                        .then(() => {
                            this.$router.push({ path: '/lowongan' });
                        })
                        .catch((error) => {
                            alert(error.message);
                        })
                }
            }
        }
    }
</script>