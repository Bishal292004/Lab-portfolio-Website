const questions = [
    {
        question: "1. What is the full form of internet?",
        answers: [
            {text:"InterContinental Network", correct: false},
            {text:"Internal Network", correct: false},
            {text:"Interconnected Network", correct: true},
            {text:"International Network", correct: false}
        ]
    },
    {
        question: "2. The transmission of a file to our computer from the internet is called?",
        answers: [
            {text:"uploading", correct: false},
            {text:"downloading", correct: true},
            {text:"receiving file", correct: false},
            {text:"saving", correct: false}
        ]
    },
    {
        question: "3. Each computer on a network is recognized by a unique",
        answers: [
            {text:"Ip address", correct: true},
            {text:"HTTP", correct: false},
            {text:"HTTPS", correct: false},
            {text:"WWW", correct: false}
        ]
    },
    {
        question: "4. A computer communicates with other computers on the internet through",
        answers: [
            {text:"IP", correct: false},
            {text:"TCP/IP", correct: true},
            {text:"HTTPS", correct: false},
            {text:"Web Browser", correct: false}
        ]
    },
    {
        question: "5. What is the full form of HTML?",
        answers: [
            {text:"High Transfer Machine Language", correct: false},
            {text:"High Transmission Markup Language", correct: false},
            {text:"Hyper Text Markup Language", correct: true},
            {text:"Hypermedia Markup Language", correct: false}
        ]
    },
    {
        question: "6. A set of rules followed by each computer present on a network is called",
        answers: [
            {text:"Web", correct: false},
            {text:"HTTP", correct: false},
            {text:"Domain", correct: false},
            {text:"Protocol", correct: true}
        ]
    },
    {
        question: "7. Inventor of www (World wide web) is . . . . . .",
        answers: [
            {text:"Bill Gates", correct: false},
            {text:"Lee. N. Feyong", correct: false},
            {text:"Tim Berners Lee", correct: true},
            {text:"Tom Berners Lee", correct: false}
        ]
    },
    {
        question: "8. Internet is governed by several voluntary organizations such as",
        answers: [
            {text:"IAB (Internet Architecture Board)", correct: false},
            {text:"IETF (Internet Engineering Task Force)", correct: false},
            {text:"InterNIC", correct: false},
            {text:"All of the above", correct: true}
        ]
    },
    {
        question: "9. What is the full form of W3C?",
        answers: [
            {text:"World Web Wide Consortium", correct: false},
            {text:"World Wide Web Communication", correct: false},
            {text:"World Wide Web Consortium", correct: true},
            {text:"World Wide Web Cyber", correct: false}
        ]
    },
    {
        question: "10. To access a webpage, an URL is required. What is the full form of URL?",
        answers: [
            {text:"Uniform Resource Locator", correct: true},
            {text:"Universal Resource Locator", correct: false},
            {text:"Universal Resource Line", correct: false},
            {text:"Uniform Resource Line", correct: false}
        ]
    },
    {
        question: "11. A world wide web contains billions of webpages",
        answers: [
            {text:"residing in several computers", correct: false},
            {text:"created using HTML", correct: false},
            {text:"residing in many computer systems linked together using HTML", correct: false},
            {text:"Both b and c", correct: true}
        ]
    },
    {
        question: "12. A software program that is used to view web pages is called",
        answers: [
            {text:"Site", correct: false},
            {text:"Host", correct: false},
            {text:"Link", correct: false},
            {text:"Browser", correct: true}
        ]
    },
    {
        question: "13. Every computer machine host on the internet network has",
        answers: [
            {text:"similar IP address", correct: false},
            {text:"unique 15-digit number", correct: false},
            {text:"unique IP address", correct: true},
            {text:"the same IP address", correct: false}
        ]
    },
    {
        question: "14. An identifier that sends and receives information across the Internet is called",
        answers: [
            {text:"Ip Address", correct: true},
            {text:"WWW", correct: false},
            {text:"Network", correct: false},
            {text:"URL", correct: false}
        ]
    },
    {
        question: "15. Which IP addresses are mostly used by web, email, and gaming servers?",
        answers: [
            {text:"Dynamic", correct: false},
            {text:"Static", correct: true},
            {text:"MAC", correct: false},
            {text:"Both a and b", correct: false}
        ]
    },
    {
        question: "16. Which IP addresses are mostly used by companies, and business firms?",
        answers: [
            {text:"Static", correct: false},
            {text:"MAC", correct: false},
            {text:"Dynamic", correct: true},
            {text:"Normal", correct: false}
        ]
    },
    {
        question: "17. What is the full form of ISP?",
        answers: [
            {text:"International Service Provider", correct: false},
            {text:"Internet Service Provider", correct: true},
            {text:"Ithernet Service Provider", correct: false},
            {text:"Intra Service Provider", correct: false}
        ]
    },
    {
        question: "18. Internet address is a",
        answers: [
            {text:"8-bit number", correct: false},
            {text:"16-bit number", correct: false},
            {text:"32-bit number", correct: true},
            {text:"64-bit number", correct: false}
        ]
    },
    {
        question: "19. In HTTPS, S means",
        answers: [
            {text:"Secret", correct: false},
            {text:"Secure", correct: true},
            {text:"Socket", correct: false},
            {text:"Software", correct: false}
        ]
    },
    {
        question: "20. A unique name used in the URLs that identify website is called?",
        answers: [
            {text:"Domain Name", correct: true},
            {text:"IP", correct: false},
            {text:"TCP", correct: false},
            {text:"Host", correct: false}
        ]
    },
    {
        question: "21. Which of the following is an input device?",
        answers: [
            {text:"Keyboard", correct: true},
            {text:"Monitor", correct: false},
            {text:"Printer", correct: false},
            {text:"Speaker", correct: false}
        ]
    },
    {
        question: "22. Which of the following is an output device?",
        answers: [
            {text:"Monitor", correct: true},
            {text:"Mouse", correct: false},
            {text:"Keyboard", correct: false},
            {text:"Scanner", correct: false}
        ]
    },
    {
        question: "23. What is the full form of RAM?",
        answers: [
            {text:"Random Access Memory", correct: true},
            {text:"Read Access Memory", correct: false},
            {text:"Random Available Memory", correct: false},
            {text:"Read Available Memory", correct: false}
        ]
    },
    {
        question: "24. What is the full form of ROM?",
        answers: [
            {text:"Read Only Memory", correct: true},
            {text:"Random Only Memory", correct: false},
            {text:"Read Optical Memory", correct: false},
            {text:"Random Optical Memory", correct: false}
        ]
    },
    {
        question: "25. Which type of memory is volatile (loses data when power is off)?",
        answers: [
            {text:"RAM", correct: true},
            {text:"ROM", correct: false},
            {text:"Hard Disk", correct: false},
            {text:"CD", correct: false}
        ]
    },
    {
        question: "26. What is the full form of CPU?",
        answers: [
            {text:"Central Processing Unit", correct: true},
            {text:"Central Program Unit", correct: false},
            {text:"Computer Processing Unit", correct: false},
            {text:"Central Processor Utility", correct: false}
        ]
    },
    {
        question: "27. Which component is known as the brain of the computer?",
        answers: [
            {text:"CPU", correct: true},
            {text:"RAM", correct: false},
            {text:"Hard Disk", correct: false},
            {text:"Monitor", correct: false}
        ]
    },
    {
        question: "28. 1 Byte is equal to how many bits?",
        answers: [
            {text:"8", correct: true},
            {text:"4", correct: false},
            {text:"16", correct: false},
            {text:"2", correct: false}
        ]
    },
    {
        question: "29. Which is the smallest unit of data in a computer?",
        answers: [
            {text:"Bit", correct: true},
            {text:"Byte", correct: false},
            {text:"Nibble", correct: false},
            {text:"Word", correct: false}
        ]
    },
    {
        question: "30. What is the full form of CD?",
        answers: [
            {text:"Compact Disk", correct: true},
            {text:"Computer Disk", correct: false},
            {text:"Compact Data", correct: false},
            {text:"Compact Drive", correct: false}
        ]
    },
    {
        question: "31. What is the full form of DVD?",
        answers: [
            {text:"Digital Versatile Disk", correct: true},
            {text:"Digital Video Disk", correct: false},
            {text:"Data Video Disk", correct: false},
            {text:"Digital Visual Device", correct: false}
        ]
    },
    {
        question: "32. Which generation of computers used transistors?",
        answers: [
            {text:"Second Generation", correct: true},
            {text:"First Generation", correct: false},
            {text:"Third Generation", correct: false},
            {text:"Fourth Generation", correct: false}
        ]
    },
    {
        question: "33. Which generation of computers used vacuum tubes?",
        answers: [
            {text:"First Generation", correct: true},
            {text:"Second Generation", correct: false},
            {text:"Third Generation", correct: false},
            {text:"Fourth Generation", correct: false}
        ]
    },
    {
        question: "34. Which generation of computers introduced microprocessors?",
        answers: [
            {text:"Fourth Generation", correct: true},
            {text:"First Generation", correct: false},
            {text:"Second Generation", correct: false},
            {text:"Third Generation", correct: false}
        ]
    },
    {
        question: "35. Which generation of computers used Integrated Circuits (ICs)?",
        answers: [
            {text:"Third Generation", correct: true},
            {text:"First Generation", correct: false},
            {text:"Second Generation", correct: false},
            {text:"Fourth Generation", correct: false}
        ]
    },
    {
        question: "36. Which of the following is an operating system?",
        answers: [
            {text:"Windows", correct: true},
            {text:"MS Word", correct: false},
            {text:"Photoshop", correct: false},
            {text:"Excel", correct: false}
        ]
    },
    {
        question: "37. Which of the following is NOT an operating system?",
        answers: [
            {text:"MS Excel", correct: true},
            {text:"Linux", correct: false},
            {text:"macOS", correct: false},
            {text:"Windows", correct: false}
        ]
    },
    {
        question: "38. What is the full form of OS?",
        answers: [
            {text:"Operating System", correct: true},
            {text:"Optical System", correct: false},
            {text:"Operational Software", correct: false},
            {text:"Operating Software", correct: false}
        ]
    },
    {
        question: "39. Which company developed the Windows operating system?",
        answers: [
            {text:"Microsoft", correct: true},
            {text:"Apple", correct: false},
            {text:"Google", correct: false},
            {text:"IBM", correct: false}
        ]
    },
    {
        question: "40. Which company developed the macOS operating system?",
        answers: [
            {text:"Apple", correct: true},
            {text:"Microsoft", correct: false},
            {text:"Google", correct: false},
            {text:"IBM", correct: false}
        ]
    },
    {
        question: "41. Linux is an example of which type of software?",
        answers: [
            {text:"Open source OS", correct: true},
            {text:"Proprietary OS", correct: false},
            {text:"Firmware", correct: false},
            {text:"Hardware", correct: false}
        ]
    },
    {
        question: "42. Which of the following is a programming language?",
        answers: [
            {text:"Python", correct: true},
            {text:"HTML", correct: false},
            {text:"CSS", correct: false},
            {text:"Excel", correct: false}
        ]
    },
    {
        question: "43. Which language is used for styling web pages?",
        answers: [
            {text:"CSS", correct: true},
            {text:"HTML", correct: false},
            {text:"Java", correct: false},
            {text:"C++", correct: false}
        ]
    },
    {
        question: "44. Which language is used to create the structure of a webpage?",
        answers: [
            {text:"HTML", correct: true},
            {text:"CSS", correct: false},
            {text:"JavaScript", correct: false},
            {text:"Python", correct: false}
        ]
    },
    {
        question: "45. Which of the following is a client-side scripting language?",
        answers: [
            {text:"JavaScript", correct: true},
            {text:"PHP", correct: false},
            {text:"Python", correct: false},
            {text:"Java", correct: false}
        ]
    },
    {
        question: "46. Which of the following is a database management system?",
        answers: [
            {text:"MySQL", correct: true},
            {text:"MS Word", correct: false},
            {text:"Photoshop", correct: false},
            {text:"VLC", correct: false}
        ]
    },
    {
        question: "47. What is the full form of SQL?",
        answers: [
            {text:"Structured Query Language", correct: true},
            {text:"Standard Query Language", correct: false},
            {text:"Simple Query Language", correct: false},
            {text:"Structured Question Language", correct: false}
        ]
    },
    {
        question: "48. Which key is used to delete the character to the left of the cursor?",
        answers: [
            {text:"Backspace", correct: true},
            {text:"Delete", correct: false},
            {text:"Enter", correct: false},
            {text:"Shift", correct: false}
        ]
    },
    {
        question: "49. Which key is used to delete the character to the right of the cursor?",
        answers: [
            {text:"Delete", correct: true},
            {text:"Backspace", correct: false},
            {text:"Enter", correct: false},
            {text:"Tab", correct: false}
        ]
    },
    {
        question: "50. What is Ctrl + C used for?",
        answers: [
            {text:"Copy", correct: true},
            {text:"Cut", correct: false},
            {text:"Paste", correct: false},
            {text:"Undo", correct: false}
        ]
    },
    {
        question: "51. What is Ctrl + V used for?",
        answers: [
            {text:"Paste", correct: true},
            {text:"Copy", correct: false},
            {text:"Cut", correct: false},
            {text:"Redo", correct: false}
        ]
    },
    {
        question: "52. What is Ctrl + X used for?",
        answers: [
            {text:"Cut", correct: true},
            {text:"Copy", correct: false},
            {text:"Paste", correct: false},
            {text:"Save", correct: false}
        ]
    },
    {
        question: "53. What is Ctrl + Z used for?",
        answers: [
            {text:"Undo", correct: true},
            {text:"Redo", correct: false},
            {text:"Save", correct: false},
            {text:"Print", correct: false}
        ]
    },
    {
        question: "54. What is Ctrl + S used for?",
        answers: [
            {text:"Save", correct: true},
            {text:"Save As", correct: false},
            {text:"Print", correct: false},
            {text:"Open", correct: false}
        ]
    },
    {
        question: "55. What is Ctrl + P used for?",
        answers: [
            {text:"Print", correct: true},
            {text:"Paste", correct: false},
            {text:"Preview", correct: false},
            {text:"Page Setup", correct: false}
        ]
    },
    {
        question: "56. The F1 key is generally used for?",
        answers: [
            {text:"Help", correct: true},
            {text:"Rename", correct: false},
            {text:"Refresh", correct: false},
            {text:"Save", correct: false}
        ]
    },
    {
        question: "57. The F2 key is generally used for?",
        answers: [
            {text:"Rename", correct: true},
            {text:"Help", correct: false},
            {text:"Refresh", correct: false},
            {text:"Save", correct: false}
        ]
    },
    {
        question: "58. The F5 key is generally used for?",
        answers: [
            {text:"Refresh", correct: true},
            {text:"Rename", correct: false},
            {text:"Help", correct: false},
            {text:"Print", correct: false}
        ]
    },
    {
        question: "59. Which device converts digital signals to analog and back for internet access over phone lines?",
        answers: [
            {text:"Modem", correct: true},
            {text:"Router", correct: false},
            {text:"Switch", correct: false},
            {text:"Hub", correct: false}
        ]
    },
    {
        question: "60. Which device connects multiple networks and directs data packets between them?",
        answers: [
            {text:"Router", correct: true},
            {text:"Switch", correct: false},
            {text:"Hub", correct: false},
            {text:"Modem", correct: false}
        ]
    },
    {
        question: "61. Which device broadcasts data to all connected computers on a LAN without any intelligence?",
        answers: [
            {text:"Hub", correct: true},
            {text:"Router", correct: false},
            {text:"Switch", correct: false},
            {text:"Gateway", correct: false}
        ]
    },
    {
        question: "62. Which device intelligently forwards data only to the intended device on a LAN?",
        answers: [
            {text:"Switch", correct: true},
            {text:"Hub", correct: false},
            {text:"Modem", correct: false},
            {text:"Repeater", correct: false}
        ]
    },
    {
        question: "63. Which of the following is a type of computer virus?",
        answers: [
            {text:"Trojan Horse", correct: true},
            {text:"Firewall", correct: false},
            {text:"Antivirus", correct: false},
            {text:"Router", correct: false}
        ]
    },
    {
        question: "64. Which software protects a computer from viruses?",
        answers: [
            {text:"Antivirus", correct: true},
            {text:"Trojan", correct: false},
            {text:"Worm", correct: false},
            {text:"Spyware", correct: false}
        ]
    },
    {
        question: "65. Which of the following is a network topology?",
        answers: [
            {text:"Star", correct: true},
            {text:"Circle", correct: false},
            {text:"Square", correct: false},
            {text:"Triangle", correct: false}
        ]
    },
    {
        question: "66. What is the full form of LAN?",
        answers: [
            {text:"Local Area Network", correct: true},
            {text:"Large Area Network", correct: false},
            {text:"Local Access Network", correct: false},
            {text:"Long Area Network", correct: false}
        ]
    },
    {
        question: "67. What is the full form of WAN?",
        answers: [
            {text:"Wide Area Network", correct: true},
            {text:"World Area Network", correct: false},
            {text:"Wide Access Network", correct: false},
            {text:"Wide Area Node", correct: false}
        ]
    },
    {
        question: "68. What is the full form of MAN in networking?",
        answers: [
            {text:"Metropolitan Area Network", correct: true},
            {text:"Main Area Network", correct: false},
            {text:"Metro Access Network", correct: false},
            {text:"Mobile Area Network", correct: false}
        ]
    },
    {
        question: "69. Which of the following is a secondary storage device?",
        answers: [
            {text:"Hard Disk", correct: true},
            {text:"RAM", correct: false},
            {text:"Cache", correct: false},
            {text:"Register", correct: false}
        ]
    },
    {
        question: "70. Which memory is the fastest in a computer system?",
        answers: [
            {text:"Register", correct: true},
            {text:"RAM", correct: false},
            {text:"Cache", correct: false},
            {text:"Hard Disk", correct: false}
        ]
    },
    {
        question: "71. Which of the following is a pointing device?",
        answers: [
            {text:"Mouse", correct: true},
            {text:"Keyboard", correct: false},
            {text:"Monitor", correct: false},
            {text:"Printer", correct: false}
        ]
    },
    {
        question: "72. Which of the following is NOT a web browser?",
        answers: [
            {text:"MS Word", correct: true},
            {text:"Chrome", correct: false},
            {text:"Firefox", correct: false},
            {text:"Edge", correct: false}
        ]
    },
    {
        question: "73. Which company developed the Chrome browser?",
        answers: [
            {text:"Google", correct: true},
            {text:"Microsoft", correct: false},
            {text:"Apple", correct: false},
            {text:"Mozilla", correct: false}
        ]
    },
    {
        question: "74. Which company developed the Firefox browser?",
        answers: [
            {text:"Mozilla", correct: true},
            {text:"Google", correct: false},
            {text:"Microsoft", correct: false},
            {text:"Apple", correct: false}
        ]
    },
    {
        question: "75. What is the full form of PDF?",
        answers: [
            {text:"Portable Document Format", correct: true},
            {text:"Personal Document File", correct: false},
            {text:"Printable Document Format", correct: false},
            {text:"Portable Data File", correct: false}
        ]
    },
    {
        question: "76. What is the full form of GUI?",
        answers: [
            {text:"Graphical User Interface", correct: true},
            {text:"General User Interface", correct: false},
            {text:"Graphical Unit Interface", correct: false},
            {text:"General Unit Interface", correct: false}
        ]
    },
    {
        question: "77. Which number system is used internally by computers?",
        answers: [
            {text:"Binary", correct: true},
            {text:"Decimal", correct: false},
            {text:"Octal", correct: false},
            {text:"Hexadecimal", correct: false}
        ]
    },
    {
        question: "78. How many digits are used in the binary number system?",
        answers: [
            {text:"2", correct: true},
            {text:"8", correct: false},
            {text:"10", correct: false},
            {text:"16", correct: false}
        ]
    },
    {
        question: "79. Which of the following is a valid binary number?",
        answers: [
            {text:"1010", correct: true},
            {text:"1234", correct: false},
            {text:"1789", correct: false},
            {text:"189A", correct: false}
        ]
    },
    {
        question: "80. The hexadecimal number system has which base?",
        answers: [
            {text:"16", correct: true},
            {text:"8", correct: false},
            {text:"10", correct: false},
            {text:"2", correct: false}
        ]
    },
    {
        question: "81. Which of the following is an example of system software?",
        answers: [
            {text:"Operating System", correct: true},
            {text:"MS Word", correct: false},
            {text:"Photoshop", correct: false},
            {text:"Tally", correct: false}
        ]
    },
    {
        question: "82. Which of the following is an example of application software?",
        answers: [
            {text:"MS Excel", correct: true},
            {text:"Windows", correct: false},
            {text:"Linux", correct: false},
            {text:"BIOS", correct: false}
        ]
    },
    {
        question: "83. What is the full form of BIOS?",
        answers: [
            {text:"Basic Input Output System", correct: true},
            {text:"Basic Internal Output System", correct: false},
            {text:"Binary Input Output System", correct: false},
            {text:"Basic Input Operating System", correct: false}
        ]
    },
    {
        question: "84. Which key combination is used to switch between open applications in Windows?",
        answers: [
            {text:"Alt + Tab", correct: true},
            {text:"Ctrl + Tab", correct: false},
            {text:"Shift + Tab", correct: false},
            {text:"Alt + Esc", correct: false}
        ]
    },
    {
        question: "85. Which symbol is mandatory in a valid email address?",
        answers: [
            {text:"@", correct: true},
            {text:"#", correct: false},
            {text:"$", correct: false},
            {text:"%", correct: false}
        ]
    },
    {
        question: "86. Which port number is used by HTTP by default?",
        answers: [
            {text:"80", correct: true},
            {text:"21", correct: false},
            {text:"443", correct: false},
            {text:"25", correct: false}
        ]
    },
    {
        question: "87. Which port number is used by HTTPS by default?",
        answers: [
            {text:"443", correct: true},
            {text:"80", correct: false},
            {text:"21", correct: false},
            {text:"25", correct: false}
        ]
    },
    {
        question: "88. Which port number is used by FTP by default?",
        answers: [
            {text:"21", correct: true},
            {text:"80", correct: false},
            {text:"443", correct: false},
            {text:"25", correct: false}
        ]
    },
    {
        question: "89. Which of the following is a cloud storage service?",
        answers: [
            {text:"Google Drive", correct: true},
            {text:"MS Paint", correct: false},
            {text:"VLC", correct: false},
            {text:"Notepad", correct: false}
        ]
    },
    {
        question: "90. Which of the following is a search engine?",
        answers: [
            {text:"Google", correct: true},
            {text:"Chrome", correct: false},
            {text:"Windows", correct: false},
            {text:"MS Word", correct: false}
        ]
    },
    {
        question: "91. Which of the following is an antivirus software?",
        answers: [
            {text:"Quick Heal", correct: true},
            {text:"Google Chrome", correct: false},
            {text:"MS Excel", correct: false},
            {text:"VLC", correct: false}
        ]
    },
    {
        question: "92. Which shortcut key is used to select all content?",
        answers: [
            {text:"Ctrl + A", correct: true},
            {text:"Ctrl + S", correct: false},
            {text:"Ctrl + Z", correct: false},
            {text:"Ctrl + X", correct: false}
        ]
    },
    {
        question: "93. Which device is used to input handwritten or printed text/images into a computer?",
        answers: [
            {text:"Scanner", correct: true},
            {text:"Printer", correct: false},
            {text:"Monitor", correct: false},
            {text:"Speaker", correct: false}
        ]
    },
    {
        question: "94. A byte consists of how many nibbles?",
        answers: [
            {text:"2", correct: true},
            {text:"4", correct: false},
            {text:"8", correct: false},
            {text:"1", correct: false}
        ]
    },
    {
        question: "95. Which of the following is a type of computer classified by size and power?",
        answers: [
            {text:"Supercomputer", correct: true},
            {text:"Software", correct: false},
            {text:"Firmware", correct: false},
            {text:"Protocol", correct: false}
        ]
    },
    {
        question: "96. Which was the first electronic general-purpose computer?",
        answers: [
            {text:"ENIAC", correct: true},
            {text:"UNIVAC", correct: false},
            {text:"IBM PC", correct: false},
            {text:"Apple I", correct: false}
        ]
    },
    {
        question: "97. Who is known as the father of computers?",
        answers: [
            {text:"Charles Babbage", correct: true},
            {text:"Bill Gates", correct: false},
            {text:"Steve Jobs", correct: false},
            {text:"Alan Turing", correct: false}
        ]
    },
    {
        question: "98. Which company manufactures the Windows operating system?",
        answers: [
            {text:"Microsoft", correct: true},
            {text:"Apple", correct: false},
            {text:"IBM", correct: false},
            {text:"Google", correct: false}
        ]
    },
    {
        question: "99. What is a firewall primarily used for?",
        answers: [
            {text:"Protect network from unauthorized access", correct: true},
            {text:"Increase internet speed", correct: false},
            {text:"Store data", correct: false},
            {text:"Print documents", correct: false}
        ]
    },
    {
        question: "100. Which of the following is a wearable computer device?",
        answers: [
            {text:"Smartwatch", correct: true},
            {text:"Desktop", correct: false},
            {text:"Printer", correct: false},
            {text:"Scanner", correct: false}
        ]
    }

];

