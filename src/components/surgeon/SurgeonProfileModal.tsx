"use client";

import { useEffect } from "react";
import styles from "./SurgeonProfileModal.module.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SurgeonProfileModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()} data-lenis-prevent>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className={styles.content}>
          <h2 className={styles.title}>Dr. A. Raghuram</h2>
          <p className={styles.subtitle}>Professional Biography & Full CV</p>

          <div className={styles.section}>
            <h3>Professional Biography</h3>
            <ul className={styles.list}>
              <li>Completed his MBBS at Madras Medical College from 1985 to 1990.</li>
              <li>Successfully cleared the United States Medical Licensing Examination (USMLE) in 1994.</li>
              <li>Pursued his Diploma in Ophthalmology (D.O.) at the Regional Institute of Ophthalmology and Government Ophthalmic Hospital (RIO-GOH), Chennai (1996 - 1998).</li>
              <li>Completed his DNB in Ophthalmology at Aravind Eye Hospital, Madurai (1998 - 2000).</li>
              <li>Joined Aravind Eye Hospital, Coimbatore, as a Medical Officer in the Department of Vitreo-Retina in 2000.</li>
              <li>Cleared his FRCS (GLASG) in 2001.</li>
              <li>Became a consultant in the Department of Vitreo-Retina in 2003 at Aravind Eye Hospital, Coimbatore.</li>
              <li>Visited the United Kingdom for observational training in 2003.</li>
              <li>Travelled to the United States for observation and advanced training at Johns Hopkins Hospital, Baltimore and macular consultants in New York under Professor Dr. Richard Spade and Professor Dr. Yanuzi (2005).</li>
              <li>Started his freelancing practice in Pollachi, Coimbatore, Erode, and Salem in 2008. Also joined PSG Hospital, Coimbatore, as a Visiting Consultant.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Surgical Experience</h3>
            <p>Dr. A. Raghuram has extensive experience in ophthalmic surgery. He has performed:</p>
            <ul className={styles.list}>
              <li><strong>30,000+</strong> cataract surgeries</li>
              <li><strong>10,000+</strong> anterior-segment surgeries</li>
              <li><strong>30,000+</strong> Vitreo Retinal procedures, including laser photocoagulation, intravitreal injections, and vitreoretinal surgeries.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Educational Qualifications</h3>
            <ul className={styles.timeline}>
              <li><strong>1990</strong> <span>MBBS, Madras Medical College, Madras University, India.</span></li>
              <li><strong>1998</strong> <span>Diploma in Ophthalmology (DO), Regional Institute of Ophthalmology & Government Ophthalmic Hospital, Chennai.</span></li>
              <li><strong>2000</strong> <span>Diplomate of National Board (Dip.N.B.), Aravind Eye Hospital, Madurai.</span></li>
              <li><strong>2003</strong> <span>FRCS, Royal College of Physicians and Surgeons, Glasgow, U.K.</span></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Work Experience</h3>
            <ul className={styles.timeline}>
              <li><strong>2008 – Present</strong> <span>Chief Medical Officer – Shri Andavar Eye Care and Retina Centre, Pollachi.</span></li>
              <li><strong>2003 – 2008</strong> <span>Consultant Vitreo Retinal Surgeon and Assistant Professor of Ophthalmology, Aravind Eye Hospital, Coimbatore.</span></li>
              <li><strong>2000 – 2003</strong> <span>Medical Officer, Department of Retina, Aravind Eye Hospital, Coimbatore.</span></li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Memberships</h3>
            <ul className={styles.list}>
              <li>Tamilnadu Ophthalmic Association (TNOA) (Life Member)</li>
              <li>Vitreo Retinal Society of India (VRSI) (Life Member)</li>
              <li>All India Ophthalmic Society (AIOS) (Life Member)</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Publications</h3>
            <ol className={styles.numberedList}>
              <li>Raghuram A, Saravanan VR, Narendren V. Intracameral injection of bevacizumab (Avastin) to treat anterior chamber neovascular membrane in a painful blind eye. Indian J Ophthalmol 2007;55;460</li>
              <li>"Diabetic Retinopathy among self reported diabetics in south India – a population based assessment" BJO Vol : 86(9)2002 Sep p1014 – 1018. Narendran V, John RK, Raghuram A, Ravindran R.D., Nimalan P.K., Thulasiraj R.D.</li>
              <li>Fulminate retinopathy of prematurity – Clinical characteristics and laser outcome. Shah Parag K, Narendran V, Saravanan VR, Raghuram A, Chattopadhyay Abhijit, Kashyap Maithreyi, Morris Rodney J, Vijay N, Raghuraman V, Shah Virna. Indian Journal of Ophthalmology, Year 2005, Volume 53, Issue 4</li>
              <li>Screening for retinopathy of prematurity – a comparison between binocular indirect ophthalmology and Retcam 120. Shah Parag K, Narendran V, Saravanan VR, Raghuram A, Chattopadhyay Abhijit, Kashyap Maithreyi. Indian Journal of Ophthalmology, Year 2006, Volume 54, Issue 1</li>
              <li>Fulminate type of retinopathy of prematurity. Shah Parag K, Narendran V, Saravanan VR, Raghuram A, Chattopadhyay Abhijit, Kashyap Maithreyi, Devraj Sasikumar. Indian Journal of Ophathalmology, Year 2004, Volume 52, Issue 4</li>
              <li>Intravitreal bevacizumab (Avastin) for post laser anterior segment ischemia in aggressive posterior retinopathy of prematurity. Shah Parag K, Narendran V, Tawansy Khaled A, Raghuram A, Narendran Kalpana. Indian Journal of Ophthalmology, Year 2007, Volume 55, Issue 1</li>
              <li>Manikandan P, Bhaskar M, Manohar Babu B, Raghuram A, Narendran V. Outbreak of Ocular Toxoplamosis in Coimbatore, India. Indian Journal Ophthalmology. 2006;54;129 – 131</li>
            </ol>
          </div>

          <div className={styles.section}>
            <h3>Work in Rural Areas to Prevent Blindness</h3>
            <p>
              Dr. A. Raghuram runs Shri Andavar Eye Care and Retina Centre in Pollachi, situated in the rural area of Coimbatore District.
            </p>
            <p>
              The hospital regularly conducts free eye camps in the remote rural areas of Coimbatore district under the Tamilnadu Chief Minister’s Comprehensive Health Insurance Scheme (CMCHIS) & Pradhan Mantri Ayushman Bharath Arogya Yojana scheme (AB-PMJAY).
            </p>
            <p>
              In these free eye camps, people are screened for Diabetic Retinopathy, Glaucoma, refractive errors, and cataract, picking up early cases and providing timely treatment.
            </p>
            <p>
              For these efforts, the hospital was awarded a Certificate of Appreciation for quality adherence under the CMCHIS and AB-PMJAY schemes at the 2021 Republic Day function in Coimbatore by the District Collector.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
