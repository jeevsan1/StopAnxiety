import Head from 'next/head'
import Styles from '../styles/Layout.module.css'
export default function Home() {
  return (
    <>
    <head>
        
      <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"></link>
    </head>
    <div>
      <div className={Styles.welcome}>  <h1 className={Styles.welcome_text}>Welcome to your journey out of Anxiety.</h1></div>
      <div className={Styles.learn_more}>
      <h2 className={Styles.what}>
        What is Anxiety?<br />
        <p>Anxiety is a feeling of fear, dread, and uneasiness.<br /> It might cause you to sweat, feel restless and tense, and have a rapid heartbeat. It can be a normal reaction to stress.<br /> For example, you might feel anxious when faced with a difficult problem at work, before taking a test, or before making an important decision. It can help you to cope.<br /> The anxiety may give you a boost of energy or help you focus.<br /> But for people with anxiety disorders, the fear is not temporary and can be overwhelming.</p>
      </h2>
      <div className={Styles.img}><img src="anxiety-chart.png" alt="Anxiety Chart" className={Styles.chart}></img> </div>
      </div>   
      <div className={Styles.truth}>
        <h1><a href = "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2940247/#:~:text=Results,%25%20CI%3A%201.40–2.08)" target="_blank" rel="noopener noreferrer">Anxiety Kills: 70% of Suicide cases are related to an Anxiety Disorder</a> </h1>
      </div>
      <div className={Styles.theabove}><h3>The text above is a link</h3></div>
    </div>
    </>
  )
}
