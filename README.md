# 🏦 Banking Management System

A Full Stack Banking Management System developed using **Spring Boot**, **React**, and **MySQL**. The application enables users to manage bank accounts, perform transactions, check balances, and view transaction history through a user-friendly interface.

---

## 🚀 Features

### 👤 Customer Management

* Create New Customer
* View All Customers
* View Customer Details

### 💰 Banking Operations

* Deposit Money
* Withdraw Money
* Transfer Money Between Accounts
* Check Account Balance

### 📄 Transaction Management

* View Transaction History
* View Mini Statement
* View Account Statement

### ✅ Validations

* Unique Account Number Validation
* Insufficient Balance Validation
* Customer Not Found Validation
* Account Number Not Found Validation

---

## 🛠️ Technologies Used

### Backend

* Java
* Spring Boot
* Spring Data JPA
* Hibernate
* Maven

### Frontend

* React.js
* Axios
* React Router DOM
* Bootstrap

### Database

* MySQL

---

## 🗄️ Database Configuration

Database Name:
sql
banking_app


Create Database:
sql
CREATE DATABASE banking_app;


Update `application.properties`:

properties
spring.datasource.url=jdbc:mysql://localhost:3306/banking_app
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true


---

## 📁 Project Structure


Banking-Management-System
│
├── banking-backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   ├── dto
│   └── exception
│
└── banking-frontend
    ├── components
    ├── pages
    ├── services
    └── App.js


---

## ⚙️ Backend Setup

Navigate to backend project and run:
bash
mvn spring-boot:run

Backend runs on:


http://localhost:8080


---

## ⚙️ Frontend Setup

Navigate to frontend folder:
bash
cd banking-frontend


Install dependencies:
bash
npm install


Run application:
bash
npm start


Frontend runs on:
http://localhost:3000


---

## 🔗 API Endpoints

### Create Customer


POST /customers


### Deposit Money

POST /customers/deposit?accountNumber={accountNumber}&amount={amount}


### Withdraw Money


POST /customers/withdraw?accountNumber={accountNumber}&amount={amount}

### Transfer Money


POST /customers/transfer?fromAccount={accountNumber}&toAccount={accountNumber}&amount={amount}


### Check Balance


GET /customers/balance?accountNumber={accountNumber}


### Transaction History


GET /customers/transactions?accountNumber={accountNumber}


---

## 📷 Application Screens

* Customer List
* Create Customer
* Deposit Money
* Withdraw Money
* Transfer Money
* Check Balance
* Transaction History

---

## 🎯 Future Enhancements

* User Authentication & Authorization
* Login & Registration
* PDF Account Statements
* Email Notifications
* Admin Dashboard
* Loan Management Module
* Fixed Deposit Module

---

## 👩‍💻 Author

**Archana K R**

Java Developer | Spring Boot | React | MySQL

---

### Project Highlights

✔ Full Stack Development
✔ RESTful APIs
✔ React Frontend
✔ Spring Boot Backend
✔ MySQL Database Integration
✔ Account Number Based Transactions
✔ Transaction History Tracking
✔ Banking Operations Automation

---

Developed as a Full Stack Banking Management System using Spring Boot, React, and MySQL.
