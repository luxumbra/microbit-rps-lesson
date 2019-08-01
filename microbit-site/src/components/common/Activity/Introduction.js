import React from 'react'
import { Link } from 'gatsby'
//
import { useLessonMetaData } from '../../../hooks/useLessonMetaData'
import { cn } from '../../../utils/helpers'
//
import styles from '../../../styles/LessonBox.module.scss'
import '../../../styles/common/_buttons.scss'


const Introduction = () => {

  const { introduction } = useLessonMetaData()

  return (

    <div className={styles.root}>
      <h2>Introduction</h2>
      <p>{introduction}</p>
    </div>

  )
}

export default Introduction
