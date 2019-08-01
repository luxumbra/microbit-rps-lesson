import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
//
import { Layout } from '../components/common'
import Introduction from '../components/common/Activity/Introduction'
import LessonBox from '../components/common/LessonBox/LessonBox'
import { cn } from '../utils/helpers'
import { useLessonMetaData } from '../hooks/useLessonMetaData'
//
import styles from '../styles/Lesson/Lesson.module.scss'
import buttonstyles from '../styles/common/_buttons.scss'

const Lesson = () => {
    const {
        title,
        subtitle,
        age,
        durationInMinutes,
        programmingLanguage,
        introduction,
        activity,
    } = useLessonMetaData()

    return (
        <Layout>
            <div className={`container-fluid ${styles.lesson_header}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1 className={styles.lessonHeaderTitle}>{title}</h1>
                            <p className={styles.lessonHeaderDescription}>{subtitle}</p>
                            <div className={`${styles.lessonButtons} hidden-print`}>
                                <ul>
                                    <li><div className={styles.tag}>Get started</div></li>
                                    <li><div className={styles.tag}>MakeCode</div></li>
                                    <li><div className={styles.tag}>Random</div></li>
                                </ul>
                                <a href="#" className={`btn ${buttonstyles.btnDefault} print`}>
                                    <img className="inline-icon -left" src="/images/icons/icon-print.png" /> Print lesson
                                </a>
                            </div>
                            <ul className={styles.lessonMeta}>
                                <li><img src="/images/icons/icon-age.png" />{`Ages ${age}`}</li>
                                <li><img src="/images/icons/icon-clock.png" />{`${durationInMinutes} mins`}</li>
                                <li><img src="/images/icons/icon-jsb.png" />MakeCode Editor</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <article className="content" style={{ textAlign: `center` }}>
                    <section className="content-body">
                        <Introduction />
                        <LessonBox activity={activity} />
                    </section>
                </article>
            </div>
        </Layout>

    )
}

export default Lesson
