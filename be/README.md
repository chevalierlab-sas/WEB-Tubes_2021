# Installation
1. Set up MySQL server (XAMPP or anything else).
2. Change `DATABASE_URL` at `.env` file to your own MySQL server.
    > Example: `DATABASE_URL="mysql://root@localhost:3306/tubes_tim9_dev"`
3. (Optional/Recommended) Change `SECRET` at `.env` to your own random string.
4. Run `npm install`.
5. Run `npx prisma db push` or `npx prisma migrate deploy`
6. Run `npx prisma generate`
# Usage
Run `npm run dev` (supports hot reloading).