/* ---------- Config ---------- */
const QUESTIONS_PER_QUIZ = 20; // how many questions to pick from the pool each round

/* ---------- DOM references ---------- */
const startScreen   = document.getElementById('start-screen');
const quizScreen    = document.getElementById('quiz-screen');
const resultScreen  = document.getElementById('result-screen');

const startBtn      = document.getElementById('start-btn');
const nextBtn       = document.getElementById('next-btn');
const retryBtn      = document.getElementById('retry-btn');

const qCountEl      = document.getElementById('q-count');
const qScoreLiveEl  = document.getElementById('q-score-live');
const progressFill  = document.getElementById('progress-fill');
const questionText  = document.getElementById('question-text');
const answersGrid   = document.getElementById('answers-grid');
const answerButtons = Array.from(document.querySelectorAll('.answer-btn'));

const resultTitle   = document.getElementById('result-title');
const resultMessage = document.getElementById('result-message');
const scoreNumber   = document.getElementById('score-number');
const scoreTotal    = document.getElementById('score-total');
const scoreCircle   = document.querySelector('.score-circle');

/* ---------- State ---------- */
let shuffledQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;

/* ---------- Helpers ---------- */
function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Shuffle both question order AND each question's answer order,
// keeping track of which answer object is correct.
function buildShuffledQuestions() {
//   const qOrder = shuffle(questions);
//   return qOrder.map(q => ({
//     question: q.question,
//     answers: shuffle(q.answers)
//   }));
const pool = shuffle(questions);                      // shuffle the entire 100
  const picked = pool.slice(0, QUESTIONS_PER_QUIZ);      // take the first 20 of the shuffle
  return picked.map(q => ({
    question: q.question,
    answers: shuffle(q.answers)
  }));
}

