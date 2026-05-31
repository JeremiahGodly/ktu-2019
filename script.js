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
    "filename": "Signals and Systems (November 2024) Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems (November 2024) Answer Key_1.pdf",
    "year": "2024",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Signals and Systems (December 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems (December 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Signals and Systems (May 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems (May 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Signals and Systems Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems Answer Key_1.pdf",
    "year": "Other",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Signals and Systems (November 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems (November 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Signals and Systems (December 2023) Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems (December 2023) Answer Key_1.pdf",
    "year": "2023",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Signals and Systems (December 2022) Answer Key_2.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems (December 2022) Answer Key_2.pdf",
    "year": "2022",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Signals and Systems Answer Key.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems Answer Key.pdf",
    "year": "Other",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Signals and Systems (December 2022) Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems (December 2022) Answer Key_1.pdf",
    "year": "2022",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Signals and Systems (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Signals and Systems (November 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems (November 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Signals and Systems"
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
    "filename": "Power Systems I (May 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (May 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (December 2021) Answer Key.pdf",
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
    "filename": "Power Systems I (May 2000) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (May 2000) Answer Key.pdf",
    "year": "2000",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I Answer Key_1.pdf",
    "year": "Other",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I (May 2025) Answer Key_2.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (May 2025) Answer Key_2.pdf",
    "year": "2025",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I Answer Key_2.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I Answer Key_2.pdf",
    "year": "Other",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I (May 2025) Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (May 2025) Answer Key_1.pdf",
    "year": "2025",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I Answer Key.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I Answer Key.pdf",
    "year": "Other",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I (May 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (May 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (June 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Power Systems I"
  },
  {
    "filename": "Synchronous and Induction Machines (2021).pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines (2021).pdf",
    "year": "2021",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines Answer Key.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines Answer Key.pdf",
    "year": "Other",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines (November 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines (November 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines (May 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines (May 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines (January 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines (January 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines (December 2022) Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines (December 2022) Answer Key_1.pdf",
    "year": "2022",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines Answer Key_1.pdf",
    "year": "Other",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines (December 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines (December 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines (December 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines (December 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines (2019) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines (2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Microprocessors and Microcontrollers (December 2022) Answer Key_2.pdf",
    "rel_path": "Btech cources/S5/Microprocessor/Microprocessors and Microcontrollers (December 2022) Answer Key_2.pdf",
    "year": "2022",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Microprocessors and Microcontrollers (November 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Microprocessor/Microprocessors and Microcontrollers (November 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Microprocessors and Microcontrollers (December 2022) Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/Microprocessor/Microprocessors and Microcontrollers (December 2022) Answer Key_1.pdf",
    "year": "2022",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Microprocessors and Microcontrollers (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Microprocessor/Microprocessors and Microcontrollers (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Microprocessors and Microcontrollers (May 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Microprocessor/Microprocessors and Microcontrollers (May 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Microprocessors and Microcontrollers (May 2018) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Microprocessor/Microprocessors and Microcontrollers (May 2018) Answer Key.pdf",
    "year": "2018",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Microprocessors and Microcontrollers Answer Key.pdf",
    "rel_path": "Btech cources/S5/Microprocessor/Microprocessors and Microcontrollers Answer Key.pdf",
    "year": "Other",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Microprocessors and Microcontrollers (November 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Microprocessor/Microprocessors and Microcontrollers (November 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Microprocessors and Microcontrollers (December 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Microprocessor/Microprocessors and Microcontrollers (December 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Microprocessors and Microcontrollers (May 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Microprocessor/Microprocessors and Microcontrollers (May 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Microprocessors and Microcontrollers (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Microprocessor/Microprocessors and Microcontrollers (June 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Microprocessors and Microcontrollers (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Microprocessor/Microprocessors and Microcontrollers (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Disaster Management (November 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (November 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (December 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (December 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (March 2005) Answer Key.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (March 2005) Answer Key.pdf",
    "year": "2005",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (June 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (June 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (2005)_1.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (2005)_1.pdf",
    "year": "2005",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (December 2022) Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (December 2022) Answer Key_1.pdf",
    "year": "2022",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management Answer Key_1.pdf",
    "year": "Other",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (December 2022) Answer Key_2.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (December 2022) Answer Key_2.pdf",
    "year": "2022",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management Answer Key_2.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management Answer Key_2.pdf",
    "year": "Other",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management Answer Key_3.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management Answer Key_3.pdf",
    "year": "Other",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (December 2023) Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (December 2023) Answer Key_1.pdf",
    "year": "2023",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (November 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (November 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management Answer Key_4.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management Answer Key_4.pdf",
    "year": "Other",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management Answer Key.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management Answer Key.pdf",
    "year": "Other",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (May 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (May 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (2021) Answer Key.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (2005).pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (2005).pdf",
    "year": "2005",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (June 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Disaster Management"
  },
  {
    "filename": "Disaster Management (December 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management (December 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Disaster Management"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (May 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (May 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (2022) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (December 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (December 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (June 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (2023).pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (2023).pdf",
    "year": "2023",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (May 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (May 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_2.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_2.pdf",
    "year": "Other",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_10.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_10.pdf",
    "year": "Other",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP.pdf",
    "year": "Other",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_11.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_11.pdf",
    "year": "Other",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_1.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_1.pdf",
    "year": "Other",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_12.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_12.pdf",
    "year": "Other",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_16.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_16.pdf",
    "year": "Other",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_4.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_4.pdf",
    "year": "Other",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (May 2024) Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (May 2024) Answer Key_1.pdf",
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
    "filename": "Industrial Economics & Foreign Trade QP_5.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_5.pdf",
    "year": "Other",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_15.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_15.pdf",
    "year": "Other",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_7.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_7.pdf",
    "year": "Other",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (December 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (December 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_6.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_6.pdf",
    "year": "Other",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_14.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_14.pdf",
    "year": "Other",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_18.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_18.pdf",
    "year": "Other",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_8.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_8.pdf",
    "year": "Other",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade QP_9.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade QP_9.pdf",
    "year": "Other",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (January 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (January 2024) Answer Key.pdf",
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
    "filename": "Industrial Economics & Foreign Trade (November 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (November 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (June 2023) Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (June 2023) Answer Key_1.pdf",
    "year": "2023",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade Answer Key.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade Answer Key.pdf",
    "year": "Other",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Industrial Economics & Foreign Trade (June 2022) Answer Key_1.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade (June 2022) Answer Key_1.pdf",
    "year": "2022",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Analog Electronics QP_6.pdf",
    "rel_path": "Btech cources/S3/Analog electronics /Analog Electronics QP_6.pdf",
    "year": "Other",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Circuits and Networks (December 2022) Answer Key_2.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks (December 2022) Answer Key_2.pdf",
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
    "filename": "Circuits and Networks (December 2023) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks (December 2023) Answer Key_1.pdf",
    "year": "2023",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks (December 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks (December 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks (December 2020) Answer Key_2.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks (December 2020) Answer Key_2.pdf",
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
    "filename": "Circuits and Networks (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks (December 2019) Answer Key.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks (December 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks (December 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks (December 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks (June 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks Answer Key_1.pdf",
    "year": "Other",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks Answer Key_3.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks Answer Key_3.pdf",
    "year": "Other",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks Answer Key_4.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks Answer Key_4.pdf",
    "year": "Other",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks, Solved (2021).pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks, Solved (2021).pdf",
    "year": "2021",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks (November 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks (November 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks (November 2024) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks (November 2024) Answer Key_1.pdf",
    "year": "2024",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks (December 2020) Answer Key.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks (December 2020) Answer Key.pdf",
    "year": "2020",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Analog Electronics (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics (December 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics (December 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics (June 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics (December 2020) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics (December 2020) Answer Key_1.pdf",
    "year": "2020",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics Answer Key_1.pdf",
    "year": "Other",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics (December 2020) Answer Key_2.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics (December 2020) Answer Key_2.pdf",
    "year": "2020",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics (December 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics (December 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics (December 2020) Answer Key_3.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics (December 2020) Answer Key_3.pdf",
    "year": "2020",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics (November 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics (November 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics (December 2020) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics (December 2020) Answer Key.pdf",
    "year": "2020",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics Answer Key.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics Answer Key.pdf",
    "year": "Other",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Measurements and Instrumentation (November 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (November 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation (June 2024) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (June 2024) Answer Key_1.pdf",
    "year": "2024",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation (December 2023) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (December 2023) Answer Key_1.pdf",
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
    "filename": "Measurements and Instrumentation (December 2020) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (December 2020) Answer Key.pdf",
    "year": "2020",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation (December 2020) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (December 2020) Answer Key_1.pdf",
    "year": "2020",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation (December 2021) Answer Key_6.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (December 2021) Answer Key_6.pdf",
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
    "filename": "Measurements and Instrumentation (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (December 2021) Answer Key.pdf",
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
    "filename": "Measurements and Instrumentation Answer Key.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation Answer Key.pdf",
    "year": "Other",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation (May 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (May 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation Answer Key_1.pdf",
    "year": "Other",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (June 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation (November 2024) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (November 2024) Answer Key_1.pdf",
    "year": "2024",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Measurements and Instrumentation (December 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation (December 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Measurements and Instrumentation"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (November 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (November 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (December 2020) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (December 2020) Answer Key.pdf",
    "year": "2020",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis Answer Key.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis Answer Key.pdf",
    "year": "Other",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (June 2024) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (June 2024) Answer Key_1.pdf",
    "year": "2024",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (June 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (December 2020) Answer Key_4.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (December 2020) Answer Key_4.pdf",
    "year": "2020",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (December 2021) Answer Key_2.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (December 2021) Answer Key_2.pdf",
    "year": "2021",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (December 2021) Answer Key_3.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (December 2021) Answer Key_3.pdf",
    "year": "2021",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (December 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (December 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (December 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (December 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (December 2020) Answer Key_2.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (December 2020) Answer Key_2.pdf",
    "year": "2020",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (December 2020) Answer Key_3.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (December 2020) Answer Key_3.pdf",
    "year": "2020",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (December 2020) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (December 2020) Answer Key_1.pdf",
    "year": "2020",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations and Complex Analysis (2023) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations and Complex Analysis (2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Professional Ethics (May 2020) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (May 2020) Answer Key.pdf",
    "year": "2020",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (June 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (June 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (July 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (July 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (June 2023) Answer Key.pdf",
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
    "filename": "Professional Ethics (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (June 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (May 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (May 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (May 2019) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (May 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (May 2021) Answer Key_2.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (May 2021) Answer Key_2.pdf",
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
    "filename": "Professional Ethics (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (May 2020) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (May 2020) Answer Key_1.pdf",
    "year": "2020",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (December 2020) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (December 2020) Answer Key.pdf",
    "year": "2020",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics QP.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics QP.pdf",
    "year": "Other",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (May 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (May 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Professional Ethics"
  },
  {
    "filename": "Professional Ethics (June 2023) Answer Key_1.pdf",
    "rel_path": "Btech cources/S3/Professional Ethics/Professional Ethics (June 2023) Answer Key_1.pdf",
    "year": "2023",
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
    "filename": "Probability, Random Processes & Numerical Methods Answer Key.pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes & Numerical Methods Answer Key.pdf",
    "year": "Other",
    "subject": "Probability, Random Processes and Numerical Methods"
  },
  {
    "filename": "Probability, Random Processes and Numerical Methods (May 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes and Numerical Methods (May 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Probability, Random Processes and Numerical Methods"
  },
  {
    "filename": "Probability, Random Processes and Numerical Methods (May 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes and Numerical Methods (May 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Probability, Random Processes and Numerical Methods"
  },
  {
    "filename": "Probability, Random Processes and Numerical Methods (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes and Numerical Methods (June 2023) Answer Key.pdf",
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
    "filename": "Probability, Random Processes and Numerical Methods (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes and Numerical Methods (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Probability, Random Processes and Numerical Methods"
  },
  {
    "filename": "Probability, Random Processes and Numerical Methods (May 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes and Numerical Methods (May 2023) Answer Key.pdf",
    "year": "2023",
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
    "filename": "Digital Electronics (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (June 2024) Answer Key.pdf",
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
    "filename": "Digital Electronics (2021) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Digital Electronics (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Digital Electronics (December 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (December 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Digital Electronics (July 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (July 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Digital Electronics (June 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (June 2022) Answer Key.pdf",
    "year": "2022",
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
    "filename": "Digital Electronics (August 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (August 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Digital Electronics (June 2023) Answer Key_3.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (June 2023) Answer Key_3.pdf",
    "year": "2023",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Digital Electronics (January 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (January 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Digital Electronics (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Digital Electronics (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Digital Electronics Answer Key_2.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics Answer Key_2.pdf",
    "year": "Other",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Electromagnetic Theory Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory Answer Key_1.pdf",
    "year": "Other",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory (June 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory (June 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory (June 2023) Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory (June 2023) Answer Key_1.pdf",
    "year": "2023",
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
    "filename": "Electromagnetic Theory (2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory (2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory (2019) Answer Key.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory (2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory (June 2022) Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory (June 2022) Answer Key_1.pdf",
    "year": "2022",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory (July 2021) Answer Key_2.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory (July 2021) Answer Key_2.pdf",
    "year": "2021",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory (July 2021) Answer Key_3.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory (July 2021) Answer Key_3.pdf",
    "year": "2021",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "Electromagnetic Theory (July 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory (July 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Electromagnetic Theory"
  },
  {
    "filename": "DC Machines and Transformers (June 2023) Answer Key_2.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers (June 2023) Answer Key_2.pdf",
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
    "filename": "DC Machines and Transformers (May 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers (May 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Answer Key_2.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Answer Key_2.pdf",
    "year": "Other",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers (May 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers (May 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers (May 2024) Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers (May 2024) Answer Key_1.pdf",
    "year": "2024",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers (May 2021) Answer Key_2.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers (May 2021) Answer Key_2.pdf",
    "year": "2021",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Answer Key_1.pdf",
    "year": "Other",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers (May 2019) Answer Key.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers (May 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers (January 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers (January 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers (May 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers (May 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Answer Key.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Answer Key.pdf",
    "year": "Other",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "Constitution of India Answer Key.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India Answer Key.pdf",
    "year": "Other",
    "subject": "Constitution of India"
  },
  {
    "filename": "Constitution of India Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India Answer Key_1.pdf",
    "year": "Other",
    "subject": "Constitution of India"
  },
  {
    "filename": "Constitution of India (July 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India (July 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Constitution of India"
  },
  {
    "filename": "Constitution of India (May 2024) Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India (May 2024) Answer Key_1.pdf",
    "year": "2024",
    "subject": "Constitution of India"
  },
  {
    "filename": "Constitution of India (June 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India (June 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Constitution of India"
  },
  {
    "filename": "Constitution of India (May 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India (May 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Constitution of India"
  },
  {
    "filename": "Constitution of India (July 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India (July 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Constitution of India"
  },
  {
    "filename": "Constitution of India (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Constitution of India"
  },
  {
    "filename": "Constitution of India (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Constitution of India"
  },
  {
    "filename": "Constitution of India (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Constitution of India"
  },
  {
    "filename": "Design and Engineering (May 2019) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (May 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (June 2023) Answer Key_2.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (June 2023) Answer Key_2.pdf",
    "year": "2023",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (June 2023) Answer Key_3.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (June 2023) Answer Key_3.pdf",
    "year": "2023",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (June 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (June 2022) Answer Key.pdf",
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
    "filename": "Design and Engineering (June 2023) Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (June 2023) Answer Key_1.pdf",
    "year": "2023",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (July 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (July 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering Answer Key.pdf",
    "year": "Other",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (July 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (July 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (May 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (May 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (December 2020) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (December 2020) Answer Key.pdf",
    "year": "2020",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (November 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (November 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (June 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering Answer Key_1.pdf",
    "year": "Other",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering Answer Key_2.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering Answer Key_2.pdf",
    "year": "Other",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (December 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (December 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering Answer Key_3.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering Answer Key_3.pdf",
    "year": "Other",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (December 2020) Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (December 2020) Answer Key_1.pdf",
    "year": "2020",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (2098) Lab Manual.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (2098) Lab Manual.pdf",
    "year": "2098",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (2019) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (May 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (May 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (December 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (December 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (May 2021) Answer Key_3.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (May 2021) Answer Key_3.pdf",
    "year": "2021",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (May 2021) Answer Key_2.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (May 2021) Answer Key_2.pdf",
    "year": "2021",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (May 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (May 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Programming in C (June 2022) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C (June 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C (July 2021) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C (July 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C (July 2019) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C (July 2019) Answer Key_1.pdf",
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
    "filename": "Programming in C (June 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C (June 2019) Answer Key.pdf",
    "year": "2019",
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
    "filename": "Programming in C (June 2022) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C (June 2022) Answer Key_1.pdf",
    "year": "2022",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C (December 2024) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C (December 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C (July 2021) Answer Key_5.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C (July 2021) Answer Key_5.pdf",
    "year": "2021",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C (July 2021) Answer Key_4.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C (July 2021) Answer Key_4.pdf",
    "year": "2021",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C (July 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C (July 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C (July 2021) Answer Key_3.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C (July 2021) Answer Key_3.pdf",
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
    "filename": "Programming in C (July 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C (July 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Programming in C"
  },
  {
    "filename": "Linear Algebra and Calculus (January 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra and Calculus (January 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra and Calculus (December 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra and Calculus (December 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra & Calculus (2021).pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra & Calculus (2021).pdf",
    "year": "2021",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra & Calculus, Solved (2020).pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra & Calculus, Solved (2020).pdf",
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
    "filename": "Linear Algebra and Calculus (December 2019) Answer Key_5.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra and Calculus (December 2019) Answer Key_5.pdf",
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
    "filename": "Linear Algebra and Calculus (December 2019) Answer Key_4.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra and Calculus (December 2019) Answer Key_4.pdf",
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
    "filename": "Linear Algebra and Calculus (May 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra and Calculus (May 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra and Calculus (December 2019) Answer Key_3.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra and Calculus (December 2019) Answer Key_3.pdf",
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
    "filename": "Engineering Physics A Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A Answer Key.pdf",
    "year": "Other",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (June 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (June 2019) Answer Key.pdf",
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
    "filename": "Engineering Physics A (May 2021) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (May 2021) Answer Key.pdf",
    "year": "2021",
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
    "filename": "Engineering Physics A (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (December 2019) Answer Key_6.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (December 2019) Answer Key_6.pdf",
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
    "filename": "Engineering Physics A (December 2019) Answer Key_2.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (December 2019) Answer Key_2.pdf",
    "year": "2019",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (2019) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (2019) Answer Key_1.pdf",
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
    "filename": "Engineering Physics A (December 2019) Answer Key_3.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (December 2019) Answer Key_3.pdf",
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
    "filename": "Engineering Physics A (December 2019) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (December 2019) Answer Key_1.pdf",
    "year": "2019",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Mechanics QP.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Mechanics QP.pdf",
    "year": "Other",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (June 2019) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (June 2019) Answer Key_1.pdf",
    "year": "2019",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A QP_1.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A QP_1.pdf",
    "year": "Other",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (December 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (December 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (December 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (December 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (May 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (May 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Engineering Physics A"
  },
  {
    "filename": "Engineering Physics A (2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Phy/Engineering Physics A (2019) Answer Key.pdf",
    "year": "2019",
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
    "filename": "Basics of Electrical & Electronics Engineering (October 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (October 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering (December 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (December 2019) Answer Key.pdf",
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
    "filename": "Basics of Electrical & Electronics Engineering (October 2021) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (October 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engg, Answer Key QP.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engg, Answer Key QP.pdf",
    "year": "Other",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering (December 2019) Answer Key_6.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (December 2019) Answer Key_6.pdf",
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
    "filename": "Basics of Electrical & Electronics Engineering Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering Answer Key.pdf",
    "year": "Other",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering (December 2019) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (December 2019) Answer Key_1.pdf",
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
    "filename": "Basics of Electrical & Electronics Engineering (June 2019) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (June 2019) Answer Key_1.pdf",
    "year": "2019",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering (January 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (January 2019) Answer Key.pdf",
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
    "filename": "Basics of Electrical & Electronics Engineering (July 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (July 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engineering (May 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering (May 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Vector Calculus, Differential Equations and Transforms (July 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations and Transforms (July 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations & Transforms (2020)_4.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations & Transforms (2020)_4.pdf",
    "year": "2020",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations & Transforms (2020)_2.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations & Transforms (2020)_2.pdf",
    "year": "2020",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations & Transforms (2020)_3.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations & Transforms (2020)_3.pdf",
    "year": "2020",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations & Transforms (2020)_1.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations & Transforms (2020)_1.pdf",
    "year": "2020",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations and Transforms (July 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations and Transforms (July 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations & Transforms Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations & Transforms Answer Key.pdf",
    "year": "Other",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations and Transforms (July 2021) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations and Transforms (July 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations and Transforms (May 2019) Answer Key_2.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations and Transforms (May 2019) Answer Key_2.pdf",
    "year": "2019",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations and Transforms (May 2019) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations and Transforms (May 2019) Answer Key_1.pdf",
    "year": "2019",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations & Transforms (2020).pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations & Transforms (2020).pdf",
    "year": "2020",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations and Transforms (June 2019) Answer Key_3.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations and Transforms (June 2019) Answer Key_3.pdf",
    "year": "2019",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations and Transforms (June 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations and Transforms (June 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations and Transforms (June 2019) Answer Key_2.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations and Transforms (June 2019) Answer Key_2.pdf",
    "year": "2019",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations and Transforms (December 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations and Transforms (December 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations and Transforms (June 2019) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations and Transforms (June 2019) Answer Key_1.pdf",
    "year": "2019",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Vector Calculus, Differential Equations and Transforms (July 2019) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations and Transforms (July 2019) Answer Key_1.pdf",
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
    "filename": "Mechanics Answer Key (2020 Dec.).pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Mechanics Answer Key (2020 Dec.).pdf",
    "year": "2020",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Engineering Mechanics, Answer Key (December 2020).pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics, Answer Key (December 2020).pdf",
    "year": "2020",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Engineering Mechanics (January 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics (January 2019) Answer Key.pdf",
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
    "filename": "Engineering Mechanics (May 2019) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics (May 2019) Answer Key_1.pdf",
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
    "filename": "Engineering Mechanics (July 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics (July 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Engineering Mechanics (December 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics (December 2019) Answer Key.pdf",
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
    "filename": "Engineering Mechanics (December 2019) Answer Key_3.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics (December 2019) Answer Key_3.pdf",
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
    "filename": "Engineering Mechanics (December 2019) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics (December 2019) Answer Key_1.pdf",
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
    "filename": "Engineering Mechanics, Answer Key (June 2022).pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics, Answer Key (June 2022).pdf",
    "year": "2022",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Engineering Mechanics (May 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics (May 2019) Answer Key.pdf",
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
    "filename": "Engineering Mechanics Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics Answer Key.pdf",
    "year": "Other",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Engineering Mechanics (June 2019) Answer Key.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics (June 2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Engineering Mechanics (July 2019) Answer Key_1.pdf",
    "rel_path": "Btech cources/College S1 S2/Mech/Engineering Mechanics (July 2019) Answer Key_1.pdf",
    "year": "2019",
    "subject": "Engineering Mechanics"
  },
  {
    "filename": "Electrical System Design & Estimation (April 2011) Answer Key_2.pdf",
    "rel_path": "Btech cources/S8/Design/Electrical System Design & Estimation (April 2011) Answer Key_2.pdf",
    "year": "2011",
    "subject": "Electrical System Design & Estimation"
  },
  {
    "filename": "Electrical System Design & Estimation (June 2011) Answer Key_1.pdf",
    "rel_path": "Btech cources/S8/Design/Electrical System Design & Estimation (June 2011) Answer Key_1.pdf",
    "year": "2011",
    "subject": "Electrical System Design & Estimation"
  },
  {
    "filename": "Electrical System Design & Estimation (April 2011) Answer Key_1.pdf",
    "rel_path": "Btech cources/S8/Design/Electrical System Design & Estimation (April 2011) Answer Key_1.pdf",
    "year": "2011",
    "subject": "Electrical System Design & Estimation"
  },
  {
    "filename": "Electrical System Design & Estimation (April 2011) Answer Key.pdf",
    "rel_path": "Btech cources/S8/Design/Electrical System Design & Estimation (April 2011) Answer Key.pdf",
    "year": "2011",
    "subject": "Electrical System Design & Estimation"
  },
  {
    "filename": "Electrical System Design & Estimation (May 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S8/Design/Electrical System Design & Estimation (May 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Electrical System Design & Estimation"
  },
  {
    "filename": "Electrical System Design & Estimation (May 2003) Answer Key.pdf",
    "rel_path": "Btech cources/S8/Design/Electrical System Design & Estimation (May 2003) Answer Key.pdf",
    "year": "2003",
    "subject": "Electrical System Design & Estimation"
  },
  {
    "filename": "Electrical System Design & Estimation (June 2011) Answer Key.pdf",
    "rel_path": "Btech cources/S8/Design/Electrical System Design & Estimation (June 2011) Answer Key.pdf",
    "year": "2011",
    "subject": "Electrical System Design & Estimation"
  },
  {
    "filename": "Special Electrical Machines (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S8/Machines/Special Electrical Machines (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Special Electrical Machines"
  },
  {
    "filename": "Special Electrical Machines Answer Key.pdf",
    "rel_path": "Btech cources/S8/Machines/Special Electrical Machines Answer Key.pdf",
    "year": "Other",
    "subject": "Special Electrical Machines"
  },
  {
    "filename": "Special Electrical Machines (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S8/Machines/Special Electrical Machines (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Special Electrical Machines"
  },
  {
    "filename": "Special Electrical Machines (June 2023) Answer Key_1.pdf",
    "rel_path": "Btech cources/S8/Machines/Special Electrical Machines (June 2023) Answer Key_1.pdf",
    "year": "2023",
    "subject": "Special Electrical Machines"
  },
  {
    "filename": "Special Electrical Machines (June 2023) Answer Key_2.pdf",
    "rel_path": "Btech cources/S8/Machines/Special Electrical Machines (June 2023) Answer Key_2.pdf",
    "year": "2023",
    "subject": "Special Electrical Machines"
  },
  {
    "filename": "Special Electrical Machines (April 2025) Answer Key_1.pdf",
    "rel_path": "Btech cources/S8/Machines/Special Electrical Machines (April 2025) Answer Key_1.pdf",
    "year": "2025",
    "subject": "Special Electrical Machines"
  },
  {
    "filename": "Special Electrical Machines (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S8/Machines/Special Electrical Machines (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Special Electrical Machines"
  },
  {
    "filename": "Industrial Instrumentation & Automation (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S8/Automation/Industrial Instrumentation & Automation (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Industrial Instrumentation & Automation"
  },
  {
    "filename": "Industrial Instrumentation & Automation (June 2023) Answer Key_1.pdf",
    "rel_path": "Btech cources/S8/Automation/Industrial Instrumentation & Automation (June 2023) Answer Key_1.pdf",
    "year": "2023",
    "subject": "Industrial Instrumentation & Automation"
  },
  {
    "filename": "Industrial Instrumentation & Automation (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S8/Automation/Industrial Instrumentation & Automation (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Industrial Instrumentation & Automation"
  },
  {
    "filename": "Industrial Instrumentation & Automation (2019) Answer Key.pdf",
    "rel_path": "Btech cources/S8/Automation/Industrial Instrumentation & Automation (2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Industrial Instrumentation & Automation"
  },
  {
    "filename": "Industrial Instrumentation & Automation (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S8/Automation/Industrial Instrumentation & Automation (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Industrial Instrumentation & Automation"
  },
  {
    "filename": "Energy Management (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S8/Energy management/Energy Management (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Energy Management"
  },
  {
    "filename": "Energy Management (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S8/Energy management/Energy Management (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Energy Management"
  },
  {
    "filename": "Energy Management (May 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S8/Energy management/Energy Management (May 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Energy Management"
  },
  {
    "filename": "Energy Management (2015) Lab Manual.pdf",
    "rel_path": "Btech cources/S8/Energy management/Energy Management (2015) Lab Manual.pdf",
    "year": "2015",
    "subject": "Energy Management"
  },
  {
    "filename": "Energy Management (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S8/Energy management/Energy Management (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Energy Management"
  },
  {
    "filename": "Renewable Energy Systems (June 2022) Answer Key_2.pdf",
    "rel_path": "Btech cources/S6/Renewable Energy Systems/Renewable Energy Systems (June 2022) Answer Key_2.pdf",
    "year": "2022",
    "subject": "Renewable Energy Systems"
  },
  {
    "filename": "Renewable Energy Systems (June 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Renewable Energy Systems/Renewable Energy Systems (June 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Renewable Energy Systems"
  },
  {
    "filename": "Renewable Energy Systems (June 2022) Answer Key_1.pdf",
    "rel_path": "Btech cources/S6/Renewable Energy Systems/Renewable Energy Systems (June 2022) Answer Key_1.pdf",
    "year": "2022",
    "subject": "Renewable Energy Systems"
  },
  {
    "filename": "Renewable Energy Systems (December 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Renewable Energy Systems/Renewable Energy Systems (December 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Renewable Energy Systems"
  },
  {
    "filename": "Renewable Energy Systems (June 2023) Answer Key_1.pdf",
    "rel_path": "Btech cources/S6/Renewable Energy Systems/Renewable Energy Systems (June 2023) Answer Key_1.pdf",
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
    "filename": "Renewable Energy Systems (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Renewable Energy Systems/Renewable Energy Systems (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Renewable Energy Systems"
  },
  {
    "filename": "Renewable Energy Systems (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Renewable Energy Systems/Renewable Energy Systems (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Renewable Energy Systems"
  },
  {
    "filename": "Power Systems II (June 2023) Answer Key_1.pdf",
    "rel_path": "Btech cources/S6/Power system 2/Power Systems II (June 2023) Answer Key_1.pdf",
    "year": "2023",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems II (May 2023) Answer Key_1.pdf",
    "rel_path": "Btech cources/S6/Power system 2/Power Systems II (May 2023) Answer Key_1.pdf",
    "year": "2023",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems II Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power system 2/Power Systems II Answer Key.pdf",
    "year": "Other",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems II (December 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power system 2/Power Systems II (December 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems II (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power system 2/Power Systems II (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems II Answer Key_1.pdf",
    "rel_path": "Btech cources/S6/Power system 2/Power Systems II Answer Key_1.pdf",
    "year": "Other",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems II (May 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power system 2/Power Systems II (May 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems II (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power system 2/Power Systems II (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems II (June 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power system 2/Power Systems II (June 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems II (May 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power system 2/Power Systems II (May 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems II (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power system 2/Power Systems II (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Electronics (June 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics (June 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics (2022).pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics (2022).pdf",
    "year": "2022",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics (2022)_1.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics (2022)_1.pdf",
    "year": "2022",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics (2022)_3.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics (2022)_3.pdf",
    "year": "2022",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics (May 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics (May 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics (2022)_2.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics (2022)_2.pdf",
    "year": "2022",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics (December 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics (December 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics Answer Key.pdf",
    "year": "Other",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics Answer Key_2.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics Answer Key_2.pdf",
    "year": "Other",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics Answer Key_1.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics Answer Key_1.pdf",
    "year": "Other",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics (June 2022) Answer Key_1.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics (June 2022) Answer Key_1.pdf",
    "year": "2022",
    "subject": "Power Electronics"
  },
  {
    "filename": "Comprehensive Course Work (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Comprehensive/Comprehensive Course Work (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Comprehensive Course Work"
  },
  {
    "filename": "Comprehensive Course Work (December 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Comprehensive/Comprehensive Course Work (December 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Comprehensive Course Work"
  },
  {
    "filename": "Comprehensive Course Work (May 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Comprehensive/Comprehensive Course Work (May 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Comprehensive Course Work"
  },
  {
    "filename": "Comprehensive Course Work (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Comprehensive/Comprehensive Course Work (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Comprehensive Course Work"
  },
  {
    "filename": "Comprehensive Course Work (May 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Comprehensive/Comprehensive Course Work (May 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Comprehensive Course Work"
  },
  {
    "filename": "Comprehensive Course Work (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Comprehensive/Comprehensive Course Work (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Comprehensive Course Work"
  },
  {
    "filename": "Management for Engineers (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Management for Engineers"
  },
  {
    "filename": "Management for Engineers (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Management for Engineers"
  },
  {
    "filename": "Management for Engineers (December 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (December 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Management for Engineers"
  },
  {
    "filename": "Management for Engineers Answer Key_1.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers Answer Key_1.pdf",
    "year": "Other",
    "subject": "Management for Engineers"
  },
  {
    "filename": "Management for Engineers (June 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (June 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Management for Engineers"
  },
  {
    "filename": "Management for Engineers (June 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (June 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Management for Engineers"
  },
  {
    "filename": "Management for Engineers (May 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (May 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Management for Engineers"
  },
  {
    "filename": "Management for Engineers (May 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (May 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Management for Engineers"
  },
  {
    "filename": "Management for Engineers (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Management for Engineers"
  },
  {
    "filename": "Management for Engineers (May 2025) Answer Key_1.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (May 2025) Answer Key_1.pdf",
    "year": "2025",
    "subject": "Management for Engineers"
  },
  {
    "filename": "Management for Engineers (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Management for Engineers"
  },
  {
    "filename": "Management for Engineers Answer Key.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers Answer Key.pdf",
    "year": "Other",
    "subject": "Management for Engineers"
  },
  {
    "filename": "Management for Engineers (July 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (July 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Management for Engineers"
  },
  {
    "filename": "Management for Engineers (December 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (December 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Management for Engineers"
  },
  {
    "filename": "Management for Engineers (May 2024) Answer Key_1.pdf",
    "rel_path": "Btech cources/S6/Management of Engineering/Management for Engineers (May 2024) Answer Key_1.pdf",
    "year": "2024",
    "subject": "Management for Engineers"
  },
  {
    "filename": "Linear Control Systems Answer Key_1.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems Answer Key_1.pdf",
    "year": "Other",
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
    "filename": "Linear Control Systems (April 2025) Answer Key_1.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems (April 2025) Answer Key_1.pdf",
    "year": "2025",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Linear Control Systems (June 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems (June 2022) Answer Key.pdf",
    "year": "2022",
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
    "year": "Other",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Linear Control Systems (June 2022) Answer Key_1.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems (June 2022) Answer Key_1.pdf",
    "year": "2022",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Linear Control Systems (2019) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems (2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Linear Control Systems (December 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems (December 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Linear Control Systems (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Electric Drives (December 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives (December 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Electric Drives"
  },
  {
    "filename": "Electric Drives (2013).pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives (2013).pdf",
    "year": "2013",
    "subject": "Electric Drives"
  },
  {
    "filename": "Electric Drives (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Electric Drives"
  },
  {
    "filename": "Electric Drives (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Electric Drives"
  },
  {
    "filename": "Electric Drives (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Electric Drives"
  },
  {
    "filename": "Electric Drives (May 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives (May 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Electric Drives"
  },
  {
    "filename": "Electric Drives (December 2023) Answer Key_1.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives (December 2023) Answer Key_1.pdf",
    "year": "2023",
    "subject": "Electric Drives"
  },
  {
    "filename": "Electric Drives (December 2022) Answer Key_1.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives (December 2022) Answer Key_1.pdf",
    "year": "2022",
    "subject": "Electric Drives"
  },
  {
    "filename": "Electric Drives (December 2022) Answer Key_2.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives (December 2022) Answer Key_2.pdf",
    "year": "2022",
    "subject": "Electric Drives"
  },
  {
    "filename": "Electric Drives (May 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives (May 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Electric Drives"
  },
  {
    "filename": "Electric Drives (November 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives (November 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Electric Drives"
  },
  {
    "filename": "Introduction to Mobile Computing (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Mobile Computing/Introduction to Mobile Computing (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Introduction to Mobile Computing"
  },
  {
    "filename": "Introduction to Mobile Computing (November 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Mobile Computing/Introduction to Mobile Computing (November 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Introduction to Mobile Computing"
  },
  {
    "filename": "Introduction to Mobile Computing (2019) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Mobile Computing/Introduction to Mobile Computing (2019) Answer Key.pdf",
    "year": "2019",
    "subject": "Introduction to Mobile Computing"
  },
  {
    "filename": "Introduction to Mobile Computing (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Mobile Computing/Introduction to Mobile Computing (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Introduction to Mobile Computing"
  },
  {
    "filename": "Industrial Safety Engineering QP.pdf",
    "rel_path": "Btech cources/S7/Industrial Safety Engineering/Industrial Safety Engineering QP.pdf",
    "year": "Other",
    "subject": "General"
  },
  {
    "filename": "Advanced Control Systems (December 2021) Answer Key_1.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems (December 2021) Answer Key_1.pdf",
    "year": "2021",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems (December 2021) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems (December 2021) Answer Key.pdf",
    "year": "2021",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems (May 2023) Answer Key_1.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems (May 2023) Answer Key_1.pdf",
    "year": "2023",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems (May 2023) Answer Key_3.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems (May 2023) Answer Key_3.pdf",
    "year": "2023",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems (May 2023) Answer Key_2.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems (May 2023) Answer Key_2.pdf",
    "year": "2023",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems (November 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems (November 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems (December 2022) Answer Key_4.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems (December 2022) Answer Key_4.pdf",
    "year": "2022",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems (December 2023) Answer Key_2.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems (December 2023) Answer Key_2.pdf",
    "year": "2023",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems (2014).pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems (2014).pdf",
    "year": "2014",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems (December 2023) Answer Key_1.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems (December 2023) Answer Key_1.pdf",
    "year": "2023",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems (May 2024) Answer Key_3.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems (May 2024) Answer Key_3.pdf",
    "year": "2024",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems (December 2022) Answer Key_3.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems (December 2022) Answer Key_3.pdf",
    "year": "2022",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems (December 2022) Answer Key_2.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems (December 2022) Answer Key_2.pdf",
    "year": "2022",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems (May 2024) Answer Key_2.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems (May 2024) Answer Key_2.pdf",
    "year": "2024",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems (December 2022) Answer Key_1.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems (December 2022) Answer Key_1.pdf",
    "year": "2022",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems (May 2024) Answer Key_1.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems (May 2024) Answer Key_1.pdf",
    "year": "2024",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems (April 2025) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems (April 2025) Answer Key.pdf",
    "year": "2025",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems (November 2024) Answer Key_1.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems (November 2024) Answer Key_1.pdf",
    "year": "2024",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems (December 2022) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems (December 2022) Answer Key.pdf",
    "year": "2022",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems (May 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems (May 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems (December 2023) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems (December 2023) Answer Key.pdf",
    "year": "2023",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems (April 2025) Answer Key_1.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems (April 2025) Answer Key_1.pdf",
    "year": "2025",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems Answer Key.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems Answer Key.pdf",
    "year": "Other",
    "subject": "Advanced Control Systems"
  },
  {
    "filename": "Advanced Control Systems (May 2024) Answer Key.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems (May 2024) Answer Key.pdf",
    "year": "2024",
    "subject": "Advanced Control Systems"
  }
];

const LOCAL_NOTE_FILES = [
  {
    "filename": "Synchronous and Induction Machines (May 2015).pdf",
    "rel_path": "Btech cources/S5/Synchronous /Synchronous and Induction Machines (May 2015).pdf",
    "format": "PDF Notes",
    "subject": "Synchronous and Induction Machines"
  },
  {
    "filename": "Synchronous and Induction Machines (May 2014).pdf",
    "rel_path": "Btech cources/S5/Synchronous /Synchronous and Induction Machines (May 2014).pdf",
    "format": "PDF Notes",
    "subject": "Synchronous and Induction Machines"
  },
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
    "filename": "Signals and Systems Notes_14.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems Notes_14.pdf",
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
    "filename": "Signals and Systems Notes_11.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems Notes_11.pdf",
    "format": "PDF Notes",
    "subject": "Signals and Systems"
  },
  {
    "filename": "Signals and Systems Notes_10.pdf",
    "rel_path": "Btech cources/S5/Signals/Signals and Systems Notes_10.pdf",
    "format": "PDF Notes",
    "subject": "Signals and Systems"
  },
  {
    "filename": "IMG_6088.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6088.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6103.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6103.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6117.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6117.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6116.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6116.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6102.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6102.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6089.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6089.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6128.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6128.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6114.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6114.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6100.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6100.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6101.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6101.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6115.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6115.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6129.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6129.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6111.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6111.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6105.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6105.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6139.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6139.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6138.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6138.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6104.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6104.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6110.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6110.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6099.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6099.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6106.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6106.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6112.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6112.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6113.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6113.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6107.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6107.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6098.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6098.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6148.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6148.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6160.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6160.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6174.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6174.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6175.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6175.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6161.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6161.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6149.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6149.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6163.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6163.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6162.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6162.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6176.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6176.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6172.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6172.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6166.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6166.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6167.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6167.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6173.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6173.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6165.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6165.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6171.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6171.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6159.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6159.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6158.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6158.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6170.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6170.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6164.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6164.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6169.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6169.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6141.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6141.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6155.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6155.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6154.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6154.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6140.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6140.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6168.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6168.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6156.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6156.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6142.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6142.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6143.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6143.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6157.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6157.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6153.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6153.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6147.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6147.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6146.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6146.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6152.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6152.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6144.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6144.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6150.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6150.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6151.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6151.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6145.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6145.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6095.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6095.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6122.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6122.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6136.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6136.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6137.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6137.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6123.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6123.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6094.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6094.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6096.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6096.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6109.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6109.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6135.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6135.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6121.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6121.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6120.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6120.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6134.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6134.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6108.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6108.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6097.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6097.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6087.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6087.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6093.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6093.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6130.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6130.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6124.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6124.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6118.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6118.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6119.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6119.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6125.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6125.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6131.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6131.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6092.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6092.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6086.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6086.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6090.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6090.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6127.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6127.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6133.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6133.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6132.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6132.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6126.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6126.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6085.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6085.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "IMG_6091.pdf",
    "rel_path": "Btech cources/S5/Sim lab manual /IMG_6091.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "Microprocessors and Microcontrollers - Module 2.pdf",
    "rel_path": "Btech cources/S5/Microprocessor /Microprocessors and Microcontrollers - Module 2.pdf",
    "format": "PDF Notes",
    "subject": "Microprocessors and Microcontrollers"
  },
  {
    "filename": "Microprocessors and Microcontrollers - Module 1.pdf",
    "rel_path": "Btech cources/S5/Microprocessor /Microprocessors and Microcontrollers - Module 1.pdf",
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
    "filename": "Power Systems I.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I.pdf",
    "format": "PDF Notes",
    "subject": "Power Systems I"
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
    "format": "Syllabus",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I (May 2005).pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (May 2005).pdf",
    "format": "PDF Notes",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Systems I (December 2020) Lab Manual.pdf",
    "rel_path": "Btech cources/S5/Power system/Power Systems I (December 2020) Lab Manual.pdf",
    "format": "Lab Manual",
    "subject": "Power Systems I"
  },
  {
    "filename": "Synchronous and Induction Machines_1.pdf",
    "rel_path": "Btech cources/S5/Synchronous/Synchronous and Induction Machines_1.pdf",
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
    "filename": "Disaster Management - Dm Question Bank 2.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management - Dm Question Bank 2.pdf",
    "format": "PDF Notes",
    "subject": "Disaster Management"
  },
  {
    "filename": "DM M1 Ktunotes.in.pdf",
    "rel_path": "Btech cources/S5/DM/DM M1 Ktunotes.in.pdf",
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
    "filename": "Disaster Management Notes_9.pdf",
    "rel_path": "Btech cources/S5/DM/Disaster Management Notes_9.pdf",
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
    "filename": "Industrial Economics & Foreign Trade Notes_31.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade Notes_31.pdf",
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
    "filename": "Industrial Economics & Foreign Trade Notes_37.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade Notes_37.pdf",
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
    "filename": "Industrial Economics & Foreign Trade - Industrial Economics Full Notes.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade - Industrial Economics Full Notes.pdf",
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
    "filename": "Industrial Economics & Foreign Trade - Ieft-Important Essay Questions.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade - Ieft-Important Essay Questions.pdf",
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
    "filename": "Industrial Economics & Foreign Trade Notes_17.pdf",
    "rel_path": "Btech cources/S5/Economics/Industrial Economics & Foreign Trade Notes_17.pdf",
    "format": "PDF Notes",
    "subject": "Industrial Economics & Foreign Trade"
  },
  {
    "filename": "Analog Electronics Notes_1.pdf",
    "rel_path": "Btech cources/S3/Analog electronics /Analog Electronics Notes_1.pdf",
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
    "filename": "Analog Electronics Notes_2.pdf",
    "rel_path": "Btech cources/S3/Analog electronics /Analog Electronics Notes_2.pdf",
    "format": "PDF Notes",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Analog Electronics Notes.pdf",
    "rel_path": "Btech cources/S3/Analog electronics /Analog Electronics Notes.pdf",
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
    "filename": "Circuits and Networks Notes_11.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks Notes_11.pdf",
    "format": "PDF Notes",
    "subject": "Circuits and Networks"
  },
  {
    "filename": "Circuits and Networks Notes_10.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks Notes_10.pdf",
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
    "filename": "Circuits and Networks Notes_9.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks Notes_9.pdf",
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
    "filename": "Circuits and Networks, Solved Notes.pdf",
    "rel_path": "Btech cources/S3/CAN/Circuits and Networks, Solved Notes.pdf",
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
    "filename": "Analog Electronics.pdf",
    "rel_path": "Btech cources/S3/Analog electronics/Analog Electronics.pdf",
    "format": "PDF Notes",
    "subject": "Analog Electronics"
  },
  {
    "filename": "Measurements and Instrumentation_1.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation_1.pdf",
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
    "filename": "Measurements and Instrumentation Notes_12.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation Notes_12.pdf",
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
    "filename": "Measurements and Instrumentation Notes_10.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation Notes_10.pdf",
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
    "filename": "Measurements and Instrumentation Notes_9.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation Notes_9.pdf",
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
    "filename": "Measurements and Instrumentation Notes_16.pdf",
    "rel_path": "Btech cources/S3/Mi/Measurements and Instrumentation Notes_16.pdf",
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
    "filename": "Partial Differential Equations & Complex Analysis Notes_9.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis Notes_9.pdf",
    "format": "PDF Notes",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis, Solved Notes.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis, Solved Notes.pdf",
    "format": "PDF Notes",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis Notes.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis Notes.pdf",
    "format": "PDF Notes",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis Notes_8.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis Notes_8.pdf",
    "format": "PDF Notes",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis, Solved Notes_1.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis, Solved Notes_1.pdf",
    "format": "PDF Notes",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis Notes_16.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis Notes_16.pdf",
    "format": "PDF Notes",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Dec 2023.pdf",
    "rel_path": "Btech cources/S3/Maths/Dec 2023.pdf",
    "format": "PDF Notes",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis Notes_15.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis Notes_15.pdf",
    "format": "PDF Notes",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis Notes_14.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis Notes_14.pdf",
    "format": "PDF Notes",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis Notes_10.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis Notes_10.pdf",
    "format": "PDF Notes",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis Notes_11.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis Notes_11.pdf",
    "format": "PDF Notes",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis Notes_13.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis Notes_13.pdf",
    "format": "PDF Notes",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Partial Differential Equations & Complex Analysis Notes_12.pdf",
    "rel_path": "Btech cources/S3/Maths/Partial Differential Equations & Complex Analysis Notes_12.pdf",
    "format": "PDF Notes",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Dec 2023 Compressed.pdf",
    "rel_path": "Btech cources/S3/Maths/Dec 2023 Compressed.pdf",
    "format": "PDF Notes",
    "subject": "Partial Differential Equations and Complex Analysis"
  },
  {
    "filename": "Probability, Random Processes & Numerical Methods Notes.pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes & Numerical Methods Notes.pdf",
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
    "filename": "Probability, Random Processes and Numerical Methods - Module 1.pdf",
    "rel_path": "Btech cources/S4/S4 maths/Probability, Random Processes and Numerical Methods - Module 1.pdf",
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
    "filename": "Digital Electronics (January 2022) Lab Manual.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (January 2022) Lab Manual.pdf",
    "format": "Lab Manual",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Digital Electronics Lab Manual.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics Lab Manual.pdf",
    "format": "Lab Manual",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Digital Electronics (February 2025) Lab Manual.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics (February 2025) Lab Manual.pdf",
    "format": "Lab Manual",
    "subject": "Digital Electronics"
  },
  {
    "filename": "Digital Electronics Lab Manual_1.pdf",
    "rel_path": "Btech cources/S4/Digital Electronics/Digital Electronics Lab Manual_1.pdf",
    "format": "Lab Manual",
    "subject": "Digital Electronics"
  },
  {
    "filename": "DC Machines and Transformers - Transformer On No Load.pdf",
    "rel_path": "Btech cources/S4/DCMT /Mod5/DC Machines and Transformers - Transformer On No Load.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
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
    "filename": "DC Machines and Transformers - Armature Reaction.pdf",
    "rel_path": "Btech cources/S4/DCMT /Mod2/DC Machines and Transformers - Armature Reaction.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers - Wave Winding Diagram.pdf",
    "rel_path": "Btech cources/S4/DCMT /Mod1/DC Machines and Transformers - Wave Winding Diagram.pdf",
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
    "filename": "Electromagnetic Theory - Module 5.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory - Module 5.pdf",
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
    "filename": "Electromagnetic Theory - Doc-20230313-Wa0000_.pdf",
    "rel_path": "Btech cources/S4/EMT note/Electromagnetic Theory - Doc-20230313-Wa0000_.pdf",
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
    "filename": "mod-5.pdf",
    "rel_path": "Btech cources/S4/EMT note/mod-5.pdf",
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
    "filename": "Electrical Machines Lab I.pdf",
    "rel_path": "Btech cources/S4/DCMT/Electrical Machines Lab I.pdf",
    "format": "Lab Manual",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers_1.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers_1.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_7.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_7.pdf",
    "format": "Syllabus",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_6.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_6.pdf",
    "format": "Syllabus",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers_2.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers_2.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_4.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_4.pdf",
    "format": "Syllabus",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_5.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_5.pdf",
    "format": "Syllabus",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers_3.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers_3.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_13.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_13.pdf",
    "format": "Syllabus",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers_7.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers_7.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_1.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_1.pdf",
    "format": "Syllabus",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers_6.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers_6.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_12.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_12.pdf",
    "format": "Syllabus",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_10.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_10.pdf",
    "format": "Syllabus",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Lab Manual.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Lab Manual.pdf",
    "format": "Lab Manual",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers_4.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers_4.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_2.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_2.pdf",
    "format": "Syllabus",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_3.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_3.pdf",
    "format": "Syllabus",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers_5.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers_5.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_11.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_11.pdf",
    "format": "Syllabus",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers_8.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers_8.pdf",
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
    "filename": "DC Machines and Transformers_9.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers_9.pdf",
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
    "filename": "DC Machines and Transformers_13.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers_13.pdf",
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
    "filename": "DC Machines and Transformers_12.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers_12.pdf",
    "format": "PDF Notes",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_8.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_8.pdf",
    "format": "Syllabus",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus_9.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus_9.pdf",
    "format": "Syllabus",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "DC Machines and Transformers Syllabus.pdf",
    "rel_path": "Btech cources/S4/DCMT/DC Machines and Transformers Syllabus.pdf",
    "format": "Syllabus",
    "subject": "DC Machines and Transformers"
  },
  {
    "filename": "Constitution of India Syllabus.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India Syllabus.pdf",
    "format": "Syllabus",
    "subject": "Constitution of India"
  },
  {
    "filename": "Constitution of India.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India.pdf",
    "format": "PDF Notes",
    "subject": "Constitution of India"
  },
  {
    "filename": "Constitution of India Syllabus_2.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India Syllabus_2.pdf",
    "format": "Syllabus",
    "subject": "Constitution of India"
  },
  {
    "filename": "Constitution of India Syllabus_1.pdf",
    "rel_path": "Btech cources/S4/Constitution of India/Constitution of India Syllabus_1.pdf",
    "format": "Syllabus",
    "subject": "Constitution of India"
  },
  {
    "filename": "Design and Engineering Lab Manual_2.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering Lab Manual_2.pdf",
    "format": "Lab Manual",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering Lab Manual_1.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering Lab Manual_1.pdf",
    "format": "Lab Manual",
    "subject": "Design and Engineering"
  },
  {
    "filename": "Design and Engineering Lab Manual.pdf",
    "rel_path": "Btech cources/S4/Design and Engineering/Design and Engineering Lab Manual.pdf",
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
    "filename": "Programming in C Syllabus.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C Syllabus.pdf",
    "format": "Syllabus",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C Syllabus_3.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C Syllabus_3.pdf",
    "format": "Syllabus",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C Syllabus_2.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C Syllabus_2.pdf",
    "format": "Syllabus",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C Lab Manual.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C Lab Manual.pdf",
    "format": "Lab Manual",
    "subject": "Programming in C"
  },
  {
    "filename": "Programming in C Syllabus_1.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/Programming in C Syllabus_1.pdf",
    "format": "Syllabus",
    "subject": "Programming in C"
  },
  {
    "filename": "DocScanner Aug 2, 2023 9-16 AM.pdf",
    "rel_path": "Btech cources/College S1 S2/C prog/DocScanner Aug 2, 2023 9-16 AM.pdf",
    "format": "PDF Notes",
    "subject": "Programming in C"
  },
  {
    "filename": "Maths Improvement-jan 2021.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Maths Improvement-jan 2021.pdf",
    "format": "PDF Notes",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra & Calculus, Solved (December 2019).pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra & Calculus, Solved (December 2019).pdf",
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
    "filename": "Linear Algebra & Calculus, Solved (January 2021).pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra & Calculus, Solved (January 2021).pdf",
    "format": "PDF Notes",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "CYT100 Univ Qn Ans Dec 2021 pdfn_230214_192018.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/CYT100 Univ Qn Ans Dec 2021 pdfn_230214_192018.pdf",
    "format": "PDF Notes",
    "subject": "Linear Algebra and Calculus"
  },
  {
    "filename": "Linear Algebra & Calculus (December 2019).pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra & Calculus (December 2019).pdf",
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
    "filename": "Linear Algebra & Calculus, Solved (December 2021).pdf",
    "rel_path": "Btech cources/College S1 S2/S1 maths/Linear Algebra & Calculus, Solved (December 2021).pdf",
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
    "filename": "Basics of Electrical & Electronics Engineering.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering.pdf",
    "format": "PDF Notes",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Basics of Electrical & Electronics Engg Notes_2.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engg Notes_2.pdf",
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
    "filename": "Basics of Electrical & Electronics Engineering - Module 4.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering - Module 4.pdf",
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
    "filename": "Basics of Electrical & Electronics Engineering_1.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering_1.pdf",
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
    "filename": "Basics of Electrical & Electronics Engineering - Module 2.pdf",
    "rel_path": "Btech cources/College S1 S2/S1 BEEE/Basics of Electrical & Electronics Engineering - Module 2.pdf",
    "format": "PDF Notes",
    "subject": "Basics of Electrical & Electronics Engineering"
  },
  {
    "filename": "Vector Calculus, Differential Equations & Transforms Notes_9.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations & Transforms Notes_9.pdf",
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
    "filename": "Vector Calculus, Differential Equations & Transforms Notes.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations & Transforms Notes.pdf",
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
    "filename": "Vector Calculus, Differential Equations & Transforms Notes_1.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Vector Calculus, Differential Equations & Transforms Notes_1.pdf",
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
    "filename": "Vector Calculus, Differential Equations and Transforms - Divergence,Curl,Conservative Field, Line Integrals.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Maths/Vector Calculus, Differential Equations and Transforms - Divergence,Curl,Conservative Field, Line Integrals.pdf",
    "format": "PDF Notes",
    "subject": "Vector Calculus, Differential Equations and Transforms"
  },
  {
    "filename": "Abominable.2019.720p.10bit.BluRay.6CH.x265.pdf",
    "rel_path": "Btech cources/College S1 S2/S2 maths note/Maths/Abominable.2019.720p.10bit.BluRay.6CH.x265.pdf",
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
    "filename": "btech-ee-6-sem-power-systems-analysis-ee306-jul-2021.pdf",
    "rel_path": "Btech cources/S6/Power system 2/btech-ee-6-sem-power-systems-analysis-ee306-jul-2021.pdf",
    "format": "PDF Notes",
    "subject": "Power Systems I"
  },
  {
    "filename": "Power Electronics Syllabus.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics Syllabus.pdf",
    "format": "Syllabus",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics.pdf",
    "format": "PDF Notes",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics_4.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics_4.pdf",
    "format": "PDF Notes",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics_1.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics_1.pdf",
    "format": "PDF Notes",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics_2.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics_2.pdf",
    "format": "PDF Notes",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics_3.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics_3.pdf",
    "format": "PDF Notes",
    "subject": "Power Electronics"
  },
  {
    "filename": "Power Electronics (May 2022) Lab Manual.pdf",
    "rel_path": "Btech cources/S6/Power Electronics/Power Electronics (May 2022) Lab Manual.pdf",
    "format": "Lab Manual",
    "subject": "Power Electronics"
  },
  {
    "filename": "Linear Control Systems Notes_16.pdf",
    "rel_path": "Btech cources/S6/Linear control system /Linear Control Systems Notes_16.pdf",
    "format": "PDF Notes",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Linear Control Systems Notes_14.pdf",
    "rel_path": "Btech cources/S6/Linear control system /Linear Control Systems Notes_14.pdf",
    "format": "PDF Notes",
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
    "filename": "Linear Control Systems_2.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems_2.pdf",
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
    "filename": "Linear Control Systems Lab Manual.pdf",
    "rel_path": "Btech cources/S6/Linear control system/Linear Control Systems Lab Manual.pdf",
    "format": "Lab Manual",
    "subject": "Linear Control Systems"
  },
  {
    "filename": "Electric Drives Notes_10.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives Notes_10.pdf",
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
    "filename": "Electric Drives Notes_1.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives Notes_1.pdf",
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
    "filename": "Electric Drives Notes_6.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/Electric Drives Notes_6.pdf",
    "format": "PDF Notes",
    "subject": "Electric Drives"
  },
  {
    "filename": "IMG_7941.pdf",
    "rel_path": "Btech cources/S7/Electric Drives/IMG_7941.pdf",
    "format": "PDF Notes",
    "subject": "Electric Drives"
  },
  {
    "filename": "Mobile Comp-M5-Ktunotes.in.pdf",
    "rel_path": "Btech cources/S7/Mobile Computing/Mobile Comp-M5-Ktunotes.in.pdf",
    "format": "PDF Notes",
    "subject": "Introduction to Mobile Computing"
  },
  {
    "filename": "Introduction to Mobile Computing - Module 5.pdf",
    "rel_path": "Btech cources/S7/Mobile Computing/Introduction to Mobile Computing - Module 5.pdf",
    "format": "PDF Notes",
    "subject": "Introduction to Mobile Computing"
  },
  {
    "filename": "Introduction to Mobile Computing - Module 4.pdf",
    "rel_path": "Btech cources/S7/Mobile Computing/Introduction to Mobile Computing - Module 4.pdf",
    "format": "PDF Notes",
    "subject": "Introduction to Mobile Computing"
  },
  {
    "filename": "Mobile Comp-M4-Ktunotes.in.pdf",
    "rel_path": "Btech cources/S7/Mobile Computing/Mobile Comp-M4-Ktunotes.in.pdf",
    "format": "PDF Notes",
    "subject": "Introduction to Mobile Computing"
  },
  {
    "filename": "Introduction to Mobile Computing - Module 3.pdf",
    "rel_path": "Btech cources/S7/Mobile Computing/Introduction to Mobile Computing - Module 3.pdf",
    "format": "PDF Notes",
    "subject": "Introduction to Mobile Computing"
  },
  {
    "filename": "Introduction to Mobile Computing - Module 2.pdf",
    "rel_path": "Btech cources/S7/Mobile Computing/Introduction to Mobile Computing - Module 2.pdf",
    "format": "PDF Notes",
    "subject": "Introduction to Mobile Computing"
  },
  {
    "filename": "Industrial Safety Engineering - Mcn401-A-8.pdf",
    "rel_path": "Btech cources/S7/Industrial Safety Engineering/Industrial Safety Engineering - Mcn401-A-8.pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "Industrial Safety Engineering (May 2023).pdf",
    "rel_path": "Btech cources/S7/Industrial Safety Engineering/Question Papers/Industrial Safety Engineering (May 2023).pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "Industrial Safety Engineering (May 2024).pdf",
    "rel_path": "Btech cources/S7/Industrial Safety Engineering/Question Papers/Industrial Safety Engineering (May 2024).pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "Industrial Safety Engineering (December 2023).pdf",
    "rel_path": "Btech cources/S7/Industrial Safety Engineering/Question Papers/Industrial Safety Engineering (December 2023).pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "Industrial Safety Engineering (November 2024).pdf",
    "rel_path": "Btech cources/S7/Industrial Safety Engineering/Question Papers/Industrial Safety Engineering (November 2024).pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "Industrial Safety Engineering (December 2022).pdf",
    "rel_path": "Btech cources/S7/Industrial Safety Engineering/Question Papers/Industrial Safety Engineering (December 2022).pdf",
    "format": "PDF Notes",
    "subject": "General"
  },
  {
    "filename": "Advanced Control Systems Notes.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems Notes.pdf",
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
    "filename": "Advanced Control Systems Syllabus.pdf",
    "rel_path": "Btech cources/S7/Advanced Control Systems/Advanced Control Systems Syllabus.pdf",
    "format": "Syllabus",
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
  examDate: '2026-11-15',
  pomodoroSessions: 0,
  pomodoroSessionsDate: '',
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

// ========== Study Planner ==========

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
}

// ========== Render All ==========

/** Re-render entire UI */
function renderAll() {
  populateSubjectSelects();
  renderDashboard();
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
  initPomodoro();
  updateQuotes();
  renderAll();
  initBioChamber();

  // Live countdown update every second
  setInterval(updateExamCountdown, 1000);
}

document.addEventListener('DOMContentLoaded', init);
