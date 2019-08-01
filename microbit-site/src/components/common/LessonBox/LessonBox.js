import React from 'react'
import { Link } from 'gatsby'
//
import { useLessonStepsData } from '../../../hooks/useLessonStepsData'
import { cn } from '../../../utils/helpers'
//
import styles from '../../../styles/LessonBox.module.scss'
import '../../../styles/common/_buttons.scss'


class LessonBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  nextStep = () => {
    const { currentStep } = this.state
    this.setState({
      currentStep: +currentStep + 1
    })
  }

  prevStep = () => {
    const { currentStep } = this.state
    this.setState({
      currentStep: +currentStep - 1
    })
  }

  handleChange = (event) => {
    console.log('Target: ', event.target.value)
    const selectedStep = event.target.value
    this.setState({
      currentStep: +selectedStep
    })
    console.log('Current: ', this.state.currentStep);
  }


  doSteps = () => {
    const { currentStep } = this.state
    const { activity } = this.props

    switch(currentStep) {
      case 1:
        return (
          <div className={cn(styles.step, styles.current, 'js-step')} data-step={currentStep}>
            <h3>Step {`${currentStep}`}</h3>
            <p>{activity.steps[currentStep].text}</p>
            <div className="block_wrapper">{activity.steps[currentStep].javaScriptBlocks}</div>
          </div>
        )
      case 2:
        return (
          <div className={cn(styles.step, styles.current, 'js-step')} data-step={currentStep}>
            <h3>Step {`${currentStep}`}</h3>
            <p>{activity.steps[currentStep].text}</p>
            <div className="block_wrapper">{activity.steps[currentStep].javaScriptBlocks}</div>
          </div>
        )
      case 3:
        return (
          <div className={cn(styles.step, styles.current, 'js-step')} data-step={currentStep}>
            <h3>Step {`${currentStep}`}</h3>
            <p>{activity.steps[currentStep].text}</p>
            <div className="block_wrapper">{activity.steps[currentStep].javaScriptBlocks}</div>
          </div>
        )
      case 4:
        return (
          <div className={cn(styles.step, styles.current, 'js-step')} data-step={currentStep}>
            <h3>Step {`${currentStep}`}</h3>
            <p>{activity.steps[currentStep].text}</p>
            <div className="block_wrapper">{activity.steps[currentStep].javaScriptBlocks}</div>
          </div>
        )
      case 5:
        return (
          <div className={cn(styles.step, styles.current, 'js-step')} data-step={currentStep}>
            <h3>Step {`${currentStep}`}</h3>
            <p>{activity.steps[currentStep].text}</p>
            <div className="block_wrapper">{activity.steps[currentStep].javaScriptBlocks}</div>
          </div>
        )
      case 6:
        return (
          <div className={cn(styles.step, styles.current, 'js-step')} data-step={currentStep}>
            <h3>Step {`${currentStep}`}</h3>
            <p>{activity.steps[currentStep].text}</p>
            <div className="block_wrapper">{activity.steps[currentStep].javaScriptBlocks}</div>
          </div>
        )
      case 7:
        return (
          <div className={cn(styles.step, styles.current, 'js-step')} data-step={currentStep}>
            <h3>Step {`${currentStep}`}</h3>
            <p>{activity.steps[currentStep].text}</p>
            <div className="block_wrapper">{activity.steps[currentStep].javaScriptBlocks}</div>
          </div>
        )
    }
  }

  render() {

    return (
      <div className={styles.root}>
        <h2>Activity</h2>
        <div className={cn(styles.ribbon, styles.box)}>
          <div className={`${styles.ribbonHeader}`}>
            <span>8 steps</span>
            <select className={cn('js-step-selector', styles.lessonStepSelector)} name="step-selector" onChange={this.handleChange}>
                <option value={1}>Step 1</option>
                <option value={2}>Step 2</option>
                <option value={3}>Step 3</option>
                <option value={4}>Step 4</option>
                <option value={5}>Step 5</option>
                <option value={6}>Step 6</option>
                <option value={7}>Step 7</option>
                <option value={8}>Step 8</option>
            </select>
            <div className="clearfix"></div>
          </div>
        </div>
        <div className="lesson-steps">
          {this.doSteps()}
        </div>
        <ul className={cn(styles.lessonStepControls)}>
          <li><a className={cn(styles.jsStepPrev, 'btn btn-primary')} onClick={this.prevStep}>Previous</a></li>
          <li><a className={cn(styles.jsStepNext, 'btn btn-default')} onClick={this.nextStep}>Next</a></li>
        </ul>
      </div>
    )
  }
}

export default LessonBox