function showScreen(screen) {
  [startScreen, quizScreen, resultScreen].forEach(s => s.classList.add('hidden'));
  screen.classList.remove('hidden');
}

/* ---------- Quiz flow ---------- */
function startQuiz() {
  shuffledQuestions = buildShuffledQuestions();
  currentIndex = 0;
  score = 0;
  showScreen(quizScreen);
  loadQuestion();
}

function loadQuestion() {
  answered = false;
  nextBtn.disabled = true;
  nextBtn.textContent = currentIndex === shuffledQuestions.length - 1 ? 'See Results' : 'Next';

  const current = shuffledQuestions[currentIndex];
  questionText.textContent = current.question.replace(/^\d+\.\s*/, '');

  qCountEl.textContent = `Question ${currentIndex + 1} / ${shuffledQuestions.length}`;
  qScoreLiveEl.textContent = `Score: ${score}`;
  progressFill.style.width = `${((currentIndex) / shuffledQuestions.length) * 100}%`;

  answerButtons.forEach((btn, i) => {
    const answer = current.answers[i];
    btn.textContent = answer.text;
    btn.dataset.correct = answer.correct;
    btn.disabled = false;
    btn.classList.remove('selected', 'correct', 'wrong');
  });
}

function selectAnswer(e) {
  const btn = e.currentTarget;
  if (answered) return;
  answered = true;

  const isCorrect = btn.dataset.correct === 'true';
  if (isCorrect) score++;

  answerButtons.forEach(b => {
    b.disabled = true;
    if (b.dataset.correct === 'true') {
      b.classList.add('correct');
    } else if (b === btn) {
      b.classList.add('wrong');
    }
  });

  qScoreLiveEl.textContent = `Score: ${score}`;
  progressFill.style.width = `${((currentIndex + 1) / shuffledQuestions.length) * 100}%`;
  nextBtn.disabled = false;
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < shuffledQuestions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const total = shuffledQuestions.length;
  const pct = Math.round((score / total) * 100);

  showScreen(resultScreen);
  scoreNumber.textContent = score;
  scoreTotal.textContent = `/ ${total}`;
  scoreCircle.style.setProperty('--pct', pct);

  let title, message;
  if (pct === 100) {
    title = 'Perfect score!';
    message = 'You nailed every single question. Internet expert confirmed.';
  } else if (pct >= 70) {
    title = 'Nice work!';
    message = 'Solid grasp of the basics — just a couple to brush up on.';
  } else if (pct >= 40) {
    title = 'Good effort!';
    message = 'You know some of it — a quick review will fill the gaps.';
  } else {
    title = 'Keep practicing!';
    message = 'Give it another go — the questions shuffle every time.';
  }
  resultTitle.textContent = title;
  resultMessage.textContent = message;
}

/* ---------- Events ---------- */
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
retryBtn.addEventListener('click', startQuiz);
answerButtons.forEach(btn => btn.addEventListener('click', selectAnswer));
