import React from 'react'
import { Link } from 'gatsby'
//
import { Layout } from '../components/common'
import { cn } from '../utils/helpers'
//
import styles from '../styles/lesson/lesson.module.scss'
import buttonstyles from '../styles/common/_buttons.scss'

const Lesson = () => (
    <Layout>
        <div className={`container-fluid ${styles.lesson_header}`}>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1 className={styles.lesson_header_title}>Rock Paper Scissors Activity</h1>
                        <p className={styles.lesson_header_description}>Make a cool Rock Paper Scissors game in this activity!</p>
                        <div className={`${styles.lesson_buttons} hidden-print`}>
                            <ul>
                                <li><div className={styles.tag}>Get started</div></li>
                                <li><div className={styles.tag}>MakeCode</div></li>
                                <li><div className={styles.tag}>Random</div></li>
                            </ul>
                            <a href="#" onclick="window.print();" className={`btn ${buttonstyles.btnDefault} print`}>
                                <img className="inline-icon -left" src="/images/icons/icon-print.png" /> Print lesson
                            </a>
                        </div>
                        <ul className={styles.lesson_meta}>
                            <li><img src="/images/icons/icon-age.png" />Ages 8+</li>
                            <li><img src="/images/icons/icon-clock.png" />30 mins</li>
                            <li><img src="/images/icons/icon-jsb.png" />MakeCode Editor</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">Lesson</h1>
                <section className="content-body">

                </section>
            </article>
        </div>
    </Layout>
)

export default Lesson
