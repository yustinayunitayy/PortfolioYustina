import { motion } from "framer-motion";

const experiences = [
  {
    type: "Work",
    role: "Software Engineer",
    company: "PT Teknologi Nusantara",
    period: "2023 - Sekarang",
    desc: "Membangun aplikasi web menggunakan React, Node.js, dan PostgreSQL. Berfokus pada optimalisasi performa dan keamanan.",
  },
  {
    type: "Work",
    role: "IT Intern",
    company: "PT Inovasi Digital",
    period: "2021 - 2022",
    desc: "Membantu tim IT dalam deployment aplikasi internal dan maintenance server.",
  },
  {
    type: "Organization",
    role: "Staff Divisi IT",
    company: "Himpunan Mahasiswa TI",
    period: "2019 - 2021",
    desc: "Mengelola sistem informasi organisasi, membuat website event, dan support teknis.",
  },
  {
    type: "Organization",
    role: "Event Coordinator",
    company: "Tech Community",
    period: "2020",
    desc: "Mengorganisir workshop teknologi untuk mahasiswa dan profesional.",
  },
];

export default function Test() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">My Experience</h2>

      <div className="relative border-l border-gray-300 dark:border-gray-600">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-10 ml-6"
          >
            <span
              className={`absolute flex items-center justify-center w-6 h-6 rounded-full 
              ${exp.type === "Work" ? "bg-blue-500" : "bg-green-500"} 
              -left-3 ring-8 ring-white dark:ring-gray-900`}
            ></span>

            <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold">
                {exp.role} @ {exp.company}
              </h3>
              <p className="text-sm text-gray-500">{exp.period}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {exp.desc}
              </p>
              <span
                className="mt-2 inline-block px-2 py-1 text-xs rounded-md 
                bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
              >
                {exp.type}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
