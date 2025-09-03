# 🏫 School Management Portal  

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)

This project is a **School Management Portal** built with **Next.js** and **MySQL**.  
Only admins can log in and add school details. The schools are displayed as **cards** (similar to product listings on Amazon), making them easy to browse and explore.  

---

## 📷 Video  

https://github.com/user-attachments/assets/a1126add-03a0-4dfe-9767-cca1f4f88111

---


## 🚀 Features  
✅ **Admin Authentication** – Only authorized admins can log in and add schools.  
✅ **Add Schools** – Secure form for entering school details.  
✅ **Database Integration** – Data stored in **Railway-hosted MySQL database**.  
✅ **View Schools** – Browse all schools in **card format**.  
✅ **REST API Endpoints** – Fetch schools via `/show-school`.  

---

## 🛠️ Tech Stack  
- **Frontend & Backend:** Next.js  
- **Database:** MySQL (hosted on Railway)  
- **Authentication:** Admin login page  
- **Deployment:** Vercel (for frontend/backend) + Railway (for database)  

---

## 📌 How It Works  
1. **Login as Admin** → Only admin can log in. Unauthorized users cannot add schools.  
2. **Add School Details** → Admin submits school name, location, and description.  
3. **Database Storage** → Details are stored in Railway MySQL DB.  
4. **View Schools** → Visit `/show-school` to see schools in **card format**.  

---

## ⚡ Installation & Setup  

Clone the repository:  
```bash
git clone https://github.com/your-username/school-management-portal.git
cd school-management-portal
