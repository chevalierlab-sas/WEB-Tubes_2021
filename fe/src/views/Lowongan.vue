<template>
<div>
        <!-- Create lowongan modal -->
    <div class="modal" id="lowonganModal">
    <div class="modal-box">
        <h3 class="font-bold text-lg text-center">Buka Lowongan</h3>
    <form @submit.prevent="addLowongan">
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
        <label for="content">Deskripsi pekerjaan</label>
        <textarea class="textarea textarea-bordered"
        placeholder="Deskripsi pekerjaan" v-model="formLowongan.content">
        </textarea>
    </div>
    <div class="flex flex-col">
        <label for="kontak">Nomor telepom</label>
        <input type="text" placeholder="Nomor telepon" 
        class="input input-bordered w-full" v-model="formLowongan.kontak">
    </div>
    <div class="flex flex-col">
        <label for="alamat">Alamat instansi</label>
        <input type="text" placeholder="Alamat" 
        class="input input-bordered w-full" v-model="formLowongan.alamat">
    </div> 
    <div class="modal-action">
        <a href="#" class="btn btn-outline" 
        ref="btnCloselowonganModal">Tutup</a>
        <button type="submit" class="text-white btn btn-primary bg-blue-800
            border-blue-800 hover:bg-blue-600 
            hover:border-blue-600">Simpan</button>
    </div>
    </form> 
    </div>
    </div>
        <!-- End lowongan modal -->
    
    <h1 class="text-center text-2xl my-5 font-semibold">Lowongan Pekerjaan</h1>  
    
    <div v-if="isLoading">
        <p class="text-center">Loading...</p>
    </div>

    <div v-if="!isLoading && !isError" class="px-24">
        <div class="my-2 space-x-2">
            <a href="#lowonganModal" class="text-white btn btn-primary bg-blue-800
            border-blue-800 hover:bg-blue-600 
            hover:border-blue-600">Buka lowongan</a>
        <select 
            class="select w-xs select-bordered" 
            v-model="lowonganType"
            @change="getLowongans"
            >
            <option selected disabled value="">Filter lowongan</option>
            <option value="all">Semua lowongan</option>
            <option value="my">lowongan saya</option>
        </select>
        </div>
         
    <div v-if="lowongans.length > 0">
    <div class="flex flex-col space-y-3">
        <div 
        class="card rounded-6 p-1 shadow-xl bg-black
        hover:cursor-pointer"
        v-for="lowongan in lowongans"
        :key="lowongan.id"
        @click="$router.push({ path: `/lowongan/${lowongan.id}`})"
        >

        <div class="card-body bg-white rounded-xl">
			<h2 class="card-title">{{ lowongan.data.jenis }}</h2>
			<table>
				<tr>
					<td>Instansi</td>
					<td></td>
					<td>{{ lowongan.data.instansi }}</td>
				</tr>
				<tr>
					<td>Deskripsi</td>
					<td></td>
					<td>{{ lowongan.data.content }}</td>
				</tr>
                <tr>
					<td>Kontak</td>
					<td></td>
					<td>{{ lowongan.data.kontak }}</td>
				</tr>
                <tr>
					<td>Alamat</td>
					<td></td>
					<td>{{ lowongan.data.alamat }}</td>
				</tr>
			</table>
		</div>
            <!-- <h1 class="text-xl font-semibold">{{ lowongan.data.jenis }}</h1>
            <h2 class="text-lg font-thin">Author: {{ lowongan.data.author }}</h2>
            <p class="truncate">{{ lowongan.data.content }}</p> -->
        </div>
    </div>
    </div>
    <div v-else>
        <p class="text-center text-xl font-semibold">Belum ada lowongan</p>
    </div>

    </div>

        <div v-if="isError">
            <p class="text-center">There is an error</p>
        </div>
    </div>

</template>

<script>

import { getFirestore, collection, getDocs, query, where, addDoc, 
Timestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export default{
        name: 'Lowongan',
        data(){
            return{
                formLowongan: {
                    jenis: '',
                    instansi:'',
                    content: '',
                    kontak: '',
                    alamat: ''
                },
                lowonganType: 'all' ,
                lowongans: [],
                isLoading: false,
                isError: false
            }
        },
        created() {
            this.getLowongans();
        },
        methods: {
            getLowongans(){
                this.isLoading = true;
                let q;
                const db = getFirestore(this.$firebase);
                if(this.lowonganType === 'my'){
                    q = query(
                        collection(db, 'lowongans'),
                        where('author_uid', '==', getAuth().currentUser.uid)
                    );
                } else {
                    q = query(collection(db, 'lowongans'));
                }

                getDocs(q)
                    .then((documents) => {
                        this.lowongans.length = 0;
                        documents.forEach((document) => {
                            this.lowongans.push({
                                id: document.id,
                                data: {
                                    ...document.data(),
                                    created_at: new Date(
                                        document.data().created_at.seconds
                                    ).toLocaleDateString()
                                    
                                }
                            });
                        });
                    })
                    .catch((error) => { 
                        alert(error.message);
                        this.isError = true;
                    })
                    .finally(() => {
                        this.isLoading = false;
                    });
            },
            addLowongan(){
                const db = getFirestore(this.$firebase);
                const lowonganData = {
                    author: getAuth().currentUser.displayName,
                    author_uid: getAuth().currentUser.uid,
                    jenis: this.formLowongan.jenis,
                    instansi: this.formLowongan.instansi,
                    content: this.formLowongan.content,
                    kontak: this.formLowongan.kontak,
                    alamat: this.formLowongan.alamat,
                    created_at: Timestamp.now()
                };
                addDoc(collection(db, 'lowongans'), lowonganData)
                .then(() => {
                    alert('Sukses membuka lowongan');
                    this.getLowongans();
                    this.formLowongan.jenis = '';
                    this.formLowongan.instansi = '';
                    this.formLowongan.content = '';
                    this.formLowongan.kontak = '';
                    this.formLowongan.alamat = '';
                    this.$refs.btnCloseLowonganModal.click();
                })
                .catch((error) => {
                    alert(error.message);
                })
            }
        }
    }
</script>