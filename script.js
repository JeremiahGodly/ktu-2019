/**
 * Backlog Recovery Dashboard
 * Vanilla JS — localStorage persistence, no backend
 */

const STORAGE_KEY = 'backlogRecoveryData';

// Motivation quotes for engineering students
const QUOTES = [
  'The expert in anything was once a beginner who refused to quit.',
  'Backlogs are temporary. Your degree is permanent. Keep pushing.',
  'You don\'t have to be great to start, but you have to start to be great.',
  'One module a day keeps the supplementary away.',
  'Sleep is important, but so is passing Power Electronics.',
  'Your future self will thank you for every hour you study today.',
  'Control Systems can be controlled. You control your effort.',
  'November exams don\'t care about your excuses — only your preparation.',
  'Small daily improvements lead to stunning annual results.',
  'The only impossible journey is the one you never begin.',
  'Engineers solve problems. Right now, your problem is backlogs — solve it.',
  'Discipline beats motivation when motivation runs out at 2 AM.',
  'PYQs are your best friends. Treat them well.',
  'Every subject you finish is a victory. Celebrate the small wins.',
  'You\'re not behind — you\'re on a different timeline. Make it count.',
];

// Pre-populated local PYQ PDF files list
const LOCAL_PYQ_FILES = [
  {
    "filename": "Synchronous and Induction Machines (May 2014).pdf",
    "rel_path": "Btech cources/S5/Synchronous /Synchronous and Induction Machines (May 2014).pdf",
    "year": "2014",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines (May 2015).pdf",
    "rel_path": "Btech cources/S5/Synchronous /Synchronous and Induction Machines (May 2015).pdf",
    "year": "2015",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Signals and Systems (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Signals and Systems (December 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems (December 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Signals and Systems (December 2022) Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems (December 2022) Answer Key_1.pdf",
    "year": "2022",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Signals and Systems (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Signals and Systems (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems (June 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Signals and Systems (May 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems (May 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Signals and Systems (November 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems (November 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Signals and Systems (November 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems (November 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Signals and Systems Answer Key.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems Answer Key.pdf",
    "year": "PYQ",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Signals and Systems Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems Answer Key_1.pdf",
    "year": "PYQ",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Power Systems I (December 2020) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (December 2020) Answer Key.pdf",
    "year": "2020",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (June 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I (May 2000) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (May 2000) Answer Key.pdf",
    "year": "2000",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I (May 2005).pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (May 2005).pdf",
    "year": "2005",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I (May 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (May 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I (May 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (May 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I (May 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (May 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I (May 2022) Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (May 2022) Answer Key_1.pdf",
    "year": "2022",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I (May 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (May 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I (May 2025) Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (May 2025) Answer Key_1.pdf",
    "year": "2025",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I (May 2025) Answer Key_2.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (May 2025) Answer Key_2.pdf",
    "year": "2025",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I Answer Key.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I Answer Key.pdf",
    "year": "PYQ",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I Answer Key_1.pdf",
    "year": "PYQ",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I Answer Key_2.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I Answer Key_2.pdf",
    "year": "PYQ",
    "subject": "Power Systems I"
  },
  {
    "filename": "Synchronous and Induction Machines (2019) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines (2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines (December 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines (December 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines (January 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines (January 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines (May 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines (May 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines (November 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines (November 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines Answer Key.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines Answer Key.pdf",
    "year": "PYQ",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines Answer Key_1.pdf",
    "year": "PYQ",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Microprocessors and Microcontrollers (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Microprocessor/Microprocessors and Microcontrollers (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Microprocessors and Microcontrollers (December 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Microprocessor/Microprocessors and Microcontrollers (December 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Microprocessors and Microcontrollers (December 2022) Answer Key_2.pdf",
    "rel_path": "Btech cources/S5/Microprocessor/Microprocessors and Microcontrollers (December 2022) Answer Key_2.pdf",
    "year": "2022",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Microprocessors and Microcontrollers (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Microprocessor/Microprocessors and Microcontrollers (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Microprocessors and Microcontrollers (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Microprocessor/Microprocessors and Microcontrollers (June 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Microprocessors and Microcontrollers (May 2018) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Microprocessor/Microprocessors and Microcontrollers (May 2018) Answer Key.pdf",
    "year": "2018",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Microprocessors and Microcontrollers (May 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Microprocessor/Microprocessors and Microcontrollers (May 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Microprocessors and Microcontrollers (November 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Microprocessor/Microprocessors and Microcontrollers (November 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Microprocessors and Microcontrollers Answer Key.pdf",
    "rel_path": "Btech cources/S5/Microprocessor/Microprocessors and Microcontrollers Answer Key.pdf",
    "year": "PYQ",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Disaster Management (2021) Answer Key.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (December 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (December 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (December 2022) Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (December 2022) Answer Key_1.pdf",
    "year": "2022",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (December 2023) Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (December 2023) Answer Key_1.pdf",
    "year": "2023",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (June 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (June 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (June 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (March 2005) Answer Key.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (March 2005) Answer Key.pdf",
    "year": "2005",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (May 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (May 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (November 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (November 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management Answer Key.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management Answer Key.pdf",
    "year": "PYQ",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management Answer Key_1.pdf",
    "year": "PYQ",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management Answer Key_2.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management Answer Key_2.pdf",
    "year": "PYQ",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management Answer Key_3.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management Answer Key_3.pdf",
    "year": "PYQ",
    "subject": "Disaster Management"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (2022) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (December 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (December 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (December 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (December 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (January 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (January 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (June 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (June 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (June 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (May 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (May 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (May 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (May 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (November 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (November 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (November 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (November 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade Answer Key.pdf",
    "year": "PYQ",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_10.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_10.pdf",
    "year": "PYQ",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_11.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_11.pdf",
    "year": "PYQ",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_12.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_12.pdf",
    "year": "PYQ",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_14.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_14.pdf",
    "year": "PYQ",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_15.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_15.pdf",
    "year": "PYQ",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_16.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_16.pdf",
    "year": "PYQ",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_5.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_5.pdf",
    "year": "PYQ",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_6.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_6.pdf",
    "year": "PYQ",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_7.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_7.pdf",
    "year": "PYQ",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_8.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_8.pdf",
    "year": "PYQ",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_9.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_9.pdf",
    "year": "PYQ",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Analog Electronics QP_6.pdf",
    "rel_path": "Btech cources/S3/Analog electronics /Analog Electronics QP_6.pdf",
    "year": "PYQ",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Circuits and Networks (December 2019) Answer Key.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks (December 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks (December 2020) Answer Key.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks (December 2020) Answer Key.pdf",
    "year": "2020",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks (December 2020) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks (December 2020) Answer Key_1.pdf",
    "year": "2020",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks (December 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks (December 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks (December 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks (December 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks (December 2022) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks (December 2022) Answer Key_1.pdf",
    "year": "2022",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks (December 2023) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks (December 2023) Answer Key_1.pdf",
    "year": "2023",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks (June 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks (November 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks (November 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks Answer Key_1.pdf",
    "year": "PYQ",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks Answer Key_3.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks Answer Key_3.pdf",
    "year": "PYQ",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks Answer Key_4.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks Answer Key_4.pdf",
    "year": "PYQ",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Analog Electronics (December 2020) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics (December 2020) Answer Key.pdf",
    "year": "2020",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics (December 2020) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics (December 2020) Answer Key_1.pdf",
    "year": "2020",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics (December 2020) Answer Key_2.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics (December 2020) Answer Key_2.pdf",
    "year": "2020",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics (December 2020) Answer Key_3.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics (December 2020) Answer Key_3.pdf",
    "year": "2020",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics (December 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics (December 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics (December 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics (December 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics (June 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics (November 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics (November 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics Answer Key.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics Answer Key.pdf",
    "year": "PYQ",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics Answer Key_1.pdf",
    "year": "PYQ",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Measurements and Instrumentation (December 2020) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (December 2020) Answer Key.pdf",
    "year": "2020",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation (December 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (December 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation (December 2021) Answer Key_2.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (December 2021) Answer Key_2.pdf",
    "year": "2021",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation (December 2021) Answer Key_3.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (December 2021) Answer Key_3.pdf",
    "year": "2021",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation (December 2021) Answer Key_4.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (December 2021) Answer Key_4.pdf",
    "year": "2021",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation (December 2021) Answer Key_5.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (December 2021) Answer Key_5.pdf",
    "year": "2021",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation (December 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (December 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation (December 2023) Answer Key_2.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (December 2023) Answer Key_2.pdf",
    "year": "2023",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (June 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation (May 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (May 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation (November 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (November 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation Answer Key.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation Answer Key.pdf",
    "year": "PYQ",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation Answer Key_1.pdf",
    "year": "PYQ",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis Answer Key.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis Answer Key.pdf",
    "year": "PYQ",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (2023) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (December 2020) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (December 2020) Answer Key.pdf",
    "year": "2020",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (December 2020) Answer Key_2.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (December 2020) Answer Key_2.pdf",
    "year": "2020",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (December 2020) Answer Key_4.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (December 2020) Answer Key_4.pdf",
    "year": "2020",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (December 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (December 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (December 2021) Answer Key_2.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (December 2021) Answer Key_2.pdf",
    "year": "2021",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (December 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (December 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (June 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (June 2024) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (June 2024) Answer Key_1.pdf",
    "year": "2024",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (November 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (November 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Professional Ethics (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (December 2020) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (December 2020) Answer Key.pdf",
    "year": "2020",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (December 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (December 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (July 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (July 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (June 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (June 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (June 2023) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (June 2023) Answer Key_1.pdf",
    "year": "2023",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (June 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (May 2019) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (May 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (May 2020) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (May 2020) Answer Key.pdf",
    "year": "2020",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (May 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (May 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (May 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (May 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (May 2021) Answer Key_2.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (May 2021) Answer Key_2.pdf",
    "year": "2021",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (May 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (May 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (May 2022) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (May 2022) Answer Key_1.pdf",
    "year": "2022",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (November 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (November 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Probability, Random Processes & Numerical Methods Answer Key.pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes & Numerical Methods Answer Key.pdf",
    "year": "PYQ",
    "subject": "Probability, Random Processes and Numerical Methods"
  },
  {
    "filename": "Probability, Random Processes & Numerical Methods, Answer Key (July 2021).pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes & Numerical Methods, Answer Key (July 2021).pdf",
    "year": "2021",
    "subject": "Probability, Random Processes and Numerical Methods"
  },
  {
    "filename": "Probability, Random Processes & Numerical Methods, Answer Key (June 2023).pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes & Numerical Methods, Answer Key (June 2023).pdf",
    "year": "2023",
    "subject": "Probability, Random Processes and Numerical Methods"
  },
  {
    "filename": "Probability, Random Processes and Numerical Methods (December 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes and Numerical Methods (December 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Probability, Random Processes and Numerical Methods"
  },
  {
    "filename": "Probability, Random Processes and Numerical Methods (January 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes and Numerical Methods (January 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Probability, Random Processes and Numerical Methods"
  },
  {
    "filename": "Probability, Random Processes and Numerical Methods (June 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes and Numerical Methods (June 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Probability, Random Processes and Numerical Methods"
  },
  {
    "filename": "Probability, Random Processes and Numerical Methods (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes and Numerical Methods (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Probability, Random Processes and Numerical Methods"
  },
  {
    "filename": "Probability, Random Processes and Numerical Methods (May 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes and Numerical Methods (May 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Probability, Random Processes and Numerical Methods"
  },
  {
    "filename": "Probability, Random Processes and Numerical Methods (May 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes and Numerical Methods (May 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Probability, Random Processes and Numerical Methods"
  },
  {
    "filename": "Probability, Random Processes and Numerical Methods (May 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes and Numerical Methods (May 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Probability, Random Processes and Numerical Methods"
  },
  {
    "filename": "Probability, Random Processes and Numerical Methods (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes and Numerical Methods (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Probability, Random Processes and Numerical Methods"
  },
  {
    "filename": "Digital Electronics (2021) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Digital Electronics (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Digital Electronics (August 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (August 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Digital Electronics (December 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (December 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Digital Electronics (January 2020) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (January 2020) Answer Key.pdf",
    "year": "2020",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Digital Electronics (January 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (January 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Digital Electronics (June 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (June 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Digital Electronics (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Digital Electronics (June 2023) Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (June 2023) Answer Key_1.pdf",
    "year": "2023",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Digital Electronics (June 2023) Answer Key_2.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (June 2023) Answer Key_2.pdf",
    "year": "2023",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Digital Electronics (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (June 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Digital Electronics (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Digital Electronics Answer Key_2.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics Answer Key_2.pdf",
    "year": "PYQ",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Electromagnetic Theory (2019) Answer Key.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory (2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory (2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory (2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory (December 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory (December 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory (July 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory (July 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory (July 2021) Answer Key_2.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory (July 2021) Answer Key_2.pdf",
    "year": "2021",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory (July 2021) Answer Key_3.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory (July 2021) Answer Key_3.pdf",
    "year": "2021",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory (June 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory (June 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory (June 2022) Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory (June 2022) Answer Key_1.pdf",
    "year": "2022",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory (June 2023) Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory (June 2023) Answer Key_1.pdf",
    "year": "2023",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory Answer Key_1.pdf",
    "year": "PYQ",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "DC Machines and Transformers (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers (January 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers (January 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers (June 2023) Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers (June 2023) Answer Key_1.pdf",
    "year": "2023",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers (May 2019) Answer Key.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers (May 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers (May 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers (May 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers (May 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers (May 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers (May 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers (May 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers (May 2024) Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers (May 2024) Answer Key_1.pdf",
    "year": "2024",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Answer Key.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Answer Key.pdf",
    "year": "PYQ",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Answer Key_1.pdf",
    "year": "PYQ",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Answer Key_2.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Answer Key_2.pdf",
    "year": "PYQ",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "Constitution of India (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Constitution of India"
  },
  {
    "filename": "Constitution of India (July 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India (July 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Constitution of India"
  },
  {
    "filename": "Constitution of India (June 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India (June 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Constitution of India"
  },
  {
    "filename": "Constitution of India (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Constitution of India"
  },
  {
    "filename": "Constitution of India (May 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India (May 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Constitution of India"
  },
  {
    "filename": "Constitution of India (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Constitution of India"
  },
  {
    "filename": "Constitution of India (May 2024) Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India (May 2024) Answer Key_1.pdf",
    "year": "2024",
    "subject": "Constitution of India"
  },
  {
    "filename": "Constitution of India Answer Key.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India Answer Key.pdf",
    "year": "PYQ",
    "subject": "Constitution of India"
  },
  {
    "filename": "Constitution of India Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India Answer Key_1.pdf",
    "year": "PYQ",
    "subject": "Constitution of India"
  },
  {
    "filename": "Design and Engineering (2019) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (December 2020) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (December 2020) Answer Key.pdf",
    "year": "2020",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (December 2020) Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (December 2020) Answer Key_1.pdf",
    "year": "2020",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (December 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (December 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (December 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (December 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (July 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (July 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (July 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (July 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (June 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (June 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (June 2023) Answer Key_2.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (June 2023) Answer Key_2.pdf",
    "year": "2023",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (June 2023) Answer Key_3.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (June 2023) Answer Key_3.pdf",
    "year": "2023",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (June 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (May 2019) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (May 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (May 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (May 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (May 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (May 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (May 2021) Answer Key_3.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (May 2021) Answer Key_3.pdf",
    "year": "2021",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (May 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (May 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (May 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (May 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (November 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (November 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering Answer Key.pdf",
    "year": "PYQ",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering Answer Key_1.pdf",
    "year": "PYQ",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering Answer Key_2.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering Answer Key_2.pdf",
    "year": "PYQ",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering Answer Key_3.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering Answer Key_3.pdf",
    "year": "PYQ",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Programming in C (December 2024) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C (December 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C (July 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C (July 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C (July 2019) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C (July 2019) Answer Key_1.pdf",
    "year": "2019",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C (July 2021) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C (July 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C (July 2021) Answer Key_2.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C (July 2021) Answer Key_2.pdf",
    "year": "2021",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C (July 2021) Answer Key_3.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C (July 2021) Answer Key_3.pdf",
    "year": "2021",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C (July 2021) Answer Key_5.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C (July 2021) Answer Key_5.pdf",
    "year": "2021",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C (June 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C (June 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C (June 2019) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C (June 2019) Answer Key_1.pdf",
    "year": "2019",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C (June 2022) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C (June 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C (June 2023) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C (June 2023) Answer Key_1.pdf",
    "year": "2023",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C (May 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C (May 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Programming in C"
  },
  {
    "filename": "Linear Algebra & Calculus (December 2019).pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra & Calculus (December 2019).pdf",
    "year": "2019",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra & Calculus, Solved (December 2019).pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra & Calculus, Solved (December 2019).pdf",
    "year": "2019",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra & Calculus, Solved (December 2021).pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra & Calculus, Solved (December 2021).pdf",
    "year": "2021",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra & Calculus, Solved (January 2021).pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra & Calculus, Solved (January 2021).pdf",
    "year": "2021",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra and Calculus (December 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra and Calculus (December 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra and Calculus (December 2019) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra and Calculus (December 2019) Answer Key_1.pdf",
    "year": "2019",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra and Calculus (December 2019) Answer Key_2.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra and Calculus (December 2019) Answer Key_2.pdf",
    "year": "2019",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra and Calculus (December 2019) Answer Key_4.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra and Calculus (December 2019) Answer Key_4.pdf",
    "year": "2019",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra and Calculus (December 2019) Answer Key_5.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra and Calculus (December 2019) Answer Key_5.pdf",
    "year": "2019",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra and Calculus (December 2019) Answer Key_6.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra and Calculus (December 2019) Answer Key_6.pdf",
    "year": "2019",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra and Calculus (December 2019) Answer Key_7.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra and Calculus (December 2019) Answer Key_7.pdf",
    "year": "2019",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra and Calculus (December 2020) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra and Calculus (December 2020) Answer Key.pdf",
    "year": "2020",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra and Calculus (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra and Calculus (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra and Calculus (January 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra and Calculus (January 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra and Calculus (May 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra and Calculus (May 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Engineering Mechanics QP.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Mechanics QP.pdf",
    "year": "PYQ",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (December 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (December 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (December 2019) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (December 2019) Answer Key_1.pdf",
    "year": "2019",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (December 2019) Answer Key_4.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (December 2019) Answer Key_4.pdf",
    "year": "2019",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (December 2019) Answer Key_5.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (December 2019) Answer Key_5.pdf",
    "year": "2019",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (December 2019) Answer Key_6.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (December 2019) Answer Key_6.pdf",
    "year": "2019",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (December 2020) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (December 2020) Answer Key.pdf",
    "year": "2020",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (December 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (December 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (December 2022) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (December 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (January 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (January 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (June 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (June 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (June 2019) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (June 2019) Answer Key_1.pdf",
    "year": "2019",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (June 2022) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (June 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (May 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (May 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (May 2019) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (May 2019) Answer Key_1.pdf",
    "year": "2019",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (May 2019) Answer Key_2.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (May 2019) Answer Key_2.pdf",
    "year": "2019",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (May 2021) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (May 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A Answer Key.pdf",
    "year": "PYQ",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Basics of Electrical & Electronics Engg, Answer Key QP.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engg, Answer Key QP.pdf",
    "year": "PYQ",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering (December 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (December 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering (December 2019) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (December 2019) Answer Key_1.pdf",
    "year": "2019",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering (December 2019) Answer Key_2.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (December 2019) Answer Key_2.pdf",
    "year": "2019",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering (December 2019) Answer Key_3.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (December 2019) Answer Key_3.pdf",
    "year": "2019",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering (December 2019) Answer Key_4.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (December 2019) Answer Key_4.pdf",
    "year": "2019",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering (December 2019) Answer Key_5.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (December 2019) Answer Key_5.pdf",
    "year": "2019",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering (December 2019) Answer Key_6.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (December 2019) Answer Key_6.pdf",
    "year": "2019",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering (January 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (January 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering (July 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (July 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering (June 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (June 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering (June 2019) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (June 2019) Answer Key_1.pdf",
    "year": "2019",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering (May 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (May 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering (May 2022) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (May 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering (October 2021) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (October 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering (October 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (October 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering Answer Key.pdf",
    "year": "PYQ",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Vector Calculus, Differential Equations & Transforms Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations & Transforms Answer Key.pdf",
    "year": "PYQ",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations and Transforms (December 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations and Transforms (December 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations and Transforms (July 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations and Transforms (July 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations and Transforms (July 2021) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations and Transforms (July 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations and Transforms (June 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations and Transforms (June 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations and Transforms (June 2019) Answer Key_3.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations and Transforms (June 2019) Answer Key_3.pdf",
    "year": "2019",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations and Transforms (May 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations and Transforms (May 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations and Transforms (May 2019) Answer Key_2.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations and Transforms (May 2019) Answer Key_2.pdf",
    "year": "2019",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Engineering Mechanics (December 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics (December 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Engineering Mechanics (December 2019) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics (December 2019) Answer Key_1.pdf",
    "year": "2019",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Engineering Mechanics (December 2019) Answer Key_2.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics (December 2019) Answer Key_2.pdf",
    "year": "2019",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Engineering Mechanics (December 2019) Answer Key_3.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics (December 2019) Answer Key_3.pdf",
    "year": "2019",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Engineering Mechanics (December 2019) Answer Key_4.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics (December 2019) Answer Key_4.pdf",
    "year": "2019",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Engineering Mechanics (December 2019) Answer Key_5.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics (December 2019) Answer Key_5.pdf",
    "year": "2019",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Engineering Mechanics (December 2019) Answer Key_6.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics (December 2019) Answer Key_6.pdf",
    "year": "2019",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Engineering Mechanics (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Engineering Mechanics (January 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics (January 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Engineering Mechanics (July 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics (July 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Engineering Mechanics (June 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics (June 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Engineering Mechanics (June 2019) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics (June 2019) Answer Key_1.pdf",
    "year": "2019",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Engineering Mechanics (May 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics (May 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Engineering Mechanics (May 2019) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics (May 2019) Answer Key_1.pdf",
    "year": "2019",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Engineering Mechanics Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics Answer Key.pdf",
    "year": "PYQ",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Engineering Mechanics, Answer Key (December 2020).pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics, Answer Key (December 2020).pdf",
    "year": "2020",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Engineering Mechanics, Answer Key (June 2022).pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics, Answer Key (June 2022).pdf",
    "year": "2022",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Mechanics Answer Key (2020 Dec.).pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Mechanics Answer Key (2020 Dec.).pdf",
    "year": "2020",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Electrical System Design & Estimation (April 2011) Answer Key.pdf",
    "rel_path": "Btech cources/S8/Design/Electrical System Design & Estimation (April 2011) Answer Key.pdf",
    "year": "2011",
    "subject": "Electrical System Design & Estimation"
  },
  {
    "filename": "Electrical System Design & Estimation (June 2011) Answer Key.pdf",
    "rel_path": "Btech cources/S8/Design/Electrical System Design & Estimation (June 2011) Answer Key.pdf",
    "year": "2011",
    "subject": "Electrical System Design & Estimation"
  },
  {
    "filename": "Electrical System Design & Estimation (May 2003) Answer Key.pdf",
    "rel_path": "Btech cources/S8/Design/Electrical System Design & Estimation (May 2003) Answer Key.pdf",
    "year": "2003",
    "subject": "Electrical System Design & Estimation"
  },
  {
    "filename": "Electrical System Design & Estimation (May 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S8/Design/Electrical System Design & Estimation (May 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Electrical System Design & Estimation"
  },
  {
    "filename": "Energy Management (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S8/Energy management/Energy Management (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Energy Management"
  },
  {
    "filename": "Energy Management (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S8/Energy management/Energy Management (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Energy Management"
  },
  {
    "filename": "Energy Management (May 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S8/Energy management/Energy Management (May 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Energy Management"
  },
  {
    "filename": "Energy Management (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S8/Energy management/Energy Management (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Energy Management"
  },
  {
    "filename": "Renewable Energy Systems (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Renewable Energy Systems/Renewable Energy Systems (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Renewable Energy Systems"
  },
  {
    "filename": "Renewable Energy Systems (December 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Renewable Energy Systems/Renewable Energy Systems (December 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Renewable Energy Systems"
  },
  {
    "filename": "Renewable Energy Systems (June 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Renewable Energy Systems/Renewable Energy Systems (June 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Renewable Energy Systems"
  },
  {
    "filename": "Renewable Energy Systems (June 2022) Answer Key_2.pdf",
    "rel_path": "Btech cources/S6/Renewable Energy Systems/Renewable Energy Systems (June 2022) Answer Key_2.pdf",
    "year": "2022",
    "subject": "Renewable Energy Systems"
  },
  {
    "filename": "Renewable Energy Systems (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Renewable Energy Systems/Renewable Energy Systems (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Renewable Energy Systems"
  },
  {
    "filename": "Renewable Energy Systems (March 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Renewable Energy Systems/Renewable Energy Systems (March 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Renewable Energy Systems"
  },
  {
    "filename": "Power Systems II (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power system 2/Power Systems II (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Power Systems II"
  },
  {
    "filename": "Power Systems II (December 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power system 2/Power Systems II (December 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Power Systems II"
  },
  {
    "filename": "Power Systems II (June 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power system 2/Power Systems II (June 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Power Systems II"
  },
  {
    "filename": "Power Systems II (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power system 2/Power Systems II (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Power Systems II"
  },
  {
    "filename": "Power Systems II (May 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power system 2/Power Systems II (May 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Power Systems II"
  },
  {
    "filename": "Power Systems II (May 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power system 2/Power Systems II (May 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Power Systems II"
  },
  {
    "filename": "Power Systems II (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power system 2/Power Systems II (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Power Systems II"
  },
  {
    "filename": "Power Systems II Answer Key_1.pdf",
    "rel_path": "Btech cources/S6/Power system 2/Power Systems II Answer Key_1.pdf",
    "year": "PYQ",
    "subject": "Power Systems II"
  },
  {
    "filename": "Power Electronics (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics (December 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics (December 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics (June 2022) Answer Key_1.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics (June 2022) Answer Key_1.pdf",
    "year": "2022",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics (May 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics (May 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics Answer Key_2.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics Answer Key_2.pdf",
    "year": "PYQ",
    "subject": "Power Electronics"
  },
  {
    "filename": "Comprehensive Course Work (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Comprehensive/Comprehensive Course Work (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Comprehensive"
  },
  {
    "filename": "Comprehensive Course Work (December 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Comprehensive/Comprehensive Course Work (December 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Comprehensive"
  },
  {
    "filename": "Comprehensive Course Work (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Comprehensive/Comprehensive Course Work (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Comprehensive"
  },
  {
    "filename": "Comprehensive Course Work (May 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Comprehensive/Comprehensive Course Work (May 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Comprehensive"
  },
  {
    "filename": "Comprehensive Course Work (May 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Comprehensive/Comprehensive Course Work (May 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Comprehensive"
  },
  {
    "filename": "Comprehensive Course Work (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Comprehensive/Comprehensive Course Work (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Comprehensive"
  },
  {
    "filename": "Management for Engineers (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Management of Engineering"
  },
  {
    "filename": "Management for Engineers (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Management of Engineering"
  },
  {
    "filename": "Management for Engineers (December 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (December 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Management of Engineering"
  },
  {
    "filename": "Management for Engineers (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Management of Engineering"
  },
  {
    "filename": "Management for Engineers (December 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (December 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Management of Engineering"
  },
  {
    "filename": "Management for Engineers (July 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (July 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Management of Engineering"
  },
  {
    "filename": "Management for Engineers (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Management of Engineering"
  },
  {
    "filename": "Management for Engineers (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (June 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Management of Engineering"
  },
  {
    "filename": "Management for Engineers (May 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (May 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Management of Engineering"
  },
  {
    "filename": "Management for Engineers (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Management of Engineering"
  },
  {
    "filename": "Management for Engineers (May 2024) Answer Key_1.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (May 2024) Answer Key_1.pdf",
    "year": "2024",
    "subject": "Management of Engineering"
  },
  {
    "filename": "Management for Engineers (May 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (May 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Management of Engineering"
  },
  {
    "filename": "Management for Engineers (May 2025) Answer Key_1.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (May 2025) Answer Key_1.pdf",
    "year": "2025",
    "subject": "Management of Engineering"
  },
  {
    "filename": "Management for Engineers Answer Key.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers Answer Key.pdf",
    "year": "PYQ",
    "subject": "Management of Engineering"
  },
  {
    "filename": "Management for Engineers Answer Key_1.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers Answer Key_1.pdf",
    "year": "PYQ",
    "subject": "Management of Engineering"
  },
  {
    "filename": "Linear Control Systems (2019) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems (2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Linear Control Systems (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Linear Control Systems (April 2025) Answer Key_1.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems (April 2025) Answer Key_1.pdf",
    "year": "2025",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Linear Control Systems (December 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems (December 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Linear Control Systems (June 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems (June 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Linear Control Systems (June 2022) Answer Key_1.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems (June 2022) Answer Key_1.pdf",
    "year": "2022",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Linear Control Systems (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Linear Control Systems (May 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems (May 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Linear Control Systems (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Linear Control Systems Answer Key.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems Answer Key.pdf",
    "year": "PYQ",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Linear Control Systems Answer Key_1.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems Answer Key_1.pdf",
    "year": "PYQ",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Electric Drives (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Electric Drives"
  },
  {
    "filename": "Electric Drives (December 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives (December 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Electric Drives"
  },
  {
    "filename": "Electric Drives (December 2022) Answer Key_1.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives (December 2022) Answer Key_1.pdf",
    "year": "2022",
    "subject": "Electric Drives"
  },
  {
    "filename": "Electric Drives (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Electric Drives"
  },
  {
    "filename": "Electric Drives (May 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives (May 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Electric Drives"
  },
  {
    "filename": "Electric Drives (May 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives (May 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Electric Drives"
  },
  {
    "filename": "Electric Drives (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Electric Drives"
  },
  {
    "filename": "Electric Drives (November 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives (November 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Electric Drives"
  },
  {
    "filename": "Introduction to Mobile Computing (2019) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Mobile Computing/Introduction to Mobile Computing (2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Mobile Computing"
  },
  {
    "filename": "Introduction to Mobile Computing (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Mobile Computing/Introduction to Mobile Computing (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Mobile Computing"
  },
  {
    "filename": "Introduction to Mobile Computing (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Mobile Computing/Introduction to Mobile Computing (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Mobile Computing"
  },
  {
    "filename": "Introduction to Mobile Computing (November 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Mobile Computing/Introduction to Mobile Computing (November 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Mobile Computing"
  },
  {
    "filename": "Industrial Safety Engineering QP.pdf",
    "rel_path": "Btech cources/S7/Industrial Safety Engineering/Industrial Safety Engineering QP.pdf",
    "year": "PYQ",
    "subject": "Industrial Safety Engineering"
  },
  {
    "filename": "Industrial Safety Engineering (December 2022).pdf",
    "rel_path": "Btech cources/S7/Industrial Safety Engineering/Question Papers/Industrial Safety Engineering (December 2022).pdf",
    "year": "2022",
    "subject": "Industrial Safety Engineering"
  },
  {
    "filename": "Industrial Safety Engineering (December 2023).pdf",
    "rel_path": "Btech cources/S7/Industrial Safety Engineering/Question Papers/Industrial Safety Engineering (December 2023).pdf",
    "year": "2023",
    "subject": "Industrial Safety Engineering"
  },
  {
    "filename": "Industrial Safety Engineering (May 2023).pdf",
    "rel_path": "Btech cources/S7/Industrial Safety Engineering/Question Papers/Industrial Safety Engineering (May 2023).pdf",
    "year": "2023",
    "subject": "Industrial Safety Engineering"
  },
  {
    "filename": "Industrial Safety Engineering (May 2024).pdf",
    "rel_path": "Btech cources/S7/Industrial Safety Engineering/Question Papers/Industrial Safety Engineering (May 2024).pdf",
    "year": "2024",
    "subject": "Industrial Safety Engineering"
  },
  {
    "filename": "Industrial Safety Engineering (November 2024).pdf",
    "rel_path": "Btech cources/S7/Industrial Safety Engineering/Question Papers/Industrial Safety Engineering (November 2024).pdf",
    "year": "2024",
    "subject": "Industrial Safety Engineering"
  },
  {
    "filename": "ACS full pyq and answer keys.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/PYQs/ACS full pyq and answer keys.pdf",
    "year": "PYQ",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/PYQs/Advanced Control Systems (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems (November 2024) Answer Key_1.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/PYQs/Advanced Control Systems (November 2024) Answer Key_1.pdf",
    "year": "2024",
    "subject": "Advanced Control Systems"
  }
];

const LOCAL_NOTE_FILES = [
  {
    "filename": "Synchronous and Induction Machines - Sim-Short-Notes.pdf",
    "rel_path": "Btech cources/S5/Synchronous /Synchronous and Induction Machines - Sim-Short-Notes.pdf",
    "format": "PDF Notes",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Power Systems I - Module 1.pdf",
    "rel_path": "Btech cources/S5/Power system /Power Systems I - Module 1.pdf",
    "format": "PDF Notes",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I Notes_10.pdf",
    "rel_path": "Btech cources/S5/Power system /Power Systems I Notes_10.pdf",
    "format": "PDF Notes",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I module4.pdf",
    "rel_path": "Btech cources/S5/Power system /Power Systems I module4.pdf",
    "format": "PDF Notes",
    "subject": "Power Systems I"
  },
  {
    "filename": "Signals and Systems Notes_10.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems Notes_10.pdf",
    "format": "PDF Notes",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Signals and Systems Notes_11.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems Notes_11.pdf",
    "format": "PDF Notes",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Signals and Systems Notes_12.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems Notes_12.pdf",
    "format": "PDF Notes",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Signals and Systems Notes_13.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems Notes_13.pdf",
    "format": "PDF Notes",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Signals and Systems Notes_14.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems Notes_14.pdf",
    "format": "PDF Notes",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Microprocessors and Microcontrollers - Module 1.pdf",
    "rel_path": "Btech cources/S5/Microprocessor /Microprocessors and Microcontrollers - Module 1.pdf",
    "format": "PDF Notes",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Microprocessors and Microcontrollers - Module 2.pdf",
    "rel_path": "Btech cources/S5/Microprocessor /Microprocessors and Microcontrollers - Module 2.pdf",
    "format": "PDF Notes",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Microprocessors and Microcontrollers - Module 4.pdf",
    "rel_path": "Btech cources/S5/Microprocessor /Microprocessors and Microcontrollers - Module 4.pdf",
    "format": "PDF Notes",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Power Systems I Lab Manual.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I Lab Manual.pdf",
    "format": "Lab Manual",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I Lab Manual_1.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I Lab Manual_1.pdf",
    "format": "Lab Manual",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I Syllabus.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I Syllabus.pdf",
    "format": "PDF Notes",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I.pdf",
    "format": "PDF Notes",
    "subject": "Power Systems I"
  },
  {
    "filename": "Synchronous and Induction Machines (2021).pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines (2021).pdf",
    "format": "PDF Notes",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines.pdf",
    "format": "PDF Notes",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines_1.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines_1.pdf",
    "format": "PDF Notes",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Microprocessors and Microcontrollers - Module 1 Q&A.pdf",
    "rel_path": "Btech cources/S5/Microprocessor/Microprocessors and Microcontrollers - Module 1 Q&A.pdf",
    "format": "PDF Notes",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Microprocessors and Microcontrollers - Module 3.pdf",
    "rel_path": "Btech cources/S5/Microprocessor/Microprocessors and Microcontrollers - Module 3.pdf",
    "format": "PDF Notes",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Microprocessors and Microcontrollers - Module 5.pdf",
    "rel_path": "Btech cources/S5/Microprocessor/Microprocessors and Microcontrollers - Module 5.pdf",
    "format": "PDF Notes",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "DM M1 Ktunotes.in.pdf",
    "rel_path": "Btech cources/S5/DM/DM M1 Ktunotes.in.pdf",
    "format": "PDF Notes",
    "subject": "Disaster Management"
  },
  {
    "filename": "DM M2 Ktunotes.in.pdf",
    "rel_path": "Btech cources/S5/DM/DM M2 Ktunotes.in.pdf",
    "format": "PDF Notes",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (2005).pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (2005).pdf",
    "format": "PDF Notes",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (2005)_1.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (2005)_1.pdf",
    "format": "PDF Notes",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management - Dm Question Bank 2.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management - Dm Question Bank 2.pdf",
    "format": "PDF Notes",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management Notes_9.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management Notes_9.pdf",
    "format": "PDF Notes",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management.pdf",
    "format": "PDF Notes",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management_1.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management_1.pdf",
    "format": "PDF Notes",
    "subject": "Disaster Management"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (2023).pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (2023).pdf",
    "format": "PDF Notes",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade - Ieft-Important Essay Questions.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade - Ieft-Important Essay Questions.pdf",
    "format": "PDF Notes",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade - Industrial Economics Full Notes.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade - Industrial Economics Full Notes.pdf",
    "format": "PDF Notes",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade Lab Manual.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade Lab Manual.pdf",
    "format": "Lab Manual",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade Notes_17.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade Notes_17.pdf",
    "format": "PDF Notes",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade Notes_3.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade Notes_3.pdf",
    "format": "PDF Notes",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade Notes_31.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade Notes_31.pdf",
    "format": "PDF Notes",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade Notes_32.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade Notes_32.pdf",
    "format": "PDF Notes",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade Notes_33.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade Notes_33.pdf",
    "format": "PDF Notes",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade Notes_34.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade Notes_34.pdf",
    "format": "PDF Notes",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade Notes_35.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade Notes_35.pdf",
    "format": "PDF Notes",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade Notes_36.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade Notes_36.pdf",
    "format": "PDF Notes",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade Notes_37.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade Notes_37.pdf",
    "format": "PDF Notes",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade Notes_38.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade Notes_38.pdf",
    "format": "PDF Notes",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade Notes_39.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade Notes_39.pdf",
    "format": "PDF Notes",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Analog Electronics Notes.pdf",
    "rel_path": "Btech cources/S3/Analog electronics /Analog Electronics Notes.pdf",
    "format": "PDF Notes",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics Notes_1.pdf",
    "rel_path": "Btech cources/S3/Analog electronics /Analog Electronics Notes_1.pdf",
    "format": "PDF Notes",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics Notes_2.pdf",
    "rel_path": "Btech cources/S3/Analog electronics /Analog Electronics Notes_2.pdf",
    "format": "PDF Notes",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics Notes_3.pdf",
    "rel_path": "Btech cources/S3/Analog electronics /Analog Electronics Notes_3.pdf",
    "format": "PDF Notes",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics Notes_4.pdf",
    "rel_path": "Btech cources/S3/Analog electronics /Analog Electronics Notes_4.pdf",
    "format": "PDF Notes",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Circuits and Networks Notes_10.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks Notes_10.pdf",
    "format": "PDF Notes",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks Notes_11.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks Notes_11.pdf",
    "format": "PDF Notes",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks Notes_12.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks Notes_12.pdf",
    "format": "PDF Notes",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks Notes_13.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks Notes_13.pdf",
    "format": "PDF Notes",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks Notes_5.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks Notes_5.pdf",
    "format": "PDF Notes",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks Notes_7.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks Notes_7.pdf",
    "format": "PDF Notes",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks Notes_8.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks Notes_8.pdf",
    "format": "PDF Notes",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks Notes_9.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks Notes_9.pdf",
    "format": "PDF Notes",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks, Solved (2021).pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks, Solved (2021).pdf",
    "format": "PDF Notes",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks, Solved Notes.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks, Solved Notes.pdf",
    "format": "PDF Notes",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Analog Electronics.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics.pdf",
    "format": "PDF Notes",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Measurements and Instrumentation Notes_10.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation Notes_10.pdf",
    "format": "PDF Notes",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation Notes_11.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation Notes_11.pdf",
    "format": "PDF Notes",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation Notes_12.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation Notes_12.pdf",
    "format": "PDF Notes",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation Notes_15.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation Notes_15.pdf",
    "format": "PDF Notes",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation Notes_16.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation Notes_16.pdf",
    "format": "PDF Notes",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation Notes_17.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation Notes_17.pdf",
    "format": "PDF Notes",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation Notes_18.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation Notes_18.pdf",
    "format": "PDF Notes",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation Notes_9.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation Notes_9.pdf",
    "format": "PDF Notes",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation.pdf",
    "format": "PDF Notes",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation_1.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation_1.pdf",
    "format": "PDF Notes",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Dec 2023.pdf",
    "rel_path": "Btech cources/S3/Maths/Dec 2023.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis Notes.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis Notes.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis Notes_10.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis Notes_10.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis Notes_11.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis Notes_11.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis Notes_12.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis Notes_12.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis Notes_13.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis Notes_13.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis Notes_14.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis Notes_14.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis Notes_15.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis Notes_15.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis Notes_16.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis Notes_16.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis Notes_8.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis Notes_8.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis Notes_9.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis Notes_9.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis, Solved Notes.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis, Solved Notes.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis, Solved Notes_1.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis, Solved Notes_1.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Probability, Random Processes & Numerical Methods Notes.pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes & Numerical Methods Notes.pdf",
    "format": "PDF Notes",
    "subject": "Probability, Random Processes and Numerical Methods"
  },
  {
    "filename": "Probability, Random Processes and Numerical Methods - Module 1.pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes and Numerical Methods - Module 1.pdf",
    "format": "PDF Notes",
    "subject": "Probability, Random Processes and Numerical Methods"
  },
  {
    "filename": "Probability, Random Processes and Numerical Methods - Module 2.pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes and Numerical Methods - Module 2.pdf",
    "format": "PDF Notes",
    "subject": "Probability, Random Processes and Numerical Methods"
  },
  {
    "filename": "Probability, Random Processes and Numerical Methods - Module 3.pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes and Numerical Methods - Module 3.pdf",
    "format": "PDF Notes",
    "subject": "Probability, Random Processes and Numerical Methods"
  },
  {
    "filename": "Probability, Random Processes and Numerical Methods - Module 4.pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes and Numerical Methods - Module 4.pdf",
    "format": "PDF Notes",
    "subject": "Probability, Random Processes and Numerical Methods"
  },
  {
    "filename": "Probability, Random Processes and Numerical Methods - Module 5.pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes and Numerical Methods - Module 5.pdf",
    "format": "PDF Notes",
    "subject": "Probability, Random Processes and Numerical Methods"
  },
  {
    "filename": "Digital Electronics Lab Manual.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics Lab Manual.pdf",
    "format": "Lab Manual",
    "subject": "Digital Electronics"
  },
  {
    "filename": "DC Machines and Transformers - 5.4_Autotransformer.pdf",
    "rel_path": "Btech cources/S4/DCMT /Mod5/DC Machines and Transformers - 5.4_Autotransformer.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers - 5.5_Paralleling Conditions.pdf",
    "rel_path": "Btech cources/S4/DCMT /Mod5/DC Machines and Transformers - 5.5_Paralleling Conditions.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers - Transformer On No Load.pdf",
    "rel_path": "Btech cources/S4/DCMT /Mod5/DC Machines and Transformers - Transformer On No Load.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers - Armature Reaction.pdf",
    "rel_path": "Btech cources/S4/DCMT /Mod2/DC Machines and Transformers - Armature Reaction.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers - Lap Winding.pdf",
    "rel_path": "Btech cources/S4/DCMT /Mod1/DC Machines and Transformers - Lap Winding.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers - Wave Winding Diagram.pdf",
    "rel_path": "Btech cources/S4/DCMT /Mod1/DC Machines and Transformers - Wave Winding Diagram.pdf",
    "format": "Diagram",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "Electromagnetic Theory - Doc-20230313-Wa0000_.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory - Doc-20230313-Wa0000_.pdf",
    "format": "PDF Notes",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory - Emtmod-4.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory - Emtmod-4.pdf",
    "format": "PDF Notes",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory - Imp-Matching.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory - Imp-Matching.pdf",
    "format": "PDF Notes",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory - Module 2.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory - Module 2.pdf",
    "format": "PDF Notes",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory - Module 3.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory - Module 3.pdf",
    "format": "PDF Notes",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory - Module 5.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory - Module 5.pdf",
    "format": "PDF Notes",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory - Screenshot 2024-06-16 At 7.48.06 Pm.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory - Screenshot 2024-06-16 At 7.48.06 Pm.pdf",
    "format": "PDF Notes",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory.pdf",
    "format": "PDF Notes",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "mod-5.pdf",
    "rel_path": "Btech cources/S4/EMT note/mod-5.pdf",
    "format": "PDF Notes",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "DC Machines and Transformers Lab Manual.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Lab Manual.pdf",
    "format": "Lab Manual",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_1.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_1.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_10.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_10.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_11.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_11.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_12.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_12.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_13.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_13.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_2.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_2.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_3.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_3.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_4.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_4.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_5.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_5.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_6.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_6.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_7.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_7.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_8.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_8.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_9.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_9.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers_1.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers_1.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers_10.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers_10.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers_11.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers_11.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers_12.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers_12.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers_13.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers_13.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers_2.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers_2.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers_3.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers_3.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers_4.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers_4.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers_5.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers_5.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers_6.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers_6.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers_7.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers_7.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers_8.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers_8.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers_9.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers_9.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "Electrical Machines Lab I Lab Manual.pdf",
    "rel_path": "Btech cources/S4/DCMT/Electrical Machines Lab I Lab Manual.pdf",
    "format": "Lab Manual",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "Electrical Machines Lab I.pdf",
    "rel_path": "Btech cources/S4/DCMT/Electrical Machines Lab I.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "Constitution of India Syllabus.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India Syllabus.pdf",
    "format": "PDF Notes",
    "subject": "Constitution of India"
  },
  {
    "filename": "Constitution of India Syllabus_1.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India Syllabus_1.pdf",
    "format": "PDF Notes",
    "subject": "Constitution of India"
  },
  {
    "filename": "Constitution of India Syllabus_2.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India Syllabus_2.pdf",
    "format": "PDF Notes",
    "subject": "Constitution of India"
  },
  {
    "filename": "Constitution of India.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India.pdf",
    "format": "PDF Notes",
    "subject": "Constitution of India"
  },
  {
    "filename": "Design and Engineering Lab Manual.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering Lab Manual.pdf",
    "format": "Lab Manual",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering Lab Manual_2.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering Lab Manual_2.pdf",
    "format": "Lab Manual",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering.pdf",
    "format": "PDF Notes",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Programming in C - Module 3 Arrays (Handwritten).pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C - Module 3 Arrays (Handwritten).pdf",
    "format": "PDF Notes",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C Notes.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C Notes.pdf",
    "format": "PDF Notes",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C Syllabus.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C Syllabus.pdf",
    "format": "PDF Notes",
    "subject": "Programming in C"
  },
  {
    "filename": "Linear Algebra & Calculus (2021).pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra & Calculus (2021).pdf",
    "format": "PDF Notes",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra & Calculus Notes.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra & Calculus Notes.pdf",
    "format": "PDF Notes",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra & Calculus Notes_1.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra & Calculus Notes_1.pdf",
    "format": "PDF Notes",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra & Calculus, Solved (2020).pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra & Calculus, Solved (2020).pdf",
    "format": "PDF Notes",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra and Calculus.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra and Calculus.pdf",
    "format": "PDF Notes",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra and Calculus_1.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra and Calculus_1.pdf",
    "format": "PDF Notes",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Maths Improvement-jan 2021.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Maths Improvement-jan 2021.pdf",
    "format": "PDF Notes",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Engineering Physics A - Module 3.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A - Module 3.pdf",
    "format": "PDF Notes",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A - Module 5.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A - Module 5.pdf",
    "format": "PDF Notes",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A.pdf",
    "format": "PDF Notes",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "M3 Quantum Mechanics Note.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/M3 Quantum Mechanics Note.pdf",
    "format": "PDF Notes",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Basics of Electrical & Electronics Engg Notes_2.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engg Notes_2.pdf",
    "format": "PDF Notes",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering - Module 2.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering - Module 2.pdf",
    "format": "PDF Notes",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering - Module 3.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering - Module 3.pdf",
    "format": "PDF Notes",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering - Module 4.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering - Module 4.pdf",
    "format": "PDF Notes",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering - Module 5.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering - Module 5.pdf",
    "format": "PDF Notes",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering - Module 6.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering - Module 6.pdf",
    "format": "PDF Notes",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering.pdf",
    "format": "PDF Notes",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering_1.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering_1.pdf",
    "format": "PDF Notes",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Vector Calculus, Differential Equations & Transforms (2020).pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations & Transforms (2020).pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations & Transforms (2020)_1.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations & Transforms (2020)_1.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations & Transforms (2020)_2.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations & Transforms (2020)_2.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations & Transforms (2020)_3.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations & Transforms (2020)_3.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations & Transforms (2020)_4.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations & Transforms (2020)_4.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations & Transforms Notes.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations & Transforms Notes.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations & Transforms Notes_1.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations & Transforms Notes_1.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations & Transforms Notes_10.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations & Transforms Notes_10.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations & Transforms Notes_11.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations & Transforms Notes_11.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations & Transforms Notes_12.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations & Transforms Notes_12.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations & Transforms Notes_13.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations & Transforms Notes_13.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations & Transforms Notes_9.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations & Transforms Notes_9.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "DocScanner 31-Mar-2023 3-55 pm.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Maths/DocScanner 31-Mar-2023 3-55 pm.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus Notes (Handwritten).pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Maths/Vector Calculus Notes (Handwritten).pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations and Transforms - Divergence,Curl,Conservative Field, Line Integrals.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Maths/Vector Calculus, Differential Equations and Transforms - Divergence,Curl,Conservative Field, Line Integrals.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations and Transforms - Module 1.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Maths/Vector Calculus, Differential Equations and Transforms - Module 1.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Engineering Mechanics Notes.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics Notes.pdf",
    "format": "PDF Notes",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Electrical System Design & Estimation Lab Manual.pdf",
    "rel_path": "Btech cources/S8/Design/Electrical System Design & Estimation Lab Manual.pdf",
    "format": "Lab Manual",
    "subject": "Electrical System Design & Estimation"
  },
  {
    "filename": "Energy Management (2015) Lab Manual.pdf",
    "rel_path": "Btech cources/S8/Energy management/Energy Management (2015) Lab Manual.pdf",
    "format": "Lab Manual",
    "subject": "Energy Management"
  },
  {
    "filename": "btech-ee-6-sem-power-systems-analysis-ee306-jul-2021.pdf",
    "rel_path": "Btech cources/S6/Power system 2/btech-ee-6-sem-power-systems-analysis-ee306-jul-2021.pdf",
    "format": "PDF Notes",
    "subject": "Power Systems II"
  },
  {
    "filename": "Linear Control Systems Notes_14.pdf",
    "rel_path": "Btech cources/S6/Linear control system /Linear Control Systems Notes_14.pdf",
    "format": "PDF Notes",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Linear Control Systems Notes_16.pdf",
    "rel_path": "Btech cources/S6/Linear control system /Linear Control Systems Notes_16.pdf",
    "format": "PDF Notes",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Linear Control Systems Lab Manual.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems Lab Manual.pdf",
    "format": "Lab Manual",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Linear Control Systems Lab Manual_1.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems Lab Manual_1.pdf",
    "format": "Lab Manual",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Linear Control Systems.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems.pdf",
    "format": "PDF Notes",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Linear Control Systems_1.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems_1.pdf",
    "format": "PDF Notes",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Linear Control Systems_2.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems_2.pdf",
    "format": "PDF Notes",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Electric Drives (2013).pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives (2013).pdf",
    "format": "PDF Notes",
    "subject": "Electric Drives"
  },
  {
    "filename": "Electric Drives Notes_1.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives Notes_1.pdf",
    "format": "PDF Notes",
    "subject": "Electric Drives"
  },
  {
    "filename": "Electric Drives Notes_10.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives Notes_10.pdf",
    "format": "PDF Notes",
    "subject": "Electric Drives"
  },
  {
    "filename": "Electric Drives Notes_6.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives Notes_6.pdf",
    "format": "PDF Notes",
    "subject": "Electric Drives"
  },
  {
    "filename": "Electric Drives Notes_7.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives Notes_7.pdf",
    "format": "PDF Notes",
    "subject": "Electric Drives"
  },
  {
    "filename": "Electric Drives Notes_9.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives Notes_9.pdf",
    "format": "PDF Notes",
    "subject": "Electric Drives"
  },
  {
    "filename": "Speed vs Torque Characteristics Diagram.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Speed vs Torque Characteristics Diagram.pdf",
    "format": "Diagram",
    "subject": "Electric Drives"
  },
  {
    "filename": "Introduction to Mobile Computing - Module 2.pdf",
    "rel_path": "Btech cources/S7/Mobile Computing/Introduction to Mobile Computing - Module 2.pdf",
    "format": "PDF Notes",
    "subject": "Mobile Computing"
  },
  {
    "filename": "Introduction to Mobile Computing - Module 3.pdf",
    "rel_path": "Btech cources/S7/Mobile Computing/Introduction to Mobile Computing - Module 3.pdf",
    "format": "PDF Notes",
    "subject": "Mobile Computing"
  },
  {
    "filename": "Introduction to Mobile Computing - Module 4.pdf",
    "rel_path": "Btech cources/S7/Mobile Computing/Introduction to Mobile Computing - Module 4.pdf",
    "format": "PDF Notes",
    "subject": "Mobile Computing"
  },
  {
    "filename": "Introduction to Mobile Computing - Module 5.pdf",
    "rel_path": "Btech cources/S7/Mobile Computing/Introduction to Mobile Computing - Module 5.pdf",
    "format": "PDF Notes",
    "subject": "Mobile Computing"
  },
  {
    "filename": "Mobile Comp-M4-Ktunotes.in.pdf",
    "rel_path": "Btech cources/S7/Mobile Computing/Mobile Comp-M4-Ktunotes.in.pdf",
    "format": "PDF Notes",
    "subject": "Mobile Computing"
  },
  {
    "filename": "Mobile Comp-M5-Ktunotes.in.pdf",
    "rel_path": "Btech cources/S7/Mobile Computing/Mobile Comp-M5-Ktunotes.in.pdf",
    "format": "PDF Notes",
    "subject": "Mobile Computing"
  },
  {
    "filename": "Industrial Safety Engineering - Mcn401-A-8.pdf",
    "rel_path": "Btech cources/S7/Industrial Safety Engineering/Industrial Safety Engineering - Mcn401-A-8.pdf",
    "format": "PDF Notes",
    "subject": "Industrial Safety Engineering"
  },
  {
    "filename": "Advanced Control Systems (2014).pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems (2014).pdf",
    "format": "PDF Notes",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems Notes.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems Notes.pdf",
    "format": "PDF Notes",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems Notes_2.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems Notes_2.pdf",
    "format": "PDF Notes",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems Notes_5.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems Notes_5.pdf",
    "format": "PDF Notes",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems Notes_7.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems Notes_7.pdf",
    "format": "PDF Notes",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems Syllabus.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems Syllabus.pdf",
    "format": "PDF Notes",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems.pdf",
    "format": "PDF Notes",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "EET401 ADVANCED CONTROL SYSTEMS, MAY 2026.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/PYQs/EET401 ADVANCED CONTROL SYSTEMS, MAY 2026.pdf",
    "format": "PDF Notes",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "EET401 ADVANCED CONTROL SYSTEMS, NOVEMBER 2025.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/PYQs/EET401 ADVANCED CONTROL SYSTEMS, NOVEMBER 2025.pdf",
    "format": "PDF Notes",
    "subject": "Advanced Control Systems"
  }
];

// Curated YouTube search queries/playlists for KTU EEE 2019 Scheme subjects
const CURATED_YOUTUBE_LINKS = {
  "MAT101": "https://www.youtube.com/results?search_query=KTU+MAT101+Linear+Algebra+and+Calculus+playlist",
  "EST100": "https://www.youtube.com/results?search_query=KTU+EST100+Engineering+Mechanics+playlist",
  "EST130": "https://www.youtube.com/results?search_query=KTU+EST130+Basics+of+Electrical+and+Electronics+playlist",
  "MAT102": "https://www.youtube.com/results?search_query=KTU+MAT102+Vector+Calculus+Differential+Equations+playlist",
  "PHT100": "https://www.youtube.com/results?search_query=KTU+PHT100+Engineering+Physics+A+playlist",
  "EST102": "https://www.youtube.com/results?search_query=KTU+EST102+Programming+in+C+playlist",
  "MAT201": "https://www.youtube.com/results?search_query=KTU+MAT201+Partial+Differential+Equations+Complex+Analysis+playlist",
  "EET201": "https://www.youtube.com/results?search_query=KTU+EET201+Circuits+and+Networks+playlist",
  "EET203": "https://www.youtube.com/results?search_query=KTU+EET203+Measurements+and+Instrumentation+playlist",
  "EET205": "https://www.youtube.com/results?search_query=KTU+EET205+Analog+Electronics+playlist",
  "HUT200": "https://www.youtube.com/results?search_query=KTU+HUT200+Professional+Ethics+playlist",
  "MAT204": "https://www.youtube.com/results?search_query=KTU+MAT204+Probability+Random+Processes+playlist",
  "EET202": "https://www.youtube.com/results?search_query=KTU+EET202+DC+Machines+and+Transformers+playlist",
  "EET204": "https://www.youtube.com/results?search_query=KTU+EET204+Electromagnetic+Theory+playlist",
  "EET206": "https://www.youtube.com/results?search_query=KTU+EET206+Digital+Electronics+playlist",
  "EST200": "https://www.youtube.com/results?search_query=KTU+EST200+Design+and+Engineering+playlist",
  "MCN202": "https://www.youtube.com/results?search_query=KTU+MCN202+Constitution+of+India+playlist",
  "EET301": "https://www.youtube.com/results?search_query=KTU+EET301+Power+Systems+I+playlist",
  "EET303": "https://www.youtube.com/results?search_query=KTU+EET303+Microprocessors+and+Microcontrollers+playlist",
  "EET305": "https://www.youtube.com/results?search_query=KTU+EET305+Signals+and+Systems+playlist",
  "EET307": "https://www.youtube.com/results?search_query=KTU+EET307+Synchronous+and+Induction+Machines+playlist",
  "HUT300": "https://www.youtube.com/results?search_query=KTU+HUT300+Industrial+Economics+Foreign+Trade+playlist",
  "MCN301": "https://www.youtube.com/results?search_query=KTU+MCN301+Disaster+Management+playlist",
  "EET302": "https://www.youtube.com/results?search_query=KTU+EET302+Linear+Control+Systems+playlist",
  "EET304": "https://www.youtube.com/results?search_query=KTU+EET304+Power+Systems+II+playlist",
  "EET306": "https://www.youtube.com/results?search_query=KTU+EET306+Power+Electronics+playlist",
  "EET322": "https://www.youtube.com/results?search_query=KTU+EET322+Renewable+Energy+Systems+playlist",
  "HUT310": "https://www.youtube.com/results?search_query=KTU+HUT310+Management+for+Engineers+playlist",
  "EET401": "https://www.youtube.com/results?search_query=KTU+EET401+Advanced+Control+Systems+playlist",
  "EET413": "https://www.youtube.com/results?search_query=KTU+EET413+Electric+Drives+playlist",
  "CST415": "https://www.youtube.com/results?search_query=KTU+CST415+Mobile+Computing+playlist",
  "EET402": "https://www.youtube.com/results?search_query=KTU+EET402+Electrical+System+Design+Estimation+playlist",
  "EET424": "https://www.youtube.com/results?search_query=KTU+EET424+Energy+Management+playlist",
  "EET426": "https://www.youtube.com/results?search_query=KTU+EET426+Special+Electrical+Machines+playlist",
  "EET468": "https://www.youtube.com/results?search_query=KTU+EET468+Industrial+Instrumentation+Automation+playlist"
};

/** Get valid YouTube class link for KTU subject name */
function getYoutubeUrlForSubject(subjectName) {
  // Extract subject code, e.g. "Linear Algebra and Calculus (MAT101)" -> MAT101
  const match = subjectName.match(/\(([^)]+)\)/);
  const code = match ? match[1] : null;
  if (code && CURATED_YOUTUBE_LINKS[code]) {
    return CURATED_YOUTUBE_LINKS[code];
  }
  // Fallback search link
  const query = encodeURIComponent("KTU " + subjectName + " playlist classes");
  return "https://www.youtube.com/results?search_query=" + query;
}

// Sample EEE subjects pre-loaded on first visit
const SAMPLE_SUBJECTS = [
  {
    name: "Linear Algebra and Calculus (MAT101)",
    difficulty: "Dangerous",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: false,
    status: "Not Started",
    category: "Killer"
  },
  {
    name: "Engineering Mechanics (EST100)",
    difficulty: "Dangerous",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: false,
    status: "Not Started",
    category: "Survival"
  },
  {
    name: "Basics of Electrical & Electronics Engineering (EST130)",
    difficulty: "Medium",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: true,
    status: "Not Started",
    category: "Survival"
  },
  {
    name: "Vector Calculus, Differential Equations and Transforms (MAT102)",
    difficulty: "Dangerous",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: false,
    status: "Not Started",
    category: "Killer"
  },
  {
    name: "Engineering Physics A (PHT100)",
    difficulty: "Dangerous",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: true,
    status: "Not Started",
    category: "Survival"
  },
  {
    name: "Programming in C (EST102)",
    difficulty: "Medium",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: true,
    status: "Not Started",
    category: "Survival"
  },
  {
    name: "Partial Differential Equations and Complex Analysis (MAT201)",
    difficulty: "Dangerous",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: false,
    status: "Not Started",
    category: "Killer"
  },
  {
    name: "Circuits and Networks (EET201)",
    difficulty: "Dangerous",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: false,
    status: "Not Started",
    category: "Killer"
  },
  {
    name: "Measurements and Instrumentation (EET203)",
    difficulty: "Medium",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: false,
    theory: true,
    status: "Not Started",
    category: "Repeated"
  },
  {
    name: "Analog Electronics (EET205)",
    difficulty: "Dangerous",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: true,
    status: "Not Started",
    category: "Killer"
  },
  {
    name: "Professional Ethics (HUT200)",
    difficulty: "Easy",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: false,
    theory: true,
    status: "Not Started",
    category: "Survival"
  },
  {
    name: "Probability, Random Processes and Numerical Methods (MAT204)",
    difficulty: "Dangerous",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: false,
    status: "Not Started",
    category: "Killer"
  },
  {
    name: "DC Machines and Transformers (EET202)",
    difficulty: "Dangerous",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: true,
    status: "Not Started",
    category: "Repeated"
  },
  {
    name: "Electromagnetic Theory (EET204)",
    difficulty: "Dangerous",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: false,
    status: "Not Started",
    category: "Killer"
  },
  {
    name: "Digital Electronics (EET206)",
    difficulty: "Medium",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: true,
    status: "Not Started",
    category: "Repeated"
  },
  {
    name: "Design and Engineering (EST200)",
    difficulty: "Easy",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: false,
    theory: true,
    status: "Not Started",
    category: "Survival"
  },
  {
    name: "Constitution of India (MCN202)",
    difficulty: "Easy",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: false,
    theory: true,
    status: "Not Started",
    category: "Survival"
  },
  {
    name: "Electrical Machines Lab I (EEL202)",
    difficulty: "Easy",
    modules: 1,
    internal: "Not Attended",
    pyq: false,
    numericals: false,
    theory: true,
    status: "Not Started",
    category: "Repeated"
  },
  {
    name: "Power Systems I (EET301)",
    difficulty: "Medium",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: true,
    status: "Not Started",
    category: "Repeated"
  },
  {
    name: "Microprocessors and Microcontrollers (EET303)",
    difficulty: "Dangerous",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: true,
    status: "Not Started",
    category: "Repeated"
  },
  {
    name: "Signals and Systems (EET305)",
    difficulty: "Dangerous",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: false,
    status: "Not Started",
    category: "Killer"
  },
  {
    name: "Synchronous and Induction Machines (EET307)",
    difficulty: "Dangerous",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: true,
    status: "Not Started",
    category: "Repeated"
  },
  {
    name: "Industrial Economics & Foreign Trade (HUT300)",
    difficulty: "Medium",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: true,
    status: "Not Started",
    category: "Survival"
  },
  {
    name: "Disaster Management (MCN301)",
    difficulty: "Easy",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: false,
    theory: true,
    status: "Not Started",
    category: "Survival"
  },
  {
    name: "Linear Control Systems (EET302)",
    difficulty: "Dangerous",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: false,
    status: "Not Started",
    category: "Killer"
  },
  {
    name: "Power Systems II (EET304)",
    difficulty: "Medium",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: true,
    status: "Not Started",
    category: "Repeated"
  },
  {
    name: "Power Electronics (EET306)",
    difficulty: "Dangerous",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: true,
    status: "Not Started",
    category: "Killer"
  },
  {
    name: "Renewable Energy Systems (EET322)",
    difficulty: "Medium",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: false,
    theory: true,
    status: "Not Started",
    category: "Repeated"
  },
  {
    name: "Management for Engineers (HUT310)",
    difficulty: "Easy",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: false,
    theory: true,
    status: "Not Started",
    category: "Survival"
  },
  {
    name: "Comprehensive Course Work (EET308)",
    difficulty: "Medium",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: true,
    status: "Not Started",
    category: "Survival"
  },
  {
    name: "Advanced Control Systems (EET401)",
    difficulty: "Dangerous",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: false,
    status: "Not Started",
    category: "Killer"
  },
  {
    name: "Electric Drives (EET413)",
    difficulty: "Medium",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: true,
    status: "Not Started",
    category: "Repeated"
  },
  {
    name: "Introduction to Mobile Computing (CST415)",
    difficulty: "Medium",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: false,
    theory: true,
    status: "Not Started",
    category: "Repeated"
  },
  {
    name: "Electrical System Design & Estimation (EET402)",
    difficulty: "Medium",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: true,
    status: "Not Started",
    category: "Repeated"
  },
  {
    name: "Energy Management (EET424)",
    difficulty: "Easy",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: false,
    theory: true,
    status: "Not Started",
    category: "Repeated"
  },
  {
    name: "Special Electrical Machines (EET426)",
    difficulty: "Medium",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: false,
    theory: true,
    status: "Not Started",
    category: "Repeated"
  },
  {
    name: "Industrial Instrumentation & Automation (EET468)",
    difficulty: "Medium",
    modules: 5,
    internal: "Not Attended",
    pyq: true,
    numericals: true,
    theory: true,
    status: "Not Started",
    category: "Repeated"
  },
  {
    name: "Comprehensive Course Viva (EET404)",
    difficulty: "Medium",
    modules: 1,
    internal: "Not Attended",
    pyq: false,
    numericals: false,
    theory: true,
    status: "Not Started",
    category: "Survival"
  },
  {
    name: "Project Phase II (EED416)",
    difficulty: "Easy",
    modules: 1,
    internal: "Not Attended",
    pyq: false,
    numericals: false,
    theory: true,
    status: "Not Started",
    category: "Survival"
  }
];

// Page titles per section
const PAGE_TITLES = {
  dashboard: ['Dashboard', 'Your recovery command center'],
  timetable: ['Exam Timetable', 'Official KTU 2019 Scheme exam schedule & countdown'],
  subjects: ['Subjects', 'Manage your backlog subjects'],
  categories: ['Categories', 'Survival · Repeated · Killer'],
  planner: ['Study Planner', 'Daily schedule & weekly goals'],
  pyq: ['PYQ Tracker', 'Previous year questions progress'],
  notes: ['Notes', 'Quick study notes by subject'],
  pomodoro: ['Pomodoro', 'Focus timer & motivation'],
  settings: ['Settings', 'Export, import & exam date'],
};

// App state
let state = {
  subjects: [],
  dailySchedule: [],
  weeklyGoals: [],
  revisionTracker: [],
  pyqEntries: [],
  notes: [],
  examDate: '2026-11-23',
  pomodoroSessions: 0,
  pomodoroSessionsDate: '',
  plannerCompletedSlots: {},
};

// Pomodoro state
let pomodoro = {
  totalSeconds: 25 * 60,
  remainingSeconds: 25 * 60,
  intervalId: null,
  isRunning: false,
  mode: 'work',
};

// ========== Storage & Login ==========

let activeUser = localStorage.getItem('backlogRecoveryActiveUser') || '';

function showLoginScreen() {
  document.getElementById('loginScreen').classList.remove('hidden');
  document.getElementById('loginRegNum').value = '';
}

function hideLoginScreen() {
  document.getElementById('loginScreen').classList.add('hidden');
}

function login(regNum) {
  if (!regNum) return;
  activeUser = regNum;
  localStorage.setItem('backlogRecoveryActiveUser', regNum);
  
  // Clear state in memory to prevent data bleeding
  state = {
    subjects: [],
    dailySchedule: [],
    weeklyGoals: [],
    revisionTracker: [],
    pyqEntries: [],
    notes: [],
    examDate: '2026-11-15',
    pomodoroSessions: 0,
    pomodoroSessionsDate: '',
    plannerCompletedSlots: {},
  };
  
  loadState();
  renderAll();
  showToast(`Logged in as ${regNum}`);
}

function logout() {
  if (!confirm('Log out / Switch register number?')) return;
  activeUser = '';
  localStorage.removeItem('backlogRecoveryActiveUser');
  showLoginScreen();
  document.getElementById('activeUserReg').textContent = '';
}

/** Auto-detect semester from course code in subject name */
function detectSemesterFromCode(name) {
  const match = name.match(/\(([A-Z]{3})(\d{3})\)/);
  if (match) {
    const code = match[2];
    if (code.startsWith('1')) {
      if (code === '102') return 'S2';
      return 'S1';
    } else if (code.startsWith('2')) {
      const num = parseInt(code, 10);
      if (num % 2 !== 0) return 'S3';
      return 'S4';
    } else if (code.startsWith('3')) {
      const num = parseInt(code, 10);
      if (num % 2 !== 0) return 'S5';
      return 'S6';
    } else if (code.startsWith('4')) {
      const num = parseInt(code, 10);
      if (num % 2 !== 0 || code === '415') return 'S7';
      return 'S8';
    }
  }
  return 'S1';
}
function getCourseCode(name) {
  const match = name.match(/\(([^)]+)\)/);
  return match ? match[1] : name;
}

window.showSubjectNotes = function(name) {
  navigateTo('notes');
  const code = getCourseCode(name);
  const noteSearch = document.getElementById('noteFileSearch');
  if (noteSearch) {
    noteSearch.value = code;
  }
  renderLocalNoteFiles(code);
};

window.showSubjectQPs = function(name) {
  navigateTo('pyq');
  const code = getCourseCode(name);
  const pyqSearch = document.getElementById('pyqFileSearch');
  if (pyqSearch) {
    pyqSearch.value = code;
  }
  renderLocalPyqFiles(code);
};

window.toggleSubjectShortcuts = function(e, subjectName, type) {
  e.preventDefault();
  e.stopPropagation();
  
  // Remove any existing shortcuts modals or legacy dropdowns
  document.querySelectorAll('.shortcuts-modal-overlay, .shortcuts-dropdown').forEach(d => d.remove());
  
  const cleanSubName = getCourseCode(subjectName);
  
  // Find matching files
  const files = (type === 'notes' ? LOCAL_NOTE_FILES : LOCAL_PYQ_FILES)
    .filter(f => f.subject.toLowerCase().includes(cleanSubName.toLowerCase()) || 
                 subjectName.toLowerCase().includes(f.subject.toLowerCase()));
                 
  if (files.length === 0) {
    showToast(`No local ${type === 'notes' ? 'notes' : 'question papers'} found for this subject.`, 'info');
    return;
  }
  
  // Create overlay element
  const overlay = document.createElement('div');
  overlay.className = 'shortcuts-modal-overlay';
  
  // Create content container
  const content = document.createElement('div');
  content.className = 'shortcuts-modal-content glass';
  
  const titleText = `${type === 'notes' ? '📂 Study Notes' : '📂 Question Papers'}: ${escapeHtml(subjectName)}`;
  
  // Build content markup with horizontal grid-based folder view and a local search bar
  content.innerHTML = `
    <div class="shortcuts-modal-header">
      <h4>${titleText}</h4>
      <button class="shortcuts-modal-close" aria-label="Close modal">×</button>
    </div>
    <div class="shortcuts-search-bar">
      <input type="text" id="modalFileSearch" placeholder="Search files in this folder..." class="modal-search-input" autocomplete="off">
    </div>
    <div class="shortcuts-modal-body">
      ${files.map(f => {
        const displayName = f.filename.replace('.pdf', '');
        const meta = type === 'notes' ? (f.format || 'Notes') : (f.year || 'QP');
        
        // Premium outline SVGs for notes vs question papers
        const iconSvg = type === 'notes' ? `
          <svg class="file-icon-svg notes-accent" viewBox="0 0 24 24" width="44" height="44" style="fill: none; stroke: #0ea5e9; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; margin-bottom: 0.15rem;">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        ` : `
          <svg class="file-icon-svg qp-accent" viewBox="0 0 24 24" width="44" height="44" style="fill: none; stroke: #f97316; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; margin-bottom: 0.15rem;">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        `;
        
        return `
          <a href="${encodeURI(f.rel_path)}" target="_blank" class="folder-file-card type-${type}" data-filename="${escapeHtml(displayName)}" title="${escapeHtml(displayName)}">
            ${iconSvg}
            <span class="folder-file-card-title">${escapeHtml(displayName)}</span>
            <span class="folder-file-card-meta">${escapeHtml(meta)}</span>
          </a>
        `;
      }).join('')}
    </div>
  `;
  
  overlay.appendChild(content);
  document.body.appendChild(overlay);
  
  // Prevent click events inside the modal content from propagating to the overlay
  content.addEventListener('click', (ev) => {
    ev.stopPropagation();
  });
  
  // Filter file cards dynamically based on search query
  const searchInput = content.querySelector('#modalFileSearch');
  const modalBody = content.querySelector('.shortcuts-modal-body');
  if (searchInput && modalBody) {
    searchInput.focus();
    searchInput.addEventListener('input', (ev) => {
      const q = ev.target.value.toLowerCase();
      let visibleCount = 0;
      content.querySelectorAll('.folder-file-card').forEach(card => {
        const title = card.getAttribute('data-filename').toLowerCase();
        if (title.includes(q)) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });
      
      let emptyMsg = content.querySelector('.modal-empty-state');
      if (visibleCount === 0) {
        if (!emptyMsg) {
          emptyMsg = document.createElement('div');
          emptyMsg.className = 'modal-empty-state';
          emptyMsg.style.cssText = 'grid-column: 1 / -1; text-align: center; padding: 3rem 1.5rem; color: var(--text-muted); font-size: 0.85rem; display: flex; flex-direction: column; align-items: center; gap: 0.5rem;';
          emptyMsg.innerHTML = `
            <span style="font-size: 1.5rem;">🔍</span>
            <span>No files matching "${escapeHtml(ev.target.value)}" found.</span>
          `;
          modalBody.appendChild(emptyMsg);
        } else {
          emptyMsg.innerHTML = `
            <span style="font-size: 1.5rem;">🔍</span>
            <span>No files matching "${escapeHtml(ev.target.value)}" found.</span>
          `;
          emptyMsg.style.display = 'flex';
        }
      } else {
        if (emptyMsg) {
          emptyMsg.style.display = 'none';
        }
      }
    });
  }
  
  // Close modal function
  const closeModal = () => {
    overlay.remove();
    document.removeEventListener('keydown', handleEsc);
  };
  
  // Close on Escape key press
  const handleEsc = (ev) => {
    if (ev.key === 'Escape') {
      closeModal();
    }
  };
  document.addEventListener('keydown', handleEsc);
  
  // Close on clicking backdrop
  overlay.addEventListener('click', closeModal);
  
  // Close on clicking close button
  content.querySelector('.shortcuts-modal-close').addEventListener('click', closeModal);
};


/** Load data from localStorage or initialize with samples */
function loadState() {
  if (!activeUser) {
    showLoginScreen();
    state = {
      subjects: [],
      dailySchedule: [],
      weeklyGoals: [],
      revisionTracker: [],
      pyqEntries: [],
      notes: [],
      examDate: '2026-11-15',
      pomodoroSessions: 0,
      pomodoroSessionsDate: '',
    };
    return;
  }

  hideLoginScreen();
  document.getElementById('activeUserReg').textContent = activeUser;

  const userStorageKey = `backlogRecoveryData_${activeUser}`;
  const saved = localStorage.getItem(userStorageKey);
  if (saved) {
    try {
      state = { ...state, ...JSON.parse(saved) };
      // Migrate existing subjects without youtube, completedModules, or semester
      let migrated = false;
      if (state.subjects) {
        state.subjects.forEach((s) => {
          if (!s.youtube) {
            s.youtube = getYoutubeUrlForSubject(s.name);
            migrated = true;
          }
          if (!s.completedModules) {
            if (s.status === 'Completed') {
              s.completedModules = Array.from({ length: s.modules }, (_, i) => i + 1);
            } else if (s.status === 'In Progress') {
              s.completedModules = Array.from({ length: Math.ceil(s.modules / 2) }, (_, i) => i + 1);
            } else {
              s.completedModules = [];
            }
            migrated = true;
          }
          if (!s.semester) {
            s.semester = detectSemesterFromCode(s.name);
            migrated = true;
          }
        });
        if (migrated) {
          saveState();
        }
      }

      if (!state.examDate || state.examDate < '2026-11-23') {
        state.examDate = '2026-11-23';
        saveState();
      }

      state.plannerCompletedSlots = state.plannerCompletedSlots || {};

      if (!state.hasImportedBacklogs || !state.subjects || state.subjects.length < 30) {
        initFreshState();
      }
    } catch (e) {
      initFreshState();
    }
  } else {
    initFreshState();
  }
}

/** Initialize with sample EEE subjects */
function initFreshState() {
  state.subjects = SAMPLE_SUBJECTS.map((s) => ({
    id: generateId(),
    name: s.name,
    difficulty: s.difficulty,
    modules: s.modules,
    internal: s.internal,
    pyq: s.pyq,
    numericals: s.numericals,
    theory: s.theory,
    status: s.status,
    category: s.category,
    semester: s.semester || detectSemesterFromCode(s.name),
    youtube: s.youtube || getYoutubeUrlForSubject(s.name),
    completedModules: s.status === 'Completed' 
      ? Array.from({ length: s.modules }, (_, i) => i + 1)
      : (s.status === 'In Progress' ? Array.from({ length: Math.ceil(s.modules / 2) }, (_, i) => i + 1) : []),
  }));
  state.hasImportedBacklogs = true;
  saveState();
}

/** Persist state to localStorage */
function saveState() {
  if (!activeUser) return;
  const userStorageKey = `backlogRecoveryData_${activeUser}`;
  localStorage.setItem(userStorageKey, JSON.stringify(state));
}

/** Generate unique ID */
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

// ========== UI Helpers ==========

/** Show toast notification */
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast show ${type}`;
  setTimeout(() => toast.classList.remove('show'), 2800);
}

/** Get random motivation quote */
function getRandomQuote() {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

/** Update quote displays */
function updateQuotes() {
  const quote = getRandomQuote();
  document.getElementById('sidebarQuote').textContent = quote;
  document.getElementById('mainQuote').textContent = quote;
}

/** Populate subject dropdowns */
function populateSubjectSelects() {
  const selects = [
    'revisionSubject',
    'pyqSubject',
    'noteSubject',
    'pomodoroSubjectSelect',
  ];

  const semesters = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'];
  const semNames = {
    S1: 'Semester 1',
    S2: 'Semester 2',
    S3: 'Semester 3',
    S4: 'Semester 4',
    S5: 'Semester 5',
    S6: 'Semester 6',
    S7: 'Semester 7',
    S8: 'Semester 8',
  };

  const buildGroupedOptions = (generalText) => {
    let html = `<option value="">${generalText}</option>`;
    semesters.forEach((sem) => {
      const semSubs = state.subjects.filter((s) => (s.semester || 'S1') === sem);
      if (semSubs.length > 0) {
        html += `<optgroup label="${semNames[sem]}">`;
        html += semSubs
          .map((s) => `<option value="${s.id}">${escapeHtml(s.name)}</option>`)
          .join('');
        html += `</optgroup>`;
      }
    });
    return html;
  };

  const standardOptions = buildGroupedOptions('— Select subject —');
  const pomodoroOptions = buildGroupedOptions('General Study');

  selects.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      if (id === 'pomodoroSubjectSelect') {
        el.innerHTML = pomodoroOptions;
      } else {
        el.innerHTML = standardOptions;
      }
    }
  });
}

/** Escape HTML to prevent XSS */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/** Get difficulty badge class */
function difficultyClass(d) {
  const map = { Easy: 'easy', Medium: 'medium', Dangerous: 'dangerous' };
  return map[d] || 'medium';
}



/** Status to progress percent */
function statusProgress(status) {
  if (status === 'Completed') return 100;
  if (status === 'In Progress') return 50;
  return 0;
}

/** Get subject progress percent based on completedModules */
function getSubjectProgress(s) {
  if (!s) return 0;
  if (!s.completedModules || !Array.isArray(s.completedModules)) {
    return statusProgress(s.status);
  }
  if (s.modules <= 0) return 0;
  return Math.round((s.completedModules.length / s.modules) * 100);
}

/** Toggle module completion status for a subject */
function toggleModuleCompletion(subjectId, moduleNum) {
  const s = state.subjects.find(x => x.id === subjectId);
  if (!s) return;

  if (!s.completedModules) {
    s.completedModules = [];
  }

  const idx = s.completedModules.indexOf(moduleNum);
  if (idx >= 0) {
    s.completedModules.splice(idx, 1);
  } else {
    s.completedModules.push(moduleNum);
  }

  // Update status based on completed modules count
  if (s.completedModules.length === s.modules) {
    s.status = 'Completed';
  } else if (s.completedModules.length > 0) {
    s.status = 'In Progress';
  } else {
    s.status = 'Not Started';
  }

  saveState();
  renderDashboard();
  
  // Re-render subjects and categories list to keep everything synced
  renderSubjects(document.getElementById('subjectSearch')?.value || '');
  renderCategories();
}

// ========== Navigation ==========

/** Switch active section */
function navigateTo(sectionId) {
  document.querySelectorAll('.section').forEach((s) => s.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach((l) => l.classList.remove('active'));

  document.getElementById(sectionId)?.classList.add('active');
  document.querySelector(`[data-section="${sectionId}"]`)?.classList.add('active');

  const [title, subtitle] = PAGE_TITLES[sectionId] || ['Backlog Recovery', ''];
  document.getElementById('pageTitle').textContent = title;
  document.getElementById('pageSubtitle').textContent = subtitle;

  // Close mobile sidebar
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('visible');
}

/** Setup navigation listeners */
function initNavigation() {
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigateTo(link.dataset.section);
    });
  });

  document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebarOverlay').classList.toggle('visible');
  });

  document.getElementById('sidebarOverlay').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('visible');
  });
}

// ========== Dashboard ==========

/** Update dashboard stats and charts */
// Audio state
let bioAudio = {
  ctx: null,
  enabled: false,
};

let nextBeatTimeoutId = null;
let lastConsoleUpdate = 0;

// EKG drawing state
let ekgHistory = Array(240).fill(25); // baseline at y=25
let ekgProgress = -1; // -1 means inactive
let ekgCanvas = null;
let ekgCtx = null;

const ANXIOUS_LOGS_CALM = [
  "Neural core at nominal state. Keep studying to maintain safety margin.",
  "System integrity checks: 100%. No immediate threat detected.",
  "Bio-energy flowing stably. Academic deficit within normal bounds.",
  "Warning: exams are coming. Do not rest too long."
];

const ANXIOUS_LOGS_WARNING = [
  "WARNING: Academic deficit detected. Accelerated study required.",
  "Palpitations in cognitive core. Stress levels rising.",
  "Syllabus coverage index is lagging. Please increase module input.",
  "Time margin decaying. Focus coefficient must be optimized."
];

const ANXIOUS_LOGS_CRITICAL = [
  "CRITICAL ALERT: Imminent academic collapse threat!",
  "COGNITIVE ARREST: Pulse rate exceeding safety boundaries.",
  "RECOVERY RATE INSUFFICIENT. ACCELERATE IMMEDIATELY.",
  "DOOMSDAY PROTOCOL ENGAGED. RUN COGNITIVE SCRIPTS NOW."
];

function calculateAnxietyAndBPM() {
  const total = state.subjects.length;
  const completed = state.subjects.filter((s) => getSubjectProgress(s) === 100).length;
  const progress = total ? state.subjects.reduce((sum, s) => sum + getSubjectProgress(s), 0) / total : 0;

  
  // Calculate days left
  const exam = new Date(state.examDate + 'T09:00:00');
  const now = new Date();
  const diff = exam - now;
  const daysLeft = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  
  // Progress factor (1 = 0% progress, 0 = 100% progress)
  const progressFactor = Math.max(0, 1 - progress / 100);
  
  // Days factor: stress increases as exam gets closer. 
  // Let's assume a 90-day warning window. If daysLeft >= 90, daysFactor is 0. If daysLeft == 0, daysFactor is 1.
  const daysFactor = Math.max(0, 1 - daysLeft / 90);
  
  // Stress coefficient formula: progressFactor scale of urgency
  // If progress is 100%, stress is 0%.
  // Otherwise, baseline stress is 30% plus up to 70% based on countdown.
  let anxietyScore = progressFactor * (30 + 70 * daysFactor);
  
  // Round to 1 decimal place
  anxietyScore = Math.min(100, Math.max(0, Math.round(anxietyScore * 10) / 10));
  
  // BPM formula (60 to 180 BPM)
  let bpm = Math.round(60 + (anxietyScore / 100) * 120);
  
  // If user is hovering the bio-core, let's inject a "Panic Spike" (+35 BPM, capped at 200)
  const isHovered = document.getElementById('bioHeartOrb')?.matches(':hover');
  if (isHovered) {
    bpm = Math.min(200, bpm + 35);
    anxietyScore = Math.min(100, anxietyScore + 15);
  }
  
  return { progress, daysLeft, anxietyScore, bpm, completed, total };
}

/** Update dashboard stats and charts */
function renderDashboard() {
  const stats = calculateAnxietyAndBPM();
  const total = stats.total;
  const completed = stats.completed;
  const pending = total - completed;
  const progress = stats.progress;

  // Update general stat counts in dashboard stats grid
  const statTotalEl = document.getElementById('statTotal');
  if (statTotalEl) statTotalEl.textContent = total;
  const statCompletedEl = document.getElementById('statCompleted');
  if (statCompletedEl) statCompletedEl.textContent = completed;
  const statPendingEl = document.getElementById('statPending');
  if (statPendingEl) statPendingEl.textContent = pending;
  const statProgressEl = document.getElementById('statProgress');
  if (statProgressEl) statProgressEl.textContent = `${progress}%`;

  // Update new Bio Core values
  const bioProgressPercentEl = document.getElementById('bioProgressPercent');
  if (bioProgressPercentEl) bioProgressPercentEl.textContent = `${progress}%`;
  
  const bioHeartRateEl = document.getElementById('bioHeartRate');
  if (bioHeartRateEl) bioHeartRateEl.textContent = `${stats.bpm} BPM`;
  
  const bioAnxietyCoefEl = document.getElementById('bioAnxietyCoef');
  if (bioAnxietyCoefEl) bioAnxietyCoefEl.textContent = `${stats.anxietyScore.toFixed(1)}%`;
  
  const bioPendingModulesEl = document.getElementById('bioPendingModules');
  if (bioPendingModulesEl) {
    // Total pending modules = sum of modules for subjects not completed
    const pendingSubjects = state.subjects.filter(s => s.status !== 'Completed');
    const totalPendingModules = pendingSubjects.reduce((sum, s) => sum + s.modules, 0);
    bioPendingModulesEl.textContent = `${totalPendingModules} Mod`;
  }

  const bioTimeMarginEl = document.getElementById('bioTimeMargin');
  if (bioTimeMarginEl) {
    if (stats.daysLeft > 60) {
      bioTimeMarginEl.textContent = "SAFE";
      bioTimeMarginEl.style.color = "#22c55e";
    } else if (stats.daysLeft > 30) {
      bioTimeMarginEl.textContent = "STABLE";
      bioTimeMarginEl.style.color = "#eab308";
    } else if (stats.daysLeft > 14) {
      bioTimeMarginEl.textContent = "URGENT";
      bioTimeMarginEl.style.color = "#f57c00";
    } else {
      bioTimeMarginEl.textContent = "CRITICAL";
      bioTimeMarginEl.style.color = "#ef4444";
    }
  }

  // Update threat level elements
  const bioThreatLevelEl = document.getElementById('bioThreatLevel');
  const bioThreatBarEl = document.getElementById('bioThreatBar');
  if (bioThreatLevelEl) {
    let levelText = "STABLE";
    let color = "#22c55e";
    if (stats.anxietyScore >= 70) {
      levelText = "CRITICAL / PANIC";
      color = "#ef4444";
    } else if (stats.anxietyScore >= 50) {
      levelText = "ELEVATED THREAT";
      color = "#f59e0b";
    } else if (stats.anxietyScore >= 30) {
      levelText = "LOW RISK";
      color = "#fbbf24";
    }
    bioThreatLevelEl.textContent = levelText;
    bioThreatLevelEl.style.color = color;
  }
  if (bioThreatBarEl) {
    bioThreatBarEl.style.width = `${stats.anxietyScore}%`;
  }

  // Update dynamic CSS heartbeat speed
  const root = document.documentElement;
  root.style.setProperty('--heartbeat-duration', `${60 / stats.bpm}s`);
  
  // Set threat glow colors in CSS variable based on anxiety score
  if (stats.anxietyScore >= 70) {
    root.style.setProperty('--bio-glow-color', 'rgba(239, 68, 68, 0.45)');
    root.style.setProperty('--bio-glow-solid', '#ef4444');
  } else if (stats.anxietyScore >= 30) {
    root.style.setProperty('--bio-glow-color', 'rgba(245, 158, 11, 0.35)');
    root.style.setProperty('--bio-glow-solid', '#f59e0b');
  } else {
    root.style.setProperty('--bio-glow-color', 'rgba(34, 197, 94, 0.3)');
    root.style.setProperty('--bio-glow-solid', '#22c55e');
  }

  // Update inner SVG progress ring (circumference = 439.82)
  const ringInner = document.getElementById('bioRingProgress');
  if (ringInner) {
    const offset = 439.82 - (439.82 * progress) / 100;
    ringInner.style.strokeDashoffset = offset;
  }

  // Update outer SVG countdown ring (circumference = 534)
  const ringOuter = document.getElementById('bioRingCountdown');
  if (ringOuter) {
    const timePercentage = Math.max(0, Math.min(100, (stats.daysLeft / 120) * 100));
    const offset = 534 - (534 * timePercentage) / 100;
    ringOuter.style.strokeDashoffset = offset;
  }

  // Update HUD elements
  const hudProgressPercentEl = document.getElementById('hudProgressPercent');
  if (hudProgressPercentEl) hudProgressPercentEl.textContent = `${progress}%`;

  const hudAnxietyValEl = document.getElementById('hudAnxietyVal');
  if (hudAnxietyValEl) hudAnxietyValEl.textContent = `${stats.anxietyScore.toFixed(1)}%`;

  const hudBpmValEl = document.getElementById('hudBpmVal');
  if (hudBpmValEl) hudBpmValEl.textContent = `${stats.bpm} BPM`;

  const hudMarginValEl = document.getElementById('hudMarginVal');
  if (hudMarginValEl) {
    const timeMarginEl = document.getElementById('bioTimeMargin');
    if (timeMarginEl) {
      hudMarginValEl.textContent = timeMarginEl.textContent;
      hudMarginValEl.style.color = timeMarginEl.style.color;
    }
  }

  const hudRingInner = document.getElementById('hudRingProgress');
  if (hudRingInner) {
    const offset = 439.82 - (439.82 * progress) / 100;
    hudRingInner.style.strokeDashoffset = offset;
  }

  const hudRingOuter = document.getElementById('hudRingCountdown');
  if (hudRingOuter) {
    const timePercentage = Math.max(0, Math.min(100, (stats.daysLeft / 120) * 100));
    const offset = 534 - (534 * timePercentage) / 100;
    hudRingOuter.style.strokeDashoffset = offset;
  }

  // Update console diagnostic logs
  updateConsoleLog(stats.anxietyScore, completed, total);

  // Render secondary dashboard items
  renderSecondaryDashboardItems(completed);
}

/** Render secondary dashboard widgets (active study target, module progress tracker) */
function renderSecondaryDashboardItems(completed) {
  // 1. Render Active Study Target
  const targetContainer = document.getElementById('activeTargetContainer');
  if (targetContainer) {
    const targetSub = state.subjects.find((s) => getSubjectProgress(s) < 100);
    if (!targetSub) {
      targetContainer.innerHTML = `
        <div class="active-target-content" style="text-align: center; padding: 1rem 0;">
          <p style="font-size: 2rem; margin-bottom: 0.5rem;">🎉</p>
          <div class="active-target-title" style="color: #22c55e; margin-bottom: 0.5rem;">SYSTEM STABILIZED</div>
          <p style="color: var(--text-muted); font-size: 0.8rem; margin: 0;">All backlogs successfully cleared.</p>
        </div>`;
    } else {
      let nextMod = 1;
      for (let i = 1; i <= targetSub.modules; i++) {
        if (!targetSub.completedModules || !targetSub.completedModules.includes(i)) {
          nextMod = i;
          break;
        }
      }
      const ytUrl = targetSub.youtube || getYoutubeUrlForSubject(targetSub.name);
      
      targetContainer.innerHTML = `
        <div class="active-target-content">
          <div class="active-target-title">${escapeHtml(targetSub.name)}</div>
          <div>
            <span class="active-target-module">Next Up: Module ${nextMod}</span>
          </div>
          <a href="${ytUrl}" target="_blank" class="launch-class-btn">
            🎬 Launch Video Class ↗
          </a>
          <button class="mark-complete-btn" onclick="toggleModuleCompletion('${targetSub.id}', ${nextMod})">
            ✓ Mark Module ${nextMod} Completed
          </button>
        </div>`;
    }
  }

  // 2. Render Real-time Module Tracker snapshot
  const snapshotEl = document.getElementById('subjectSnapshot');
  if (snapshotEl) {
    if (state.subjects.length === 0) {
      snapshotEl.innerHTML = '<p class="empty-state">No subjects yet. Add some in the Subjects section.</p>';
    } else {
      const searchInput = document.getElementById('dashboardSubjectSearch');
      const filterVal = searchInput ? searchInput.value.toLowerCase() : '';
      const filtered = state.subjects.filter((s) => s.name.toLowerCase().includes(filterVal));
      
      if (filtered.length === 0) {
        snapshotEl.innerHTML = '<p class="empty-state">No matching subjects found.</p>';
      } else {
        snapshotEl.innerHTML = filtered
          .map((s) => {
            const prog = getSubjectProgress(s);
            
            // Build module buttons
            let moduleButtons = '';
            for (let m = 1; m <= s.modules; m++) {
              const isDone = s.completedModules && s.completedModules.includes(m);
              moduleButtons += `
                <button class="tracker-module-btn ${isDone ? 'done' : ''}" 
                  onclick="toggleModuleCompletion('${s.id}', ${m})" 
                  title="Toggle Module ${m} Completion (Subject: ${escapeHtml(s.name)})">
                  M${m}
                </button>`;
            }
            
            const ytUrl = s.youtube || getYoutubeUrlForSubject(s.name);
            return `
              <div class="tracker-subject-item">
                <div class="tracker-subject-info">
                  <div class="tracker-subject-name">${escapeHtml(s.name)}</div>
                  <div class="tracker-subject-meta">
                    <span class="badge badge-${difficultyClass(s.difficulty)}">${s.difficulty}</span>
                    <span class="badge badge-status ${s.status === 'Completed' ? 'badge-completed' : ''}">${s.status} (${prog}%)</span>
                  </div>
                </div>
                <div class="tracker-module-container">
                  ${moduleButtons}
                </div>
                <div class="tracker-action-buttons" style="display: flex; gap: 0.25rem; align-items: center;">
                  <a href="${ytUrl}" target="_blank" class="tracker-class-btn" title="Open YouTube Classes for ${escapeHtml(s.name)}">
                    ▶
                  </a>
                  <button class="tracker-class-btn tracker-notes-btn" onclick="toggleSubjectShortcuts(event, '${escapeHtml(s.name).replace(/'/g, "\\'")}', 'notes')" title="Open Study Notes for ${escapeHtml(s.name)}">
                    📒
                  </button>
                  <button class="tracker-class-btn tracker-qp-btn" onclick="toggleSubjectShortcuts(event, '${escapeHtml(s.name).replace(/'/g, "\\'")}', 'qp')" title="Open Question Papers for ${escapeHtml(s.name)}">
                    📄
                  </button>
                </div>
              </div>`;
          })
          .join('');
      }
    }
  }
}

/** Update exam countdown timers */
function updateExamCountdown() {
  const exam = new Date(state.examDate + 'T09:00:00');
  const now = new Date();
  const diff = exam - now;

  const daysLeft = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  const daysLeftMiniEl = document.getElementById('daysLeftMini');
  if (daysLeftMiniEl) daysLeftMiniEl.textContent = daysLeft;

  const displayDate = exam.toLocaleDateString('en-IN', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  
  const bioTargetDateEl = document.getElementById('bioTargetDate');
  if (bioTargetDateEl) bioTargetDateEl.textContent = displayDate;
  
  const hudTargetDateEl = document.getElementById('hudTargetDate');
  if (hudTargetDateEl) hudTargetDateEl.textContent = displayDate;

  if (diff <= 0) {
    ['bioCdDays', 'bioCdHours', 'bioCdMins', 'bioCdSecs', 'hudCdDays', 'hudCdHours', 'hudCdMins', 'hudCdSecs'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = '00';
    });
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(val).padStart(2, '0');
  };

  setVal('bioCdDays', days);
  setVal('bioCdHours', hours);
  setVal('bioCdMins', mins);
  setVal('bioCdSecs', secs);

  setVal('hudCdDays', days);
  setVal('hudCdHours', hours);
  setVal('hudCdMins', mins);
  setVal('hudCdSecs', secs);
}

/** Play Synthesized Audio Heartbeat via Web Audio API */
function playHeartbeatSound(bpm) {
  if (!bioAudio.enabled) return;
  
  try {
    if (!bioAudio.ctx) {
      bioAudio.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    if (bioAudio.ctx.state === 'suspended') {
      bioAudio.ctx.resume();
    }
    
    const ctx = bioAudio.ctx;
    const now = ctx.currentTime;
    
    // First beat: "Lub" (Low pitch, quick decay)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(60, now);
    osc1.frequency.exponentialRampToValueAtTime(10, now + 0.12);
    
    gain1.gain.setValueAtTime(0.5, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
    
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.15);
    
    // Second beat: "Dub" (Higher pitch, slight delay)
    const lubDubDelay = 0.15;
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(80, now + lubDubDelay);
    osc2.frequency.exponentialRampToValueAtTime(15, now + lubDubDelay + 0.12);
    
    gain2.gain.setValueAtTime(0.4, now + lubDubDelay);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + lubDubDelay + 0.12);
    
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + lubDubDelay);
    osc2.stop(now + lubDubDelay + 0.15);
  } catch (e) {
    console.error("Audio Synthesis error: ", e);
  }
}

/** Sync heartbeat, audio play, and visual triggers */
function scheduleVisualAndAudioBeat() {
  if (nextBeatTimeoutId) {
    clearTimeout(nextBeatTimeoutId);
  }
  
  const stats = calculateAnxietyAndBPM();
  
  // Play sound if audio context is enabled
  if (bioAudio.enabled) {
    playHeartbeatSound(stats.bpm);
  }
  
  // Schedule next pulse
  const intervalMs = (60 / stats.bpm) * 1000;
  nextBeatTimeoutId = setTimeout(scheduleVisualAndAudioBeat, intervalMs);
}

/** Update the anxious diagnostics terminal box */
function updateConsoleLog(anxietyScore, completed, total) {
  const now = Date.now();
  if (now - lastConsoleUpdate < 4000) return; // rate limit updates
  lastConsoleUpdate = now;

  const consoleContent = document.getElementById('bioConsoleContent');
  const hudConsoleContent = document.getElementById('hudConsoleContent');
  if (!consoleContent && !hudConsoleContent) return;

  let pool = ANXIOUS_LOGS_CALM;
  if (anxietyScore >= 70) {
    pool = ANXIOUS_LOGS_CRITICAL;
  } else if (anxietyScore >= 30) {
    pool = ANXIOUS_LOGS_WARNING;
  }

  const message = pool[Math.floor(Math.random() * pool.length)];
  
  let lineText = `> [${new Date().toLocaleTimeString()}] ${message}`;
  if (anxietyScore >= 30 && Math.random() > 0.4) {
    lineText += ` (Stress index: ${anxietyScore}%)`;
  }

  const addLine = (el) => {
    if (!el) return;
    const lineDiv = document.createElement('div');
    lineDiv.className = 'console-line';
    lineDiv.textContent = lineText;
    el.appendChild(lineDiv);
    while (el.children.length > 4) {
      el.removeChild(el.firstChild);
    }
    el.scrollTop = el.scrollHeight;
  };

  addLine(consoleContent);
  addLine(hudConsoleContent);
}

/** Set up listeners and systems for Bio Core Chamber */
function initBioChamber() {
  const audioToggleBtn = document.getElementById('toggleAudioHeartbeat');
  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', () => {
      bioAudio.enabled = !bioAudio.enabled;
      if (bioAudio.enabled) {
        audioToggleBtn.textContent = "🔊 Synth Heartbeat: ON";
        audioToggleBtn.classList.add('audio-on');
        
        if (!bioAudio.ctx) {
          bioAudio.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        scheduleVisualAndAudioBeat();
        showToast("Heartbeat audio synthesizer activated.", "info");
      } else {
        audioToggleBtn.textContent = "🔊 Synth Heartbeat: OFF";
        audioToggleBtn.classList.remove('audio-on');
        
        if (nextBeatTimeoutId) {
          clearTimeout(nextBeatTimeoutId);
          nextBeatTimeoutId = null;
        }
        showToast("Heartbeat audio synthesizer muted.", "info");
        
        // Restart silent visual loop
        scheduleVisualAndAudioBeat();
      }
    });
  }

  const heartOrb = document.getElementById('bioHeartOrb');
  if (heartOrb) {
    heartOrb.addEventListener('mouseenter', () => {
      scheduleVisualAndAudioBeat();
      renderDashboard();
    });
    heartOrb.addEventListener('mouseleave', () => {
      scheduleVisualAndAudioBeat();
      renderDashboard();
    });
  }
  // Start Dashboard Analog Clock Tick Engine (every second)
  setInterval(updateDashboardAnalogClock, 1000);
  updateDashboardAnalogClock();

  // Start the heartbeat synchronization cycle (will run silently if audio is muted)
  scheduleVisualAndAudioBeat();
}

/** Update local system time in the Dashboard Analog Clock */
function updateDashboardAnalogClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Compute rotation degrees
  const secDeg = seconds * 6;
  const minDeg = minutes * 6 + seconds * 0.1;
  const hrDeg = (hours % 12) * 30 + minutes * 0.5;

  const hrEl = document.getElementById('dashboardClockHour');
  const minEl = document.getElementById('dashboardClockMin');
  const secEl = document.getElementById('dashboardClockSec');

  if (hrEl) hrEl.style.transform = `translateX(-50%) rotate(${hrDeg}deg)`;
  if (minEl) minEl.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
  if (secEl) secEl.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;

  // Digital readout sync
  const digitalTimeEl = document.getElementById('dashboardDigitalTime');
  if (digitalTimeEl) {
    digitalTimeEl.textContent = now.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  }
}

// ========== Subjects CRUD ==========

/** Render subject list */
function renderSubjects(filter = '') {
  const list = document.getElementById('subjectsList');
  const q = filter.toLowerCase();
  const filtered = state.subjects.filter((s) => s.name.toLowerCase().includes(q));

  if (filtered.length === 0) {
    list.innerHTML = '<p class="empty-state">No subjects found.</p>';
    return;
  }

  const semesters = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'];
  const semNames = {
    S1: 'Semester 1',
    S2: 'Semester 2',
    S3: 'Semester 3',
    S4: 'Semester 4',
    S5: 'Semester 5',
    S6: 'Semester 6',
    S7: 'Semester 7',
    S8: 'Semester 8',
  };

  let html = '';
  semesters.forEach((sem) => {
    const semSubs = filtered.filter((s) => (s.semester || 'S1') === sem);
    if (semSubs.length > 0) {
      html += `
        <div class="semester-group">
          <h4 class="semester-title">${semNames[sem]}</h4>
          <div class="semester-subjects-list">
            ${semSubs.map((s) => {
              const prog = getSubjectProgress(s);
              const tags = [
                s.pyq ? 'PYQ ✓' : null,
                s.numericals ? 'Numericals' : null,
                s.theory ? 'Theory' : null,
              ]
                .filter(Boolean)
                .join(' · ');
              const ytUrl = s.youtube || getYoutubeUrlForSubject(s.name);

              return `
              <div class="subject-item" data-id="${s.id}">
                <div>
                  <div class="subject-item-header">
                    <h4>${escapeHtml(s.name)}</h4>
                    <span class="badge badge-${difficultyClass(s.difficulty)}">${s.difficulty}</span>
                    <span class="badge badge-status ${s.status === 'Completed' ? 'badge-completed' : ''}">${s.status}</span>
                    <span class="badge badge-category">${s.category}</span>
                  </div>
                  <div class="subject-meta">
                    <span>${s.modules} modules</span>
                    <span>Internal: ${s.internal}</span>
                    ${tags ? `<span>${tags}</span>` : ''}
                  </div>
                  <div class="subject-progress-mini">
                    <div class="progress-bar">
                      <div class="progress-fill" style="width: ${prog}%"></div>
                    </div>
                  </div>
                </div>
                <div class="subject-actions">
                  <a href="${ytUrl}" target="_blank" class="youtube-class-btn" title="Watch YouTube Classes" style="margin-bottom: 0.2rem;">
                    <span class="youtube-icon">▶</span> Class
                  </a>
                  <button class="notes-shortcut-btn" onclick="toggleSubjectShortcuts(event, '${escapeHtml(s.name).replace(/'/g, "\\'")}', 'notes')" title="View Study Notes for ${escapeHtml(s.name)}" style="margin-bottom: 0.2rem;">
                    📒 Notes
                  </button>
                  <button class="qp-shortcut-btn" onclick="toggleSubjectShortcuts(event, '${escapeHtml(s.name).replace(/'/g, "\\'")}', 'qp')" title="View Question Papers for ${escapeHtml(s.name)}" style="margin-bottom: 0.2rem;">
                    📄 QP
                  </button>
                  <button class="icon-btn edit-btn" data-id="${s.id}">Edit</button>
                  <button class="icon-btn delete delete-btn" data-id="${s.id}">Delete</button>
                </div>
              </div>`;
            }).join('')}
          </div>
        </div>`;
    }
  });

  list.innerHTML = html;

  // Attach event listeners
  list.querySelectorAll('.edit-btn').forEach((btn) => {
    btn.addEventListener('click', () => editSubject(btn.dataset.id));
  });
  list.querySelectorAll('.delete-btn').forEach((btn) => {
    btn.addEventListener('click', () => deleteSubject(btn.dataset.id));
  });
}

/** Reset subject form */
function resetSubjectForm() {
  document.getElementById('subjectForm').reset();
  document.getElementById('subjectId').value = '';
  document.getElementById('subjectYoutube').value = '';
  document.getElementById('subjectModules').value = 5;
  document.getElementById('subjectDifficulty').value = 'Medium';
  document.getElementById('subjectSemester').value = 'S1';
  document.getElementById('subjectSubmitBtn').textContent = 'Add Subject';
  document.getElementById('subjectCancelBtn').hidden = true;
}

/** Fill form for editing */
function editSubject(id) {
  const s = state.subjects.find((x) => x.id === id);
  if (!s) return;

  document.getElementById('subjectId').value = s.id;
  document.getElementById('subjectName').value = s.name;
  document.getElementById('subjectDifficulty').value = s.difficulty;
  document.getElementById('subjectModules').value = s.modules;
  document.getElementById('subjectInternal').value = s.internal;
  document.getElementById('subjectCategory').value = s.category;
  document.getElementById('subjectSemester').value = s.semester || 'S1';
  document.getElementById('subjectStatus').value = s.status;
  document.getElementById('subjectPyq').checked = s.pyq;
  document.getElementById('subjectNumericals').checked = s.numericals;
  document.getElementById('subjectTheory').checked = s.theory;
  document.getElementById('subjectYoutube').value = s.youtube || '';
  document.getElementById('subjectSubmitBtn').textContent = 'Update Subject';
  document.getElementById('subjectCancelBtn').hidden = false;

  navigateTo('subjects');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/** Delete subject */
function deleteSubject(id) {
  if (!confirm('Delete this subject?')) return;
  state.subjects = state.subjects.filter((s) => s.id !== id);
  saveState();
  renderAll();
  showToast('Subject deleted');
}

/** Handle subject form submit */
function handleSubjectSubmit(e) {
  e.preventDefault();
  const nameValue = document.getElementById('subjectName').value.trim();
  const youtubeValue = document.getElementById('subjectYoutube').value.trim();

  const existingId = document.getElementById('subjectId').value;
  const existingSub = existingId ? state.subjects.find((s) => s.id === existingId) : null;
  
  const modulesCount = parseInt(document.getElementById('subjectModules').value, 10);
  const newStatus = document.getElementById('subjectStatus').value;

  let completedModules = [];
  if (existingSub) {
    completedModules = existingSub.completedModules || [];
    completedModules = completedModules.filter(m => m <= modulesCount);
  } else {
    if (newStatus === 'Completed') {
      completedModules = Array.from({ length: modulesCount }, (_, i) => i + 1);
    } else if (newStatus === 'In Progress') {
      completedModules = Array.from({ length: Math.ceil(modulesCount / 2) }, (_, i) => i + 1);
    } else {
      completedModules = [];
    }
  }

  const subject = {
    id: existingId || generateId(),
    name: nameValue,
    difficulty: document.getElementById('subjectDifficulty').value,
    modules: modulesCount,
    internal: document.getElementById('subjectInternal').value,
    category: document.getElementById('subjectCategory').value,
    semester: document.getElementById('subjectSemester').value,
    status: newStatus,
    pyq: document.getElementById('subjectPyq').checked,
    numericals: document.getElementById('subjectNumericals').checked,
    theory: document.getElementById('subjectTheory').checked,
    youtube: youtubeValue || getYoutubeUrlForSubject(nameValue),
    completedModules: completedModules,
  };

  const existingIdx = state.subjects.findIndex((s) => s.id === subject.id);
  if (existingIdx >= 0) {
    state.subjects[existingIdx] = subject;
    showToast('Subject updated');
  } else {
    state.subjects.push(subject);
    showToast('Subject added');
  }

  saveState();
  resetSubjectForm();
  renderAll();
}

// ========== Categories ==========

/** Render categorized subjects */
function renderCategories() {
  const groups = {
    Survival: document.getElementById('catSurvival'),
    Repeated: document.getElementById('catRepeated'),
    Killer: document.getElementById('catKiller'),
  };

  Object.entries(groups).forEach(([cat, el]) => {
    const items = state.subjects.filter((s) => s.category === cat);
    el.innerHTML =
      items.length === 0
        ? '<p class="empty-state">No subjects in this category.</p>'
        : items
            .map((s) => {
              const prog = getSubjectProgress(s);
              return `
          <div class="category-subject">
            <span>${escapeHtml(s.name)} <small>(${s.status})</small></span>
            <div class="progress-bar"><div class="progress-fill" style="width:${prog}%"></div></div>
          </div>`;
            })
            .join('');
  });
}

// ========== Master Weekly Study Plan (Automation-Aligned) ==========

const WEEKLY_STUDY_PLAN = {
  Monday: [
    {
      id: 'mon-1',
      day: 'Monday',
      startTime: '08:00',
      endTime: '11:30',
      timeFormatted: '08:00 AM – 11:30 AM',
      duration: '3.5 hrs',
      category: 'Morning Deep Work',
      badgeType: 'morning',
      subjectCode: 'EET401',
      subjectName: 'Advanced Control Systems (ACS)',
      sem: 'S7 Regular',
      module: 'Module 1: State Space Modeling & State Transition Matrix',
      topics: [
        'State space formulation of continuous-time electrical & electromechanical LTI systems',
        'State Transition Matrix Φ(t) = exp(At) properties and matrix exponential computation',
        'Resolvent matrix method (sI - A)⁻¹ and Cayley-Hamilton polynomial technique',
        'Complete solution of state equations: Zero-input and zero-state response derivations'
      ],
      tip: 'High mathematical load: solve step-by-step state equations for 2x2 and 3x3 matrices with complex eigenvalues.',
      isClass: false
    },
    {
      id: 'mon-2',
      day: 'Monday',
      startTime: '12:00',
      endTime: '17:00',
      timeFormatted: '12:00 PM – 05:00 PM',
      duration: '5.0 hrs',
      category: '⚡ Industrial Automation Class',
      badgeType: 'class',
      subjectCode: 'AUTO',
      subjectName: 'Industrial Automation & Control Lecture & Lab',
      sem: 'Mandatory Class',
      module: 'Industrial Automation Curriculum',
      topics: [
        'PLC Programming: Ladder logic, TON/TOF timers, up/down counters, latch/unlatch relays',
        'SCADA / HMI interface architecture & 4-20mA current loop industrial transmitter wiring',
        'Hands-on PLC hardware troubleshooting, safety interlocks & industrial process loop simulation'
      ],
      tip: 'Mandatory training block: stay 100% engaged in practicals. University study resumes at 6:00 PM after a 1-hour reset!',
      isClass: true
    },
    {
      id: 'mon-3',
      day: 'Monday',
      startTime: '18:00',
      endTime: '20:30',
      timeFormatted: '06:00 PM – 08:30 PM',
      duration: '2.5 hrs',
      category: 'Evening Core Session',
      badgeType: 'evening',
      subjectCode: 'EET413',
      subjectName: 'Electric Drives (Program Elective II)',
      sem: 'S7 Elective',
      module: 'Module 1: Dynamics of Electric Drives',
      topics: [
        'Fundamental torque equation: T - T_l = J(dω/dt) with rotational inertia and load components',
        'Multi-quadrant operation: Forward motoring, forward braking, reverse motoring & reverse braking',
        'Steady-state stability criteria for motor-load combinations: d(T_l)/dω - d(T)/dω > 0',
        'Drive motor rating selection for continuous, short-time, and periodic intermittent duty'
      ],
      tip: 'Draw the 4-quadrant speed-torque diagram with proper sign conventions for torque and speed.',
      isClass: false
    },
    {
      id: 'mon-4',
      day: 'Monday',
      startTime: '21:30',
      endTime: '23:00',
      timeFormatted: '09:30 PM – 11:00 PM',
      duration: '1.5 hrs',
      category: 'Night Active Recall & PYQ',
      badgeType: 'night',
      subjectCode: 'EET401',
      subjectName: 'Advanced Control Systems (ACS)',
      sem: 'S7 Regular',
      module: 'PYQ Drill & Formula Flashcards',
      topics: [
        'Solve 5 Part-A previous university questions from KTU 2022 & 2023 question papers',
        'Quick flashcard formula review: Eigenvalues, modal transformation matrix M, diagonal canonical form'
      ],
      tip: 'Solve on paper under a 20-minute countdown timer without looking at answer keys.',
      isClass: false
    }
  ],
  Tuesday: [
    {
      id: 'tue-1',
      day: 'Tuesday',
      startTime: '08:00',
      endTime: '11:30',
      timeFormatted: '08:00 AM – 11:30 AM',
      duration: '3.5 hrs',
      category: 'Morning Deep Work',
      badgeType: 'morning',
      subjectCode: 'EET401',
      subjectName: 'Advanced Control Systems (ACS)',
      sem: 'S7 Regular',
      module: 'Module 2: Controllability & Observability Design',
      topics: [
        'Kalman test for controllability Q_c = [B AB A²B ... A^(n-1)B] and rank condition',
        'Gilbert test for diagonalized and Jordan canonical form systems',
        'State feedback controller design using Pole Placement & Ackermann formula',
        'Full order state observer design concept and dual observer gain matrix L'
      ],
      tip: 'Ackermann formula: K = [0 0 ... 1] * inv(Q_c) * α_c(A). Always check det(Q_c) ≠ 0 first!',
      isClass: false
    },
    {
      id: 'tue-2',
      day: 'Tuesday',
      startTime: '12:00',
      endTime: '17:00',
      timeFormatted: '12:00 PM – 05:00 PM',
      duration: '5.0 hrs',
      category: '⚡ Industrial Automation Class',
      badgeType: 'class',
      subjectCode: 'AUTO',
      subjectName: 'Industrial Automation & Control Lecture & Lab',
      sem: 'Mandatory Class',
      module: 'Industrial Automation Curriculum',
      topics: [
        'Closed-loop PID controller tuning in automation PLCs (Ziegler-Nichols method)',
        'Industrial communication protocols: Modbus RTU/TCP, Ethernet/IP, Profibus DP',
        'Calibration of RTDs, thermocouples, pressure transmitters & analog scaling blocks'
      ],
      tip: 'Mandatory training block.',
      isClass: true
    },
    {
      id: 'tue-3',
      day: 'Tuesday',
      startTime: '18:00',
      endTime: '20:30',
      timeFormatted: '06:00 PM – 08:30 PM',
      duration: '2.5 hrs',
      category: 'Evening Core Session',
      badgeType: 'evening',
      subjectCode: 'CST415',
      subjectName: 'Mobile Computing (Open Elective)',
      sem: 'S7 Open Elec',
      module: 'Module 1: Cellular Network Architecture',
      topics: [
        'Cellular architecture, hexagonal geometry, frequency reuse factor N = i² + ij + j²',
        'Co-channel interference ratio (S/I) and cluster capacity calculations',
        'Channel assignment strategies: Fixed (FCA) vs Dynamic (DCA)',
        'Handoff mechanisms: Hard handoff vs Soft handoff vs Mobile-Assisted Handoff (MAHO)'
      ],
      tip: 'Draw neat cluster diagrams showing 7-cell reuse pattern and co-channel cells.',
      isClass: false
    },
    {
      id: 'tue-4',
      day: 'Tuesday',
      startTime: '21:30',
      endTime: '23:00',
      timeFormatted: '09:30 PM – 11:00 PM',
      duration: '1.5 hrs',
      category: 'Night Active Recall & PYQ',
      badgeType: 'night',
      subjectCode: 'CST415',
      subjectName: 'Mobile Computing',
      sem: 'S7 Open Elec',
      module: 'GSM Architecture & PYQ Drill',
      topics: [
        'Draw complete GSM architecture block diagram: MS, BSS (BTS, BSC), NSS (MSC, HLR, VLR, AuC, EIR)',
        'Memorize 3-mark definitions: Cell splitting, cell sectoring, microcell zones'
      ],
      tip: 'Labeled GSM architecture diagram is a guaranteed 10-mark question in KTU.',
      isClass: false
    }
  ],
  Wednesday: [
    {
      id: 'wed-1',
      day: 'Wednesday',
      startTime: '08:00',
      endTime: '11:30',
      timeFormatted: '08:00 AM – 11:30 AM',
      duration: '3.5 hrs',
      category: 'Morning Deep Work',
      badgeType: 'morning',
      subjectCode: 'EET413',
      subjectName: 'Electric Drives',
      sem: 'S7 Elective',
      module: 'Module 2: Chopper & Converter DC Motor Drives',
      topics: [
        'Chopper-fed DC separately excited motor drives (motoring and regenerative braking)',
        'Four-quadrant operation using Class E chopper circuit and duty ratio modulation',
        'Single-phase & 3-phase fully controlled converter-fed DC drives: firing angle α control',
        'Discontinuous conduction mode (DCM) characteristics & closed-loop current control'
      ],
      tip: 'Sketch voltage & armature current waveforms for continuous vs discontinuous mode.',
      isClass: false
    },
    {
      id: 'wed-2',
      day: 'Wednesday',
      startTime: '12:00',
      endTime: '17:00',
      timeFormatted: '12:00 PM – 05:00 PM',
      duration: '5.0 hrs',
      category: '⚡ Industrial Automation Class',
      badgeType: 'class',
      subjectCode: 'AUTO',
      subjectName: 'Industrial Automation & Control Lecture & Lab',
      sem: 'Mandatory Class',
      module: 'Industrial Automation Curriculum',
      topics: [
        'Variable Frequency Drive (VFD) industrial interfacing & parameter setup',
        'Pneumatic cylinder sequencing using 5/2-way solenoid valves and optical proximity switches'
      ],
      tip: 'Mandatory training block.',
      isClass: true
    },
    {
      id: 'wed-3',
      day: 'Wednesday',
      startTime: '18:00',
      endTime: '20:30',
      timeFormatted: '06:00 PM – 08:30 PM',
      duration: '2.5 hrs',
      category: 'Evening Backlog Session',
      badgeType: 'evening',
      subjectCode: 'EET302',
      subjectName: 'Linear Control Systems (S6 Backlog Focus)',
      sem: 'S6 Supple',
      module: 'Module 2 & 3: Stability & Root Locus',
      topics: [
        'Routh-Hurwitz stability criterion with special cases (row of zeros & auxiliary equation)',
        'Root Locus construction rules: Asymptotes, centroid, breakaway/break-in points',
        'Angle of departure & arrival for complex conjugate open-loop poles and zeros'
      ],
      tip: 'Root Locus is a guaranteed 14-mark question in KTU LCS papers. Draw carefully to scale with protractor.',
      isClass: false
    },
    {
      id: 'wed-4',
      day: 'Wednesday',
      startTime: '21:30',
      endTime: '23:00',
      timeFormatted: '09:30 PM – 11:00 PM',
      duration: '1.5 hrs',
      category: 'Night Active Recall & PYQ',
      badgeType: 'night',
      subjectCode: 'EET413',
      subjectName: 'Electric Drives',
      sem: 'S7 Elective',
      module: 'DC Drives Numerical Drill',
      topics: [
        'Solve 3 numerical problems on chopper duty ratio α, terminal voltage, and back-EMF',
        'Speed-torque curve calculations under varying armature resistance and field weakening'
      ],
      tip: 'Remember: Back EMF E_b = V_a - I_a*R_a = k_e * Φ * ω.',
      isClass: false
    }
  ],
  Thursday: [
    {
      id: 'thu-1',
      day: 'Thursday',
      startTime: '08:00',
      endTime: '11:30',
      timeFormatted: '08:00 AM – 11:30 AM',
      duration: '3.5 hrs',
      category: 'Morning Deep Work',
      badgeType: 'morning',
      subjectCode: 'EET401',
      subjectName: 'Advanced Control Systems (ACS)',
      sem: 'S7 Regular',
      module: 'Module 3: Non-Linear Systems & Phase Plane Analysis',
      topics: [
        'Common physical non-linearities: Saturation, dead-zone, backlash, relay with hysteresis',
        'Phase plane analysis: Phase portraits, singular points (stable/unstable nodes, saddles, focus, centers)',
        'Construction of phase trajectories using the Isocline method: dx₂/dx₁ = m',
        'Limit cycles and structural stability concepts in non-linear feedback loops'
      ],
      tip: 'Isocline slope equation: slope = f₂(x₁, x₂)/f₁(x₁, x₂). Plot 4 slope marks before drawing the curve.',
      isClass: false
    },
    {
      id: 'thu-2',
      day: 'Thursday',
      startTime: '12:00',
      endTime: '17:00',
      timeFormatted: '12:00 PM – 05:00 PM',
      duration: '5.0 hrs',
      category: '⚡ Industrial Automation Class',
      badgeType: 'class',
      subjectCode: 'AUTO',
      subjectName: 'Industrial Automation & Control Lecture & Lab',
      sem: 'Mandatory Class',
      module: 'Industrial Automation Curriculum',
      topics: [
        'Safety PLCs, emergency stop dual-channel circuits, safety relays & SIL ratings',
        'Process instrumentation Piping & Instrumentation Diagram (P&ID) standards and symbology'
      ],
      tip: 'Mandatory training block.',
      isClass: true
    },
    {
      id: 'thu-3',
      day: 'Thursday',
      startTime: '18:00',
      endTime: '20:30',
      timeFormatted: '06:00 PM – 08:30 PM',
      duration: '2.5 hrs',
      category: 'Evening Core Session',
      badgeType: 'evening',
      subjectCode: 'MCN401',
      subjectName: 'Industrial Safety Engineering (ISE)',
      sem: 'S7 Regular',
      module: 'Module 1 & 2: Accident Models & Hazard Identification',
      topics: [
        'Heinrich Domino Theory & Multiple Causation accident sequence models',
        'Hazard Identification techniques: Hazard and Operability Study (HAZOP), Job Safety Analysis (JSA)',
        'OSHA regulatory framework, factory safety acts & safety committee responsibilities'
      ],
      tip: 'Structure answers with headings: Objectives, Procedural Steps, Flowchart, Industrial Case Example.',
      isClass: false
    },
    {
      id: 'thu-4',
      day: 'Thursday',
      startTime: '21:30',
      endTime: '23:00',
      timeFormatted: '09:30 PM – 11:00 PM',
      duration: '1.5 hrs',
      category: 'Night Active Recall & PYQ',
      badgeType: 'night',
      subjectCode: 'EET401',
      subjectName: 'Advanced Control Systems',
      sem: 'S7 Regular',
      module: 'Describing Function Derivations',
      topics: [
        'Derivation of describing function for ideal relay: N(X) = 4M/(πX)',
        'Derivation for relay with dead-zone and saturation non-linearities',
        'Limit cycle evaluation using -1/N(X) intersection with Nyquist plot G(jω)'
      ],
      tip: 'Derivation is repeatedly asked in Part B Module 3.',
      isClass: false
    }
  ],
  Friday: [
    {
      id: 'fri-1',
      day: 'Friday',
      startTime: '08:00',
      endTime: '11:30',
      timeFormatted: '08:00 AM – 11:30 AM',
      duration: '3.5 hrs',
      category: 'Morning Deep Work',
      badgeType: 'morning',
      subjectCode: 'EET413',
      subjectName: 'Electric Drives',
      sem: 'S7 Elective',
      module: 'Module 3: Induction Motor Drives & V/f Control',
      topics: [
        'Scalar V/f speed control: Constant torque vs constant power operational regions',
        'Stator voltage control using AC voltage controllers and torque derating',
        'Static rotor resistance control using chopper and slip ring induction motor',
        'Slip Power Recovery schemes: Static Scherbius and Static Kramer drives'
      ],
      tip: 'Understand why V/f must remain constant below base speed to maintain flux without saturation.',
      isClass: false
    },
    {
      id: 'fri-2',
      day: 'Friday',
      startTime: '12:00',
      endTime: '17:00',
      timeFormatted: '12:00 PM – 05:00 PM',
      duration: '5.0 hrs',
      category: '⚡ Industrial Automation Class',
      badgeType: 'class',
      subjectCode: 'AUTO',
      subjectName: 'Industrial Automation & Control Lecture & Lab',
      sem: 'Mandatory Class',
      module: 'Industrial Automation Curriculum',
      topics: [
        'Weekly project practical evaluation & ladder logic verification on industrial test bench',
        'Industrial automation case studies, motion control & factory floor wrap-up'
      ],
      tip: 'Mandatory training block. Weekend starts at 5:00 PM!',
      isClass: true
    },
    {
      id: 'fri-3',
      day: 'Friday',
      startTime: '18:00',
      endTime: '20:30',
      timeFormatted: '06:00 PM – 08:30 PM',
      duration: '2.5 hrs',
      category: 'Evening Backlog Session',
      badgeType: 'evening',
      subjectCode: 'EET306',
      subjectName: 'Power Electronics (S6 Backlog Focus)',
      sem: 'S6 Supple',
      module: 'Module 1 & 2: Power Converters & Inverters',
      topics: [
        'Thyristor firing and natural/forced commutation methods (Class A to F)',
        'Buck, Boost, and Buck-Boost DC-DC converters: Operating modes, duty ratio D',
        'Continuous vs discontinuous conduction mode and output voltage ripple formulas'
      ],
      tip: 'Memorize: Boost converter V_o = V_in / (1 - D). Buck converter V_o = D * V_in.',
      isClass: false
    },
    {
      id: 'fri-4',
      day: 'Friday',
      startTime: '21:30',
      endTime: '23:00',
      timeFormatted: '09:30 PM – 11:00 PM',
      duration: '1.5 hrs',
      category: 'Night Active Recall & PYQ',
      badgeType: 'night',
      subjectCode: 'S7 Weekly Drill',
      subjectName: 'S7 Weekly PYQ Drill',
      sem: 'S7 Regular',
      module: 'KTU Exam Simulation',
      topics: [
        'Solve 2 complete Part B questions (14 marks each) from KTU 2023 question bank',
        'Self-evaluation against university scheme: Speed, handwriting legibility, neat diagrams'
      ],
      tip: 'Time each 14-mark question to exactly 25 minutes.',
      isClass: false
    }
  ],
  Saturday: [
    {
      id: 'sat-1',
      day: 'Saturday',
      startTime: '08:30',
      endTime: '12:00',
      timeFormatted: '08:30 AM – 12:00 PM',
      duration: '3.5 hrs',
      category: 'Morning Power Sprint',
      badgeType: 'morning',
      subjectCode: 'EET401',
      subjectName: 'Advanced Control Systems',
      sem: 'S7 Regular',
      module: 'Module 4 & 5: Lyapunov Stability Theory',
      topics: [
        'Stability definitions in sense of Lyapunov, asymptotic stability, global stability',
        'Lyapunov direct method for autonomous systems: V(x) positive definite, V_dot negative definite',
        'Solving linear continuous systems: A^T * P + P * A = -Q with positive definite Q',
        'Krasovskii method and Variable Gradient method for non-linear systems'
      ],
      tip: 'Set Q = I (Identity) when solving A^T*P + P*A = -Q to simplify equations.',
      isClass: false
    },
    {
      id: 'sat-2',
      day: 'Saturday',
      startTime: '13:30',
      endTime: '16:30',
      timeFormatted: '01:30 PM – 04:30 PM',
      duration: '3.0 hrs',
      category: 'Afternoon Deep Work',
      badgeType: 'weekend',
      subjectCode: 'EET413',
      subjectName: 'Electric Drives',
      sem: 'S7 Elective',
      module: 'Module 4 & 5: Synchronous & Special Drives',
      topics: [
        'Synchronous motor drives fed from VSI and CSI (Self-controlled vs separate control)',
        'Brushless DC (BLDC) motor drive principles, Hall effect sensor switching sequence',
        'Solar PV-powered water pumping drive configurations',
        'Electric Vehicle (EV) powertrain drive topologies and regenerative braking'
      ],
      tip: 'Draw 3-phase inverter bridge connected to BLDC with trapezoidal back-EMF waveforms.',
      isClass: false
    },
    {
      id: 'sat-3',
      day: 'Saturday',
      startTime: '17:30',
      endTime: '20:00',
      timeFormatted: '05:30 PM – 08:00 PM',
      duration: '2.5 hrs',
      category: 'Evening Focus Block',
      badgeType: 'evening',
      subjectCode: 'CST415',
      subjectName: 'Mobile Computing',
      sem: 'S7 Open Elec',
      module: 'Module 3 & 4: Wireless LAN & MANETs',
      topics: [
        'IEEE 802.11 architecture, BSS, ESS, CSMA/CA protocol, RTS/CTS handshaking',
        'Mobile IP: Agent discovery, registration, triangular routing, reverse tunneling',
        'Mobile Ad-hoc Networks (MANET): Table-driven (DSDV) vs on-demand (AODV) routing'
      ],
      tip: 'RTS/CTS solves the hidden and exposed terminal problem — diagram is mandatory.',
      isClass: false
    },
    {
      id: 'sat-4',
      day: 'Saturday',
      startTime: '21:30',
      endTime: '23:00',
      timeFormatted: '09:30 PM – 11:00 PM',
      duration: '1.5 hrs',
      category: 'Night Recall & PYQ',
      badgeType: 'night',
      subjectCode: 'Backlog Maintenance',
      subjectName: 'S1 MAT101 / S6 LCS',
      sem: 'S1/S6',
      module: 'Weekend Numerical Test',
      topics: [
        'Solve 4 university problems: Eigenvalues/Cayley-Hamilton and Bode plot gain margin',
        'Audit formulas and verify steps with calculator'
      ],
      tip: 'Consistent weekend backlog maintenance prevents the December cramming panic.',
      isClass: false
    }
  ],
  Sunday: [
    {
      id: 'sun-1',
      day: 'Sunday',
      startTime: '09:00',
      endTime: '12:30',
      timeFormatted: '09:00 AM – 12:30 PM',
      duration: '3.5 hrs',
      category: 'Simulated 3-Hr Exam',
      badgeType: 'morning',
      subjectCode: 'KTU MOCK',
      subjectName: 'Full Length Timed University Paper',
      sem: 'S7 Regular',
      module: 'Simulated Exam Hall',
      topics: [
        'Strict KTU conditions: 100 Marks (Part A 30 marks + Part B 70 marks)',
        'Alternate weekly between EET401 ACS and EET413 Electric Drives',
        'Calculator and pen only, zero interruptions, timed 9:30 AM to 12:30 PM'
      ],
      tip: 'Write fast, box numeric results with units, and leave 10 minutes to verify Part A.',
      isClass: false
    },
    {
      id: 'sun-2',
      day: 'Sunday',
      startTime: '14:00',
      endTime: '16:30',
      timeFormatted: '02:00 PM – 04:30 PM',
      duration: '2.5 hrs',
      category: 'Afternoon Audit',
      badgeType: 'weekend',
      subjectCode: 'ANALYSIS',
      subjectName: 'Mock Exam Error Correction & Mistake Log',
      sem: 'Review',
      module: 'Targeted Fixes',
      topics: [
        'Grade paper strictly against KTU valuation scheme',
        'Record every lost mark in Mistake Log: Conceptual error vs Calculation slip',
        'Re-derive all steps that lost points until completely mastered'
      ],
      tip: 'Analyzing mistakes produces 3x more learning than solving problems you already know.',
      isClass: false
    },
    {
      id: 'sun-3',
      day: 'Sunday',
      startTime: '17:30',
      endTime: '20:00',
      timeFormatted: '05:30 PM – 08:00 PM',
      duration: '2.5 hrs',
      category: 'Evening Theory Sprint',
      badgeType: 'evening',
      subjectCode: 'MCN401',
      subjectName: 'Industrial Safety Engineering',
      sem: 'S7 Regular',
      module: 'Module 3, 4 & 5: Fire & Chemical Safety',
      topics: [
        'Fire dynamics, classification of fires, fire extinguishing agents and sprinkler systems',
        'Chemical process safety, toxic release models, industrial ventilation designs',
        'Environmental protection acts and disaster management protocols in industry'
      ],
      tip: 'Memorize the Fire Triangle / Tetrahedron diagram and Class A, B, C, D extinguisher types.',
      isClass: false
    },
    {
      id: 'sun-4',
      day: 'Sunday',
      startTime: '21:00',
      endTime: '22:30',
      timeFormatted: '09:00 PM – 10:30 PM',
      duration: '1.5 hrs',
      category: 'Night Strategy & Reset',
      badgeType: 'night',
      subjectCode: 'PLANNING',
      subjectName: 'Weekly Formula Review & Next Week Goals',
      sem: 'Strategy',
      module: 'Mental Reset',
      topics: [
        'Compile newly learned formulas onto master A4 cheat sheet',
        'Audit completion checkboxes for the week',
        'Reset goals and recharge for Monday morning deep work!'
      ],
      tip: 'Clean desk, early sleep, wake up ready for the week ahead.',
      isClass: false
    }
  ]
};

let spSelectedDay = 'today';

function getPlannerDayName(dayKey) {
  if (dayKey === 'today') {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return dayNames[new Date().getDay()];
  }
  return dayKey;
}

function parseTimeToMinutes(timeStr) {
  const [h, m] = timeStr.split(':').map(Number);
  return h * 60 + m;
}

function getLiveTimeframeState() {
  const now = new Date();
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = dayNames[now.getDay()];
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const todaySlots = WEEKLY_STUDY_PLAN[todayName] || [];
  let currentSlot = null;
  let minsLeft = 0;
  let nextSlot = null;

  for (const slot of todaySlots) {
    const start = parseTimeToMinutes(slot.startTime);
    const end = parseTimeToMinutes(slot.endTime);
    if (currentMinutes >= start && currentMinutes < end) {
      currentSlot = slot;
      minsLeft = end - currentMinutes;
      break;
    } else if (currentMinutes < start && !nextSlot) {
      nextSlot = slot;
    }
  }

  return { todayName, currentMinutes, currentSlot, minsLeft, nextSlot, now };
}

/** Render Master Study Planner */
function renderStudyPlanner() {
  const container = document.getElementById('spScheduleGrid');
  if (!container) return;

  const liveState = getLiveTimeframeState();
  const activeDayName = getPlannerDayName(spSelectedDay);

  // Update clock & live indicator in hero
  const timeEl = document.getElementById('spCurrentTimeText');
  const dayEl = document.getElementById('spCurrentDayText');
  const slotTextEl = document.getElementById('spCurrentSlotText');
  const framePill = document.getElementById('spCurrentFramePill');

  if (timeEl && dayEl && slotTextEl) {
    const hours = liveState.now.getHours();
    const minutes = liveState.now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const displayMins = minutes < 10 ? '0' + minutes : minutes;
    timeEl.textContent = `${displayHours}:${displayMins} ${ampm}`;
    dayEl.textContent = `${liveState.todayName} · Live Tracker`;

    if (liveState.currentSlot) {
      slotTextEl.textContent = `${liveState.currentSlot.category}: ${liveState.currentSlot.subjectName} (${liveState.minsLeft}m left)`;
      if (framePill) {
        framePill.style.background = liveState.currentSlot.isClass 
          ? 'rgba(245, 158, 11, 0.15)' 
          : 'rgba(56, 189, 248, 0.15)';
        framePill.style.borderColor = liveState.currentSlot.isClass 
          ? 'rgba(245, 158, 11, 0.4)' 
          : 'rgba(56, 189, 248, 0.4)';
      }
    } else if (liveState.nextSlot) {
      slotTextEl.textContent = `Rest / Break · Next: ${liveState.nextSlot.category} at ${liveState.nextSlot.startTime}`;
      if (framePill) {
        framePill.style.background = 'rgba(148, 163, 184, 0.12)';
        framePill.style.borderColor = 'rgba(148, 163, 184, 0.25)';
      }
    } else {
      slotTextEl.textContent = `🌙 Rest & Sleep Window · Next session: 08:00 AM tomorrow`;
      if (framePill) {
        framePill.style.background = 'rgba(148, 163, 184, 0.12)';
        framePill.style.borderColor = 'rgba(148, 163, 184, 0.25)';
      }
    }
  }

  // Determine which days to display
  let daysToRender = [];
  if (spSelectedDay === 'all') {
    daysToRender = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  } else {
    daysToRender = [activeDayName];
  }

  // Calculate completion progress
  let totalSlots = 0;
  let completedSlots = 0;
  daysToRender.forEach(d => {
    const slots = WEEKLY_STUDY_PLAN[d] || [];
    slots.forEach(s => {
      totalSlots++;
      if (state.plannerCompletedSlots && state.plannerCompletedSlots[s.id]) {
        completedSlots++;
      }
    });
  });

  const progressPct = totalSlots > 0 ? Math.round((completedSlots / totalSlots) * 100) : 0;
  const progressTextEl = document.getElementById('spProgressText');
  const progressFillEl = document.getElementById('spProgressFill');
  if (progressTextEl) {
    progressTextEl.textContent = `${completedSlots} / ${totalSlots} Blocks Done (${progressPct}%)`;
  }
  if (progressFillEl) {
    progressFillEl.style.width = `${progressPct}%`;
  }

  // Update tabs active state
  document.querySelectorAll('.sp-day-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.day === spSelectedDay);
  });

  // Render slots
  let html = '';
  daysToRender.forEach(dayName => {
    const slots = WEEKLY_STUDY_PLAN[dayName] || [];
    if (spSelectedDay === 'all') {
      html += `<h3 style="font-size: 1.15rem; color: #38bdf8; margin: 1.25rem 0 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.35rem;">📅 ${dayName}</h3>`;
    }

    slots.forEach(slot => {
      const isCurrent = (dayName === liveState.todayName) && (liveState.currentSlot && liveState.currentSlot.id === slot.id);
      const isDone = Boolean(state.plannerCompletedSlots && state.plannerCompletedSlots[slot.id]);
      const cardClasses = [
        'sp-slot-card',
        slot.isClass ? 'is-automation-class' : '',
        isCurrent ? 'is-current-timeframe' : '',
        isDone ? 'is-completed' : ''
      ].filter(Boolean).join(' ');

      html += `
        <div class="${cardClasses}" id="sp-slot-card-${slot.id}">
          <div class="sp-slot-header">
            <div class="sp-slot-header-left">
              <span class="sp-slot-time-badge">${slot.timeFormatted}</span>
              <span class="sp-slot-duration">(${slot.duration})</span>
              <span class="sp-slot-category-badge badge-${slot.badgeType}">${slot.category}</span>
              ${isCurrent ? `
                <span class="sp-slot-live-tag">
                  <span class="sp-pulse-dot"></span>
                  HAPPENING NOW · ${liveState.minsLeft}m left
                </span>
              ` : ''}
            </div>
            <div class="sp-slot-header-right">
              <span class="badge ${slot.sem.includes('S7') ? 'badge-dangerous' : 'badge-status'}">${slot.sem}</span>
            </div>
          </div>

          <div class="sp-slot-body">
            <h4 class="sp-slot-title">${escapeHtml(slot.subjectName)}</h4>
            <div class="sp-slot-module">📌 ${escapeHtml(slot.module)}</div>
            
            <ul class="sp-slot-topics-list">
              ${slot.topics.map(topic => `
                <li class="sp-topic-item">
                  <span class="sp-topic-bullet">▸</span>
                  <span>${escapeHtml(topic)}</span>
                </li>
              `).join('')}
            </ul>

            ${slot.tip ? `
              <div class="sp-slot-tip">
                <strong>💡 Focus Strategy:</strong> ${escapeHtml(slot.tip)}
              </div>
            ` : ''}
          </div>

          <div class="sp-slot-footer">
            <label class="sp-checkbox-toggle">
              <input type="checkbox" class="sp-checkbox-input" data-slot-id="${slot.id}" ${isDone ? 'checked' : ''}>
              <span>${isDone ? '✓ Block Completed' : 'Mark as Completed'}</span>
            </label>
            <span class="sp-slot-day-tag">${dayName} · Slot ${slot.id}</span>
          </div>
        </div>
      `;
    });
  });

  container.innerHTML = html;

  // Wire up checkbox events
  container.querySelectorAll('.sp-checkbox-input').forEach(cb => {
    cb.addEventListener('change', () => {
      const slotId = cb.dataset.slotId;
      state.plannerCompletedSlots = state.plannerCompletedSlots || {};
      state.plannerCompletedSlots[slotId] = cb.checked;
      saveState();
      renderStudyPlanner();
      if (cb.checked) {
        showToast('Block marked completed! Keep the momentum going! 🔥');
      }
    });
  });
}

/** Initialize Study Planner Controls */
function initStudyPlanner() {
  const tabsContainer = document.getElementById('spDayTabs');
  if (tabsContainer) {
    tabsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.sp-day-btn');
      if (!btn) return;
      spSelectedDay = btn.dataset.day;
      renderStudyPlanner();
    });
  }

  const focusBtn = document.getElementById('spFocusCurrentBtn');
  if (focusBtn) {
    focusBtn.addEventListener('click', () => {
      spSelectedDay = 'today';
      renderStudyPlanner();
      setTimeout(() => {
        const activeCard = document.querySelector('.sp-slot-card.is-current-timeframe');
        if (activeCard) {
          activeCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          showToast('Currently in recovery / outside scheduled blocks.');
        }
      }, 50);
    });
  }

  const resetBtn = document.getElementById('spResetDayBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (!confirm('Reset completion checkboxes for this day?')) return;
      const activeDayName = getPlannerDayName(spSelectedDay);
      const slots = WEEKLY_STUDY_PLAN[activeDayName] || [];
      state.plannerCompletedSlots = state.plannerCompletedSlots || {};
      slots.forEach(s => {
        delete state.plannerCompletedSlots[s.id];
      });
      saveState();
      renderStudyPlanner();
      showToast('Day completion checkboxes reset.');
    });
  }

  const markAllBtn = document.getElementById('spMarkAllDoneBtn');
  if (markAllBtn) {
    markAllBtn.addEventListener('click', () => {
      const activeDayName = getPlannerDayName(spSelectedDay);
      const slots = WEEKLY_STUDY_PLAN[activeDayName] || [];
      state.plannerCompletedSlots = state.plannerCompletedSlots || {};
      slots.forEach(s => {
        state.plannerCompletedSlots[s.id] = true;
      });
      saveState();
      renderStudyPlanner();
      showToast('All blocks marked completed for this day! Outstanding work! 🎉');
    });
  }

  renderStudyPlanner();
}

// ========== Study Planner (Custom Ad-hoc) ==========

/** Render daily schedule */
function renderDaily() {
  const list = document.getElementById('dailyList');
  list.innerHTML =
    state.dailySchedule.length === 0
      ? '<li class="empty-state">No tasks scheduled today.</li>'
      : state.dailySchedule
          .map(
            (item) => `
      <li class="${item.done ? 'done' : ''}" data-id="${item.id}">
        <input type="checkbox" ${item.done ? 'checked' : ''}>
        <span class="planner-time">${item.time}</span>
        <span>${escapeHtml(item.task)}</span>
        <button class="planner-delete" data-id="${item.id}">×</button>
      </li>`
          )
          .join('');

  list.querySelectorAll('input[type="checkbox"]').forEach((cb, i) => {
    cb.addEventListener('change', () => {
      state.dailySchedule[i].done = cb.checked;
      saveState();
      renderDaily();
    });
  });

  list.querySelectorAll('.planner-delete').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.dailySchedule = state.dailySchedule.filter((x) => x.id !== btn.dataset.id);
      saveState();
      renderDaily();
    });
  });
}

/** Render weekly goals */
function renderWeekly() {
  const list = document.getElementById('weeklyList');
  list.innerHTML =
    state.weeklyGoals.length === 0
      ? '<li class="empty-state">No weekly goals set.</li>'
      : state.weeklyGoals
          .map(
            (item) => `
      <li class="${item.done ? 'done' : ''}" data-id="${item.id}">
        <input type="checkbox" ${item.done ? 'checked' : ''}>
        <span>${escapeHtml(item.goal)}</span>
        <button class="planner-delete" data-id="${item.id}">×</button>
      </li>`
          )
          .join('');

  list.querySelectorAll('input[type="checkbox"]').forEach((cb, i) => {
    cb.addEventListener('change', () => {
      state.weeklyGoals[i].done = cb.checked;
      saveState();
      renderWeekly();
    });
  });

  list.querySelectorAll('.planner-delete').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.weeklyGoals = state.weeklyGoals.filter((x) => x.id !== btn.dataset.id);
      saveState();
      renderWeekly();
    });
  });
}

/** Render revision tracker */
function renderRevision() {
  const list = document.getElementById('revisionList');
  list.innerHTML =
    state.revisionTracker.length === 0
      ? '<li class="empty-state">No revisions tracked yet.</li>'
      : state.revisionTracker
          .map((item) => {
            const sub = state.subjects.find((s) => s.id === item.subjectId);
            const name = sub ? sub.name : 'Unknown';
            return `
      <li class="${item.done ? 'done' : ''}" data-id="${item.id}">
        <input type="checkbox" ${item.done ? 'checked' : ''}>
        <span><strong>${escapeHtml(name)}</strong> — ${escapeHtml(item.topic)} (${item.date})</span>
        <button class="planner-delete" data-id="${item.id}">×</button>
      </li>`;
          })
          .join('');

  list.querySelectorAll('input[type="checkbox"]').forEach((cb, i) => {
    cb.addEventListener('change', () => {
      state.revisionTracker[i].done = cb.checked;
      saveState();
      renderRevision();
    });
  });

  list.querySelectorAll('.planner-delete').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.revisionTracker = state.revisionTracker.filter((x) => x.id !== btn.dataset.id);
      saveState();
      renderRevision();
    });
  });
}

// ========== PYQ Tracker ==========

/** Render PYQ entries */
function renderPyq() {
  const grid = document.getElementById('pyqList');
  grid.innerHTML =
    state.pyqEntries.length === 0
      ? '<p class="empty-state">No PYQ entries yet. Add your first one above.</p>'
      : state.pyqEntries
          .map((entry) => {
            const sub = state.subjects.find((s) => s.id === entry.subjectId);
            const name = sub ? sub.name : 'Unknown';
            return `
        <div class="pyq-card">
          <div class="pyq-card-header">
            <span class="pyq-year">${entry.year}</span>
            <span class="badge badge-status">${entry.status}</span>
          </div>
          <strong>${escapeHtml(name)}</strong>
          <p class="pyq-topics">${escapeHtml(entry.topics)}</p>
          <button class="icon-btn delete pyq-delete" data-id="${entry.id}" style="margin-top:0.5rem">Remove</button>
        </div>`;
          })
          .join('');

  grid.querySelectorAll('.pyq-delete').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.pyqEntries = state.pyqEntries.filter((x) => x.id !== btn.dataset.id);
      saveState();
      renderPyq();
      showToast('PYQ entry removed');
    });
  });
  renderLocalPyqFiles();
}

// ========== Notes ==========

/** Render notes */

/** Render local PYQ file shortcuts */
function renderLocalPyqFiles(filter = '') {
  const list = document.getElementById('pyqFilesList');
  if (!list) return;

  const q = filter.toLowerCase();
  const filtered = LOCAL_PYQ_FILES.filter(
    (f) => f.filename.toLowerCase().includes(q) || f.subject.toLowerCase().includes(q) || f.year.toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    list.innerHTML = '<p class="empty-state">No local PYQ files found matching your search.</p>';
    return;
  }

  list.innerHTML = filtered
    .map(
      (f) => `
    <div class="pdf-card">
      <div class="pdf-info">
        <div class="pdf-icon">📄</div>
        <div class="pdf-details">
          <span class="pdf-subject">${escapeHtml(f.subject)}</span>
          <span class="pdf-title">${escapeHtml(f.filename.replace('.pdf', ''))}</span>
        </div>
      </div>
      <div class="pdf-meta">
        <span class="badge ${f.year !== 'Other' ? 'pdf-year-badge' : 'badge-category'}">${f.year}</span>
        <a href="${encodeURI(f.rel_path)}" target="_blank" class="pdf-open-btn">
          Open File ↗
        </a>
      </div>
    </div>`
    )
    .join('');
}

/** Render local Notes & Study Materials shortcuts */
function renderLocalNoteFiles(filter = '') {
  const list = document.getElementById('noteFilesList');
  if (!list) return;

  const q = filter.toLowerCase();
  const filtered = LOCAL_NOTE_FILES.filter(
    (f) => f.filename.toLowerCase().includes(q) || f.subject.toLowerCase().includes(q) || f.format.toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    list.innerHTML = '<p class="empty-state">No local study notes or textbooks found matching your search.</p>';
    return;
  }

  list.innerHTML = filtered
    .map(
      (f) => `
    <div class="pdf-card">
      <div class="pdf-info">
        <div class="pdf-icon">${
          f.format === 'Video Lecture' ? '🎬' : 
          f.format === 'Audio Guide' ? '🎵' : 
          f.format === 'Presentation' ? '📊' : 
          f.format === 'Document' ? '📝' : 
          f.format === 'Lab Manual' ? '🛠️' : '📘'
        }</div>
        <div class="pdf-details">
          <span class="pdf-subject">${escapeHtml(f.subject)}</span>
          <span class="pdf-title">${escapeHtml(f.filename.replace(/\.[^/.]+$/, ""))}</span>
        </div>
      </div>
      <div class="pdf-meta">
        <span class="badge ${f.format === 'PDF Notes' ? 'pdf-year-badge' : 'badge-category'}">${f.format}</span>
        <a href="${encodeURI(f.rel_path)}" target="_blank" class="pdf-open-btn">
          Open Note ↗
        </a>
      </div>
    </div>`
    )
    .join('');
}


function renderNotes() {
  const grid = document.getElementById('notesList');
  grid.innerHTML =
    state.notes.length === 0
      ? ''
      : state.notes
          .map((note) => {
            const sub = state.subjects.find((s) => s.id === note.subjectId);
            const name = sub ? sub.name : 'General';
            return `
        <article class="card glass note-card">
          <p class="note-subject">${escapeHtml(name)}</p>
          <h4>${escapeHtml(note.title)}</h4>
          <p class="note-content">${escapeHtml(note.content)}</p>
          <p class="note-date">${new Date(note.createdAt).toLocaleString()}</p>
          <div class="note-actions">
            <button class="icon-btn delete note-delete" data-id="${note.id}">Delete</button>
          </div>
        </article>`;
          })
          .join('');

  grid.querySelectorAll('.note-delete').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.notes = state.notes.filter((x) => x.id !== btn.dataset.id);
      saveState();
      renderNotes();
      showToast('Note deleted');
    });
  });
  renderLocalNoteFiles();
}

// ========== Pomodoro ==========

/** Format seconds as MM:SS */
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

/** Update pomodoro display */
function updatePomodoroDisplay() {
  const timeStr = formatTime(pomodoro.remainingSeconds);
  document.getElementById('pomodoroDisplay').textContent = timeStr;
  const pct = (pomodoro.remainingSeconds / pomodoro.totalSeconds) * 100;
  document.getElementById('pomodoroProgress').style.width = `${pct}%`;

  // HUD Pomodoro timer sync
  const hudTimerEl = document.getElementById('hudPomTimer');
  if (hudTimerEl) hudTimerEl.textContent = timeStr;

  // HUD Pomodoro subject sync
  const subSelect = document.getElementById('pomodoroSubjectSelect');
  const activeSubName = subSelect && subSelect.value 
    ? (state.subjects.find(s => s.id === subSelect.value)?.name || 'General Study')
    : 'General Study';
  const hudSubEl = document.getElementById('hudPomSub');
  if (hudSubEl) hudSubEl.textContent = activeSubName;

  // Sync button disabled statuses
  const hudStartBtn = document.getElementById('hudPomStart');
  const hudPauseBtn = document.getElementById('hudPomPause');
  
  if (hudStartBtn) hudStartBtn.disabled = pomodoro.isRunning;
  if (hudPauseBtn) hudPauseBtn.disabled = !pomodoro.isRunning;
}

/** Reset pomodoro sessions if new day */
function checkPomodoroDay() {
  const today = new Date().toDateString();
  if (state.pomodoroSessionsDate !== today) {
    state.pomodoroSessions = 0;
    state.pomodoroSessionsDate = today;
    saveState();
  }
  document.getElementById('pomodoroSessions').textContent = state.pomodoroSessions;
}

/** Pomodoro tick */
function pomodoroTick() {
  if (pomodoro.remainingSeconds <= 0) {
    clearInterval(pomodoro.intervalId);
    pomodoro.isRunning = false;
    document.getElementById('pomodoroStart').disabled = false;
    document.getElementById('pomodoroPause').disabled = true;

    if (pomodoro.mode === 'work') {
      state.pomodoroSessions++;
      state.pomodoroSessionsDate = new Date().toDateString();
      saveState();
      checkPomodoroDay();
      showToast('Pomodoro complete! Take a break.', 'success');
    } else {
      showToast('Break over! Back to work.', 'success');
    }

    // Play a simple beep via Web Audio API
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 800;
      gain.gain.value = 0.1;
      osc.start();
      setTimeout(() => osc.stop(), 200);
    } catch {
      /* audio not supported */
    }
    return;
  }

  pomodoro.remainingSeconds--;
  updatePomodoroDisplay();
}

/** Init pomodoro controls */
function initPomodoro() {
  const startBtn = document.getElementById('pomodoroStart');
  const pauseBtn = document.getElementById('pomodoroPause');
  const resetBtn = document.getElementById('pomodoroReset');

  startBtn.addEventListener('click', () => {
    if (pomodoro.isRunning) return;
    pomodoro.isRunning = true;
    pomodoro.intervalId = setInterval(pomodoroTick, 1000);
    startBtn.disabled = true;
    pauseBtn.disabled = false;
  });

  pauseBtn.addEventListener('click', () => {
    clearInterval(pomodoro.intervalId);
    pomodoro.isRunning = false;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
  });

  resetBtn.addEventListener('click', () => {
    clearInterval(pomodoro.intervalId);
    pomodoro.isRunning = false;
    pomodoro.remainingSeconds = pomodoro.totalSeconds;
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    updatePomodoroDisplay();
  });

  document.querySelectorAll('.mode-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.mode-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const mins = parseInt(btn.dataset.minutes, 10);
      pomodoro.mode = btn.dataset.mode;
      pomodoro.totalSeconds = mins * 60;
      pomodoro.remainingSeconds = mins * 60;
      clearInterval(pomodoro.intervalId);
      pomodoro.isRunning = false;
      startBtn.disabled = false;
      pauseBtn.disabled = true;
      updatePomodoroDisplay();
    });
  });

  document.getElementById('pomodoroSubjectSelect').addEventListener('change', (e) => {
    const sub = state.subjects.find((s) => s.id === e.target.value);
    document.getElementById('pomodoroSubjectName').textContent = sub ? sub.name : 'General';
    updatePomodoroDisplay();
  });

  // HUD Pomodoro Button proxies
  const hudStartBtn = document.getElementById('hudPomStart');
  const hudPauseBtn = document.getElementById('hudPomPause');
  const hudResetBtn = document.getElementById('hudPomReset');
  
  if (hudStartBtn) {
    hudStartBtn.addEventListener('click', () => {
      document.getElementById('pomodoroStart').click();
    });
  }
  if (hudPauseBtn) {
    hudPauseBtn.addEventListener('click', () => {
      document.getElementById('pomodoroPause').click();
    });
  }
  if (hudResetBtn) {
    hudResetBtn.addEventListener('click', () => {
      document.getElementById('pomodoroReset').click();
    });
  }

  updatePomodoroDisplay();
  checkPomodoroDay();
}

// ========== Export / Import ==========

/** Export data as JSON file */
function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `backlog-recovery-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Data exported successfully');
}

/** Import data from JSON file */
function importData(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target.result);
      if (!imported.subjects) throw new Error('Invalid format');
      state = { ...state, ...imported };
      saveState();
      renderAll();
      showToast('Data imported successfully');
    } catch {
      showToast('Invalid JSON file', 'error');
    }
  };
  reader.readAsText(file);
}

/** Reset all data */
function resetAllData() {
  if (!confirm('Reset ALL data? This cannot be undone.')) return;
  if (activeUser) {
    const userStorageKey = `backlogRecoveryData_${activeUser}`;
    localStorage.removeItem(userStorageKey);
  }
  state = {
    subjects: [],
    dailySchedule: [],
    weeklyGoals: [],
    revisionTracker: [],
    pyqEntries: [],
    notes: [],
    examDate: '2026-11-15',
    pomodoroSessions: 0,
    pomodoroSessionsDate: '',
  };
  initFreshState();
  renderAll();
  showToast('Data reset with sample subjects');
}

// ========== Form Handlers ==========

/** Initialize all form event listeners */
function initForms() {
  // Login form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const regNum = document.getElementById('loginRegNum').value.trim();
      login(regNum);
    });
  }

  // Logout button
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
  }

  document.getElementById('subjectForm').addEventListener('submit', handleSubjectSubmit);
  document.getElementById('subjectCancelBtn').addEventListener('click', resetSubjectForm);
  document.getElementById('subjectSearch').addEventListener('input', (e) => {
    renderSubjects(e.target.value);
  });

  const dashSearch = document.getElementById('dashboardSubjectSearch');
  if (dashSearch) {
    dashSearch.addEventListener('input', (e) => {
      const stats = calculateAnxietyAndBPM();
      renderSecondaryDashboardItems(stats.completed);
    });
  }

  // Daily schedule
  document.getElementById('dailyForm').addEventListener('submit', (e) => {
    e.preventDefault();
    state.dailySchedule.push({
      id: generateId(),
      task: document.getElementById('dailyTask').value.trim(),
      time: document.getElementById('dailyTime').value,
      done: false,
    });
    saveState();
    e.target.reset();
    document.getElementById('dailyTime').value = '09:00';
    renderDaily();
    showToast('Daily task added');
  });

  // Weekly goals
  document.getElementById('weeklyForm').addEventListener('submit', (e) => {
    e.preventDefault();
    state.weeklyGoals.push({
      id: generateId(),
      goal: document.getElementById('weeklyGoal').value.trim(),
      done: false,
    });
    saveState();
    e.target.reset();
    renderWeekly();
    showToast('Weekly goal added');
  });

  // Revision tracker
  document.getElementById('revisionForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const subjectId = document.getElementById('revisionSubject').value;
    if (!subjectId) {
      showToast('Select a subject', 'error');
      return;
    }
    state.revisionTracker.push({
      id: generateId(),
      subjectId,
      topic: document.getElementById('revisionTopic').value.trim(),
      date: document.getElementById('revisionDate').value || new Date().toISOString().slice(0, 10),
      done: false,
    });
    saveState();
    e.target.reset();
    renderRevision();
    showToast('Revision tracked');
  });

  // PYQ form
  document.getElementById('pyqForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const subjectId = document.getElementById('pyqSubject').value;
    if (!subjectId) {
      showToast('Select a subject', 'error');
      return;
    }
    state.pyqEntries.push({
      id: generateId(),
      subjectId,
      year: document.getElementById('pyqYear').value,
      topics: document.getElementById('pyqTopics').value.trim(),
      status: document.getElementById('pyqStatus').value,
    });
    saveState();
    e.target.reset();
    renderPyq();
    showToast('PYQ entry added');
  });

  // Notes form
  document.getElementById('noteForm').addEventListener('submit', (e) => {
    e.preventDefault();
    state.notes.unshift({
      id: generateId(),
      subjectId: document.getElementById('noteSubject').value,
      title: document.getElementById('noteTitle').value.trim(),
      content: document.getElementById('noteContent').value.trim(),
      createdAt: new Date().toISOString(),
    });
    saveState();
    e.target.reset();
    renderNotes();
    showToast('Note saved');
  });

  // Exam date
  document.getElementById('saveExamDate').addEventListener('click', () => {
    const date = document.getElementById('examDateInput').value;
    if (!date) {
      showToast('Select a date', 'error');
      return;
    }
    state.examDate = date;
    saveState();
    updateExamCountdown();
    renderDashboard();
    scheduleVisualAndAudioBeat();
    showToast('Exam date saved');
  });

  // PYQ file search
  const fileSearch = document.getElementById('pyqFileSearch');
  if (fileSearch) {
    fileSearch.addEventListener('input', (e) => {
      renderLocalPyqFiles(e.target.value);
    });
  }

  // Notes file search
  const noteSearch = document.getElementById('noteFileSearch');
  if (noteSearch) {
    noteSearch.addEventListener('input', (e) => {
      renderLocalNoteFiles(e.target.value);
    });
  }

  // Export / import / reset
  document.getElementById('exportBtn').addEventListener('click', exportData);
  document.getElementById('importFile').addEventListener('change', (e) => {
    if (e.target.files[0]) importData(e.target.files[0]);
    e.target.value = '';
  });
  document.getElementById('resetDataBtn').addEventListener('click', resetAllData);

  // New quote button
  document.getElementById('newQuoteBtn').addEventListener('click', updateQuotes);

  // Set default revision date to today
  document.getElementById('revisionDate').value = new Date().toISOString().slice(0, 10);
  document.getElementById('examDateInput').value = state.examDate;

  // Timetable tabs
  const ttTabs = document.getElementById('timetableTabs');
  if (ttTabs) {
    ttTabs.querySelectorAll('.tt-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        ttTabs.querySelectorAll('.tt-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        timetableFilterSem = btn.dataset.sem;
        renderTimetable();
      });
    });
  }

  // Timetable search
  const ttSearch = document.getElementById('timetableSearchInput');
  if (ttSearch) {
    ttSearch.addEventListener('input', (e) => {
      timetableSearchQuery = e.target.value;
      renderTimetable();
    });
  }
}

// ========== KTU 2019 Scheme Master Timetable Data & Controller ==========

const KTU_TIMETABLE_2026_27 = [
  // ==================== S7 REGULAR & SUPPLE (NOV 2026) ====================
  {
    sem: 'S7',
    semLabel: 'S7 (R,S)',
    type: 'Regular & Supple',
    date: '2026-11-23',
    dateFormatted: '23-11-2026',
    day: 'Monday',
    slot: 'A',
    timing: 'FN (9:30 AM - 12:30 PM)',
    code: 'EET401',
    name: 'Advanced Control Systems (ACS)',
    shortName: 'ACS',
    category: 'Killer',
    difficulty: 'Dangerous'
  },
  {
    sem: 'S7',
    semLabel: 'S7 (R,S)',
    type: 'Regular & Supple',
    date: '2026-11-25',
    dateFormatted: '25-11-2026',
    day: 'Wednesday',
    slot: 'B',
    timing: 'FN (9:30 AM - 12:30 PM)',
    code: 'EET413',
    name: 'Program Elective II: Electric Drives',
    shortName: 'Electric Drives (PRGM ELEC-II)',
    category: 'Repeated',
    difficulty: 'Medium'
  },
  {
    sem: 'S7',
    semLabel: 'S7 (R,S)',
    type: 'Regular & Supple',
    date: '2026-11-27',
    dateFormatted: '27-11-2026',
    day: 'Friday',
    slot: 'C',
    timing: 'FN (9:30 AM - 12:30 PM)',
    code: 'CST415',
    name: 'Open Elective: Introduction to Mobile Computing',
    shortName: 'Mobile Computing (OPEN ELEC)',
    category: 'Repeated',
    difficulty: 'Medium'
  },
  {
    sem: 'S7',
    semLabel: 'S7 (R,S)',
    type: 'Regular & Supple',
    date: '2026-11-30',
    dateFormatted: '30-11-2026',
    day: 'Monday',
    slot: 'D',
    timing: 'FN (9:30 AM - 12:30 PM)',
    code: 'MCN401',
    name: 'Industrial Safety Engineering (ISE)',
    shortName: 'ISE',
    category: 'Survival',
    difficulty: 'Easy'
  },

  // ==================== S1, S2 SUPPLE (DEC 2026 - JAN 2027) ====================
  {
    sem: 'S1/S2',
    semLabel: 'S1, S2 (S,FE)',
    type: 'Supplementary',
    date: '2026-12-07',
    dateFormatted: '07-12-2026',
    day: 'Monday',
    slot: 'Slot',
    timing: 'FN (9:30 AM - 12:30 PM)',
    code: 'MAT101',
    name: 'Linear Algebra and Calculus (MATHS -LAC)',
    shortName: 'MATHS -LAC',
    category: 'Killer',
    difficulty: 'Dangerous'
  },
  {
    sem: 'S1/S2',
    semLabel: 'S1, S2 (S,FE)',
    type: 'Supplementary',
    date: '2026-12-09',
    dateFormatted: '09-12-2026',
    day: 'Wednesday',
    slot: 'Slot',
    timing: 'FN (9:30 AM - 12:30 PM)',
    code: 'MAT102',
    name: 'Vector Calculus, Differential Equations and Transforms (MATHS-VCDET)',
    shortName: 'MATHS-VCDET',
    category: 'Killer',
    difficulty: 'Dangerous'
  },
  {
    sem: 'S1/S2',
    semLabel: 'S1, S2 (S,FE)',
    type: 'Supplementary',
    date: '2026-12-11',
    dateFormatted: '11-12-2026',
    day: 'Friday',
    slot: 'Slot',
    timing: 'FN (9:30 AM - 12:30 PM)',
    code: 'PHT100/PHT110',
    name: 'Engineering Physics A / B (PHY A / PHY B)',
    shortName: 'PHY A/PHY B',
    category: 'Survival',
    difficulty: 'Dangerous'
  },
  {
    sem: 'S1/S2',
    semLabel: 'S1, S2 (S,FE)',
    type: 'Supplementary',
    date: '2026-12-14',
    dateFormatted: '14-12-2026',
    day: 'Monday',
    slot: 'Slot',
    timing: 'FN (9:30 AM - 12:30 PM)',
    code: 'CYT100',
    name: 'Engineering Chemistry (CHEM)',
    shortName: 'CHEM',
    category: 'Survival',
    difficulty: 'Medium'
  },
  {
    sem: 'S1/S2',
    semLabel: 'S1, S2 (S,FE)',
    type: 'Supplementary',
    date: '2026-12-16',
    dateFormatted: '16-12-2026',
    day: 'Wednesday',
    slot: 'Slot',
    timing: 'FN (9:30 AM - 12:30 PM)',
    code: 'EST100',
    name: 'Engineering Mechanics (MECHANICS)',
    shortName: 'MECHANICS',
    category: 'Survival',
    difficulty: 'Dangerous'
  },
  {
    sem: 'S1/S2',
    semLabel: 'S1, S2 (S,FE)',
    type: 'Supplementary',
    date: '2026-12-18',
    dateFormatted: '18-12-2026',
    day: 'Friday',
    slot: 'Slot',
    timing: 'FN (9:30 AM - 12:30 PM)',
    code: 'EST110',
    name: 'Engineering Graphics (GRAPHICS)',
    shortName: 'GRAPHICS',
    category: 'Survival',
    difficulty: 'Medium'
  },
  {
    sem: 'S1/S2',
    semLabel: 'S1, S2 (S,FE)',
    type: 'Supplementary',
    date: '2026-12-28',
    dateFormatted: '28-12-2026',
    day: 'Monday',
    slot: 'Slot',
    timing: 'FN (9:30 AM - 12:30 PM)',
    code: 'EST120',
    name: 'Basics of Civil & Mechanical Engineering (BCE&BME)',
    shortName: 'BCE&BME',
    category: 'Survival',
    difficulty: 'Medium'
  },
  {
    sem: 'S1/S2',
    semLabel: 'S1, S2 (S,FE)',
    type: 'Supplementary',
    date: '2026-12-30',
    dateFormatted: '30-12-2026',
    day: 'Wednesday',
    slot: 'Slot',
    timing: 'FN (9:30 AM - 12:30 PM)',
    code: 'EST130',
    name: 'Basics of Electrical & Electronics Engineering (BEE&BEC)',
    shortName: 'BEE&BEC',
    category: 'Survival',
    difficulty: 'Medium'
  },
  {
    sem: 'S1/S2',
    semLabel: 'S1, S2 (S,FE)',
    type: 'Supplementary',
    date: '2027-01-01',
    dateFormatted: '01-01-2027',
    day: 'Friday',
    slot: 'Slot',
    timing: 'FN (9:30 AM - 12:30 PM)',
    code: 'HUN101',
    name: 'Life Skills (LIFE SKILL)',
    shortName: 'LIFE SKILL',
    category: 'Survival',
    difficulty: 'Easy'
  },
  {
    sem: 'S1/S2',
    semLabel: 'S1, S2 (S,FE)',
    type: 'Supplementary',
    date: '2027-01-04',
    dateFormatted: '04-01-2027',
    day: 'Monday',
    slot: 'Slot',
    timing: 'FN (9:30 AM - 12:30 PM)',
    code: 'HUT102',
    name: 'Professional Communication (PC)',
    shortName: 'PC',
    category: 'Survival',
    difficulty: 'Easy'
  },
  {
    sem: 'S1/S2',
    semLabel: 'S1, S2 (S,FE)',
    type: 'Supplementary',
    date: '2027-01-06',
    dateFormatted: '06-01-2027',
    day: 'Wednesday',
    slot: 'Slot',
    timing: 'FN (9:30 AM - 12:30 PM)',
    code: 'EST102',
    name: 'Programming in C (C PROGRAMMING)',
    shortName: 'C PROGRAMMING',
    category: 'Survival',
    difficulty: 'Medium'
  },

  // ==================== S6 SUPPLE (DEC 2026) ====================
  {
    sem: 'S6',
    semLabel: 'S6 (S,FE)',
    type: 'Supplementary',
    date: '2026-12-11',
    dateFormatted: '11-12-2026',
    day: 'Friday',
    slot: 'A',
    timing: 'AN (1:30 PM - 4:30 PM)',
    code: 'EET302',
    name: 'Linear Control Systems (LCS)',
    shortName: 'LCS',
    category: 'Killer',
    difficulty: 'Dangerous'
  },
  {
    sem: 'S6',
    semLabel: 'S6 (S,FE)',
    type: 'Supplementary',
    date: '2026-12-14',
    dateFormatted: '14-12-2026',
    day: 'Monday',
    slot: 'B',
    timing: 'AN (1:30 PM - 4:30 PM)',
    code: 'EET304',
    name: 'Power System II',
    shortName: 'POWER SYSTEM-II',
    category: 'Repeated',
    difficulty: 'Medium'
  },
  {
    sem: 'S6',
    semLabel: 'S6 (S,FE)',
    type: 'Supplementary',
    date: '2026-12-16',
    dateFormatted: '16-12-2026',
    day: 'Wednesday',
    slot: 'C',
    timing: 'AN (1:30 PM - 4:30 PM)',
    code: 'EET306',
    name: 'Power Electronics',
    shortName: 'POWER ELECTRONICS',
    category: 'Killer',
    difficulty: 'Dangerous'
  },
  {
    sem: 'S6',
    semLabel: 'S6 (S,FE)',
    type: 'Supplementary',
    date: '2026-12-18',
    dateFormatted: '18-12-2026',
    day: 'Friday',
    slot: 'D',
    timing: 'AN (1:30 PM - 4:30 PM)',
    code: 'EET322',
    name: 'Program Elective I: Renewable Energy Systems',
    shortName: 'Renewable Energy (PRGM ELEC-I)',
    category: 'Repeated',
    difficulty: 'Medium'
  },
  {
    sem: 'S6',
    semLabel: 'S6 (S,FE)',
    type: 'Supplementary',
    date: '2026-12-28',
    dateFormatted: '28-12-2026',
    day: 'Monday',
    slot: 'E',
    timing: 'AN (1:30 PM - 4:30 PM)',
    code: 'HUT300/HUT310',
    name: 'Management for Engineers / Industrial Economics (IEFET/MFE)',
    shortName: 'IEFET/MFE',
    category: 'Survival',
    difficulty: 'Easy'
  },
  {
    sem: 'S6',
    semLabel: 'S6 (S,FE)',
    type: 'Supplementary',
    date: '2026-12-30',
    dateFormatted: '30-12-2026',
    day: 'Wednesday',
    slot: 'F',
    timing: 'AN (1:30 PM - 4:30 PM)',
    code: 'EET308',
    name: 'Comprehensive Course Work',
    shortName: 'COMPREHENSIVE',
    category: 'Survival',
    difficulty: 'Medium'
  },

  // ==================== S5 SUPPLE (JAN 2027) ====================
  {
    sem: 'S5',
    semLabel: 'S5 (S,FE)',
    type: 'Supplementary',
    date: '2027-01-07',
    dateFormatted: '07-01-2027',
    day: 'Thursday',
    slot: 'A',
    timing: 'AN (1:30 PM - 4:30 PM)',
    code: 'EET301',
    name: 'Power Systems I (PS-1)',
    shortName: 'PS-1',
    category: 'Repeated',
    difficulty: 'Medium'
  },
  {
    sem: 'S5',
    semLabel: 'S5 (S,FE)',
    type: 'Supplementary',
    date: '2027-01-11',
    dateFormatted: '11-01-2027',
    day: 'Monday',
    slot: 'B',
    timing: 'AN (1:30 PM - 4:30 PM)',
    code: 'EET303',
    name: 'Microprocessors and Microcontrollers (MM)',
    shortName: 'MM',
    category: 'Repeated',
    difficulty: 'Dangerous'
  },
  {
    sem: 'S5',
    semLabel: 'S5 (S,FE)',
    type: 'Supplementary',
    date: '2027-01-13',
    dateFormatted: '13-01-2027',
    day: 'Wednesday',
    slot: 'C',
    timing: 'AN (1:30 PM - 4:30 PM)',
    code: 'EET305',
    name: 'Signals and Systems (SS)',
    shortName: 'SS',
    category: 'Killer',
    difficulty: 'Dangerous'
  },
  {
    sem: 'S5',
    semLabel: 'S5 (S,FE)',
    type: 'Supplementary',
    date: '2027-01-15',
    dateFormatted: '15-01-2027',
    day: 'Friday',
    slot: 'D',
    timing: 'AN (1:30 PM - 4:30 PM)',
    code: 'EET307',
    name: 'Synchronous and Induction Machines (SIM)',
    shortName: 'SIM',
    category: 'Repeated',
    difficulty: 'Dangerous'
  },
  {
    sem: 'S5',
    semLabel: 'S5 (S,FE)',
    type: 'Supplementary',
    date: '2027-01-19',
    dateFormatted: '19-01-2027',
    day: 'Tuesday',
    slot: 'E',
    timing: 'AN (1:30 PM - 4:30 PM)',
    code: 'HUT300/HUT310',
    name: 'Industrial Economics & Foreign Trade / Management for Engineers',
    shortName: 'IEFT/MFE',
    category: 'Survival',
    difficulty: 'Easy'
  },
  {
    sem: 'S5',
    semLabel: 'S5 (S,FE)',
    type: 'Supplementary',
    date: '2027-01-21',
    dateFormatted: '21-01-2027',
    day: 'Thursday',
    slot: 'F',
    timing: 'AN (1:30 PM - 4:30 PM)',
    code: 'MCN301',
    name: 'Disaster Management (DM)',
    shortName: 'DM',
    category: 'Survival',
    difficulty: 'Easy'
  },

  // ==================== S3 SUPPLE (JAN 2027) ====================
  {
    sem: 'S3',
    semLabel: 'S3 (S,FE)',
    type: 'Supplementary',
    date: '2027-01-18',
    dateFormatted: '18-01-2027',
    day: 'Monday',
    slot: 'A',
    timing: 'FN (9:30 AM - 12:30 PM)',
    code: 'MAT201',
    name: 'Partial Differential Equations and Complex Analysis (PDE)',
    shortName: 'PDE',
    category: 'Killer',
    difficulty: 'Dangerous'
  },
  {
    sem: 'S3',
    semLabel: 'S3 (S,FE)',
    type: 'Supplementary',
    date: '2027-01-20',
    dateFormatted: '20-01-2027',
    day: 'Wednesday',
    slot: 'B',
    timing: 'FN (9:30 AM - 12:30 PM)',
    code: 'EET201',
    name: 'Circuits and Networks (CN)',
    shortName: 'CN',
    category: 'Killer',
    difficulty: 'Dangerous'
  },
  {
    sem: 'S3',
    semLabel: 'S3 (S,FE)',
    type: 'Supplementary',
    date: '2027-01-22',
    dateFormatted: '22-01-2027',
    day: 'Friday',
    slot: 'C',
    timing: 'FN (9:30 AM - 12:30 PM)',
    code: 'EET203',
    name: 'Measurements and Instrumentation (MI)',
    shortName: 'MI',
    category: 'Repeated',
    difficulty: 'Medium'
  },
  {
    sem: 'S3',
    semLabel: 'S3 (S,FE)',
    type: 'Supplementary',
    date: '2027-01-25',
    dateFormatted: '25-01-2027',
    day: 'Monday',
    slot: 'D',
    timing: 'FN (9:30 AM - 12:30 PM)',
    code: 'EET205',
    name: 'Analog Electronics (AE)',
    shortName: 'AE',
    category: 'Killer',
    difficulty: 'Dangerous'
  },
  {
    sem: 'S3',
    semLabel: 'S3 (S,FE)',
    type: 'Supplementary',
    date: '2027-01-27',
    dateFormatted: '27-01-2027',
    day: 'Wednesday',
    slot: 'E',
    timing: 'FN (9:30 AM - 12:30 PM)',
    code: 'EST200/HUT200',
    name: 'Design and Engineering / Professional Ethics (DE/PE)',
    shortName: 'DE/PE',
    category: 'Survival',
    difficulty: 'Easy'
  },
  {
    sem: 'S3',
    semLabel: 'S3 (S,FE)',
    type: 'Supplementary',
    date: '2027-01-29',
    dateFormatted: '29-01-2027',
    day: 'Friday',
    slot: 'F',
    timing: 'FN (9:30 AM - 12:30 PM)',
    code: 'MCN201',
    name: 'Sustainable Engineering (SE)',
    shortName: 'SE',
    category: 'Survival',
    difficulty: 'Easy'
  },

  // ==================== S4 SUPPLE (FEB 2027) ====================
  {
    sem: 'S4',
    semLabel: 'S4 (S,FE)',
    type: 'Supplementary',
    date: '2027-02-02',
    dateFormatted: '02-02-2027',
    day: 'Tuesday',
    slot: 'A',
    timing: 'AN (1:30 PM - 4:30 PM)',
    code: 'MAT204',
    name: 'Probability, Random Processes and Numerical Methods (MATHS)',
    shortName: 'MATHS',
    category: 'Killer',
    difficulty: 'Dangerous'
  },
  {
    sem: 'S4',
    semLabel: 'S4 (S,FE)',
    type: 'Supplementary',
    date: '2027-02-04',
    dateFormatted: '04-02-2027',
    day: 'Thursday',
    slot: 'B',
    timing: 'AN (1:30 PM - 4:30 PM)',
    code: 'EET202',
    name: 'DC Machines and Transformers (DCMT)',
    shortName: 'DCMT',
    category: 'Repeated',
    difficulty: 'Dangerous'
  },
  {
    sem: 'S4',
    semLabel: 'S4 (S,FE)',
    type: 'Supplementary',
    date: '2027-02-06',
    dateFormatted: '06-02-2027',
    day: 'Saturday',
    slot: 'C',
    timing: 'AN (1:30 PM - 4:30 PM)',
    code: 'EET204',
    name: 'Electromagnetic Theory (EMT)',
    shortName: 'EMT',
    category: 'Killer',
    difficulty: 'Dangerous'
  },
  {
    sem: 'S4',
    semLabel: 'S4 (S,FE)',
    type: 'Supplementary',
    date: '2027-02-08',
    dateFormatted: '08-02-2027',
    day: 'Monday',
    slot: 'D',
    timing: 'AN (1:30 PM - 4:30 PM)',
    code: 'EET206',
    name: 'Digital Electronics (DIGITAL)',
    shortName: 'DIGITAL',
    category: 'Repeated',
    difficulty: 'Medium'
  },
  {
    sem: 'S4',
    semLabel: 'S4 (S,FE)',
    type: 'Supplementary',
    date: '2027-02-10',
    dateFormatted: '10-02-2027',
    day: 'Wednesday',
    slot: 'E',
    timing: 'AN (1:30 PM - 4:30 PM)',
    code: 'HUT200/MCN202',
    name: 'Professional Ethics / Design and Engineering (DE/PE)',
    shortName: 'DE/PE',
    category: 'Survival',
    difficulty: 'Easy'
  },
  {
    sem: 'S4',
    semLabel: 'S4 (S,FE)',
    type: 'Supplementary',
    date: '2027-02-12',
    dateFormatted: '12-02-2027',
    day: 'Friday',
    slot: 'F',
    timing: 'AN (1:30 PM - 4:30 PM)',
    code: 'MCN202',
    name: 'Constitution of India (COI)',
    shortName: 'COI',
    category: 'Survival',
    difficulty: 'Easy'
  }
];

// Sort timetable strictly chronologically: Date ascending, then Forenoon (FN) before Afternoon (AN)
KTU_TIMETABLE_2026_27.sort((a, b) => {
  if (a.date !== b.date) {
    return a.date.localeCompare(b.date);
  }
  const aIsFN = a.timing.includes('FN') ? 0 : 1;
  const bIsFN = b.timing.includes('FN') ? 0 : 1;
  return aIsFN - bIsFN;
});

let timetableFilterSem = 'all';
let timetableSearchQuery = '';

/** Render KTU Timetable Grid */
function renderTimetable() {
  const container = document.getElementById('timetableList');
  if (!container) return;

  const now = new Date();
  
  // Calculate days left to S7 Nov 23
  const s7Date = new Date('2026-11-23T09:30:00');
  const diffS7 = s7Date - now;
  const daysS7 = Math.max(0, Math.ceil(diffS7 / (1000 * 60 * 60 * 24)));
  const daysS7El = document.getElementById('ttDaysToS7');
  if (daysS7El) daysS7El.textContent = daysS7;

  // Next upcoming exam
  const futureExams = KTU_TIMETABLE_2026_27
    .filter(e => new Date(e.date + 'T17:00:00') >= now)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  const nextExam = futureExams[0];
  const nextSubEl = document.getElementById('ttNextExamSub');
  if (nextSubEl && nextExam) {
    nextSubEl.textContent = nextExam.shortName || nextExam.code;
  }

  // Filter exams
  let filtered = KTU_TIMETABLE_2026_27;
  if (timetableFilterSem === 'clashes') {
    const dateCounts = {};
    KTU_TIMETABLE_2026_27.forEach(e => {
      dateCounts[e.date] = (dateCounts[e.date] || 0) + 1;
    });
    filtered = filtered.filter(e => dateCounts[e.date] > 1);
  } else if (timetableFilterSem !== 'all') {
    filtered = filtered.filter(e => e.sem === timetableFilterSem);
  }
  if (timetableSearchQuery.trim()) {
    const q = timetableSearchQuery.toLowerCase();
    filtered = filtered.filter(e => 
      e.name.toLowerCase().includes(q) ||
      e.code.toLowerCase().includes(q) ||
      e.slot.toLowerCase().includes(q) ||
      e.dateFormatted.includes(q) ||
      e.semLabel.toLowerCase().includes(q)
    );
  }

  // Ensure strict chronological ordering
  filtered = [...filtered].sort((a, b) => {
    if (a.date !== b.date) {
      return a.date.localeCompare(b.date);
    }
    const aIsFN = a.timing.includes('FN') ? 0 : 1;
    const bIsFN = b.timing.includes('FN') ? 0 : 1;
    return aIsFN - bIsFN;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<p class="empty-state" style="grid-column: 1 / -1; padding: 2rem;">No exams matching your search filter.</p>';
    return;
  }

  container.innerHTML = filtered.map(exam => {
    const examDateObj = new Date(exam.date + 'T09:30:00');
    const diffDays = Math.ceil((examDateObj - now) / (1000 * 60 * 60 * 24));
    let pillClass = 'tt-countdown-pill';
    let pillText = '';
    if (diffDays < 0) {
      pillText = 'Exam Concluded';
      pillClass += ' pill-yellow';
    } else if (diffDays === 0) {
      pillText = 'TODAY!';
      pillClass += '';
    } else if (diffDays <= 45) {
      pillText = `${diffDays} days left`;
      pillClass += '';
    } else if (diffDays <= 90) {
      pillText = `${diffDays} days left`;
      pillClass += ' pill-yellow';
    } else {
      pillText = `${diffDays} days left`;
      pillClass += ' pill-green';
    }

    const isS7 = exam.sem === 'S7';
    const isActiveTarget = state.examDate === exam.date;
    const isSlotFN = exam.timing.includes('FN');
    const clashExams = KTU_TIMETABLE_2026_27.filter(e => e.date === exam.date && e.code !== exam.code);

    return `
      <div class="timetable-card glass ${isS7 ? 'is-s7' : ''} ${isActiveTarget ? 'is-active-target' : ''} ${clashExams.length > 0 ? 'has-date-clash' : ''}">
        <div class="tt-card-header">
          <div class="tt-date-badge">
            <span class="tt-date-str">${exam.dateFormatted}</span>
            <span class="tt-day-str">${exam.day}</span>
          </div>
          <span class="tt-slot-badge ${isSlotFN ? 'tt-slot-fn' : 'tt-slot-an'}">${exam.slot !== 'Slot' ? 'Slot ' + exam.slot : 'Exam'} (${isSlotFN ? 'FN' : 'AN'})</span>
        </div>
        
        <div class="tt-card-body">
          <span class="tt-course-code">${exam.code}</span>
          <h4 class="tt-course-name">${escapeHtml(exam.name)}</h4>
          <div class="tt-card-meta">
            <span class="badge ${isS7 ? 'badge-dangerous' : 'badge-status'}">${exam.semLabel}</span>
            <span class="badge badge-${difficultyClass(exam.difficulty)}">${exam.difficulty}</span>
            <span class="${pillClass}">${pillText}</span>
          </div>

          ${clashExams.length > 0 ? `
            <div class="tt-clash-indicator">
              <span class="tt-clash-badge">⚠️ Double Session Day (${isSlotFN ? 'FN Morning' : 'AN Afternoon'})</span>
              <span>Also today: <strong>${clashExams.map(c => `${c.sem} ${c.shortName} (${c.timing.includes('FN') ? 'FN' : 'AN'})`).join(', ')}</strong></span>
            </div>
          ` : ''}
        </div>

        <div class="tt-card-actions">
          <button class="tt-set-target-btn" onclick="setCountdownTarget('${exam.date}', '${escapeHtml(exam.name)}')">
            🎯 ${isActiveTarget ? 'Tracking in Core' : 'Track in Countdown'}
          </button>
          <a href="#notes" class="tt-resources-btn" onclick="navigateTo('notes')">
            📚 Notes & PYQ ↗
          </a>
        </div>
      </div>
    `;
  }).join('');
}

/** Set dynamic countdown target from timetable */
function setCountdownTarget(dateStr, subjectName) {
  state.examDate = dateStr;
  saveState();
  updateExamCountdown();
  renderDashboard();
  renderTimetable();
  scheduleVisualAndAudioBeat();
  showToast(`Countdown target set to: ${subjectName} (${dateStr})`);
}

// ========== Render All ==========

/** Re-render entire UI */
function renderAll() {
  populateSubjectSelects();
  renderDashboard();
  renderTimetable();
  renderStudyPlanner();
  renderSubjects(document.getElementById('subjectSearch')?.value || '');
  renderCategories();
  renderDaily();
  renderWeekly();
  renderRevision();
  renderPyq();
  renderNotes();
}

// ========== Init ==========

/** Application entry point */
function init() {
  loadState();
  initNavigation();
  initForms();
  initStudyPlanner();
  initPomodoro();
  updateQuotes();
  renderAll();
  initBioChamber();

  // Live countdown update every second
  setInterval(updateExamCountdown, 1000);

  // Live study planner clock & active slot update every 30 seconds
  setInterval(renderStudyPlanner, 30000);
}

document.addEventListener('DOMContentLoaded', init);
