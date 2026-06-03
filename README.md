# 🚀 CodeMate AI

CodeMate AI is an AI-powered code review platform that helps developers analyze, understand, and improve their code instantly. It supports multiple programming languages and provides intelligent feedback using Google's Gemini AI through Spring AI.

## ✨ Features

* 🌍 Multi-Language Code Analysis
* 🚀 Automatic Language Detection
* 📖 Code Summary Generation
* ⚠️ Issue Detection & Code Review
* 📏 Time & Space Complexity Analysis
* 💡 AI-Powered Improvement Suggestions
* ⭐ Code Quality Scoring
* 🎨 Modern Responsive UI
* ⚡ Real-Time AI Feedback

## 🖼️ Preview

### Home Page



### Analysis Result

(Add Screenshot Here)

---

## 🛠️ Tech Stack

### Backend

* Java 21
* Spring Boot
* Spring AI
* Gemini API
* Maven

### Frontend

* HTML5
* CSS3
* JavaScript

### Tools

* IntelliJ IDEA
* Git
* GitHub
* Postman

---

## 🏗️ Architecture

Frontend (HTML/CSS/JS)
          │
          ▼
Spring Boot REST API
          │
          ▼
      Spring AI
          │
          ▼
      Gemini API
          │
          ▼
   AI Generated Review

## 📋 Analysis Report Format

CodeMate AI generates structured reports in the following format:

### 🚀 Language

Detected programming language

### 📖 Summary

Brief explanation of what the code does

### ⚠️ Issues

Potential bugs, code smells, and improvement areas

### 📏 Complexity

* Time Complexity
* Space Complexity

### 💡 Improvements

Actionable suggestions to improve code quality

### ⭐ Code Quality Score

Score from 1–10


## ⚙️ Installation

### Clone Repository

git clone https://github.com/Pratham2593/codemate-ai.git
cd codemate-ai

### Configure API Key

Create an environment variable:

GOOGLE_API_KEY=YOUR_API_KEY

### Run Application

mvn spring-boot:run

Application will start at:

http://localhost:8080

## 📂 Project Structure

codemate-ai
│
├── src
│   ├── main
│   │   ├── java
│   │   │   ├── controller
│   │   │   ├── service
│   │   │   └── dto
│   │   └── resources
│   │       ├── static
│   │       └── application.properties
│
├── pom.xml
├── README.md
└── .gitignore


## 🎯 Future Enhancements

* User Authentication (JWT)
* Analysis History Dashboard
* Export Review as PDF
* Dark/Light Theme Toggle
* Save Reviews in Database
* Code Comparison Feature
* Team Collaboration Support
* Live Deployment

## 👨‍💻 Author

**Prathamesh Deore**

* GitHub: https://github.com/Pratham2593
* LinkedIn: https://www.linkedin.com/in/pratham-deore/

