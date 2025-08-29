### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. 
getElementById() :	একটি নির্দিষ্ট এলিমেন্ট	শুধুমাত্র ID দিয়ে সিলেক্ট করে	
getElementsByClassName() :	HTMLCollection (array-এর মতো)	ক্লাস দিয়ে সিলেক্ট করে	
querySelector() :	প্রথম ম্যাচিং এলিমেন্ট রিটার্ন করে	CSS স্টাইল সিলেক্টর	
querySelectorAll() :	NodeList (loop করা যায়)	CSS স্টাইল সিলেক্টর
3. How do you **create and insert a new element into the DOM**?
4. ans: DOM থেকে সেই এলিমেন্ট সিলেক্ট করো যেখানে নতুন এলিমেন্ট বসবে। arent-এর শেষে বসাতে চাইলে appendChild() বা append() ব্যবহার , শুরুতে বসাতে চাইলে prepend() ব্যবহার,নির্দিষ্ট জায়গায় বসাতে চাইলে insertBefore() ব্যবহার
5. What is **Event Bubbling** and how does it work?
6. ans : Event Bubbling হলো একটি প্রক্রিয়া যেখানে কোনো child এলিমেন্টে ইভেন্ট ঘটলে সেটি ধাপে ধাপে তার parent, grandparent হয়ে উপরের দিকে যায়। এতে করে এক ইভেন্ট একাধিক এলিমেন্টে ট্রিগার হতে পারে যদি তা stopPropagation() দিয়ে থামানো না হয়।
7. What is **Event Delegation** in JavaScript? Why is it useful?
8. ans : Event Delegation হলো একটি টেকনিক যেখানে parent element-এ ইভেন্ট লিসেনার বসানো হয়, আর child element-এ ইভেন্ট ঘটলে সেটি parent-এর মাধ্যমে হ্যান্ডেল করা হয়। এটি useful কারণ এতে কম ইভেন্ট লিসেনার লাগে, DOM ডাইনামিক হলে নতুন element-এর জন্য আলাদা লিসেনার বসাতে হয় না, আর পারফরম্যান্সও ভালো থাকে।
9. What is the difference between **preventDefault() and stopPropagation()** methods?
ans: preventDefault() → ব্রাউজারের ডিফল্ট অ্যাকশন বন্ধ করে (যেমন: লিঙ্কে ক্লিক করলে পেজে না যাওয়া, ফর্ম সাবমিট না হওয়া)। stopPropagation() → ইভেন্টকে parent বা উপরের এলিমেন্টে যেতে (bubble হতে) বাধা দেয়।
