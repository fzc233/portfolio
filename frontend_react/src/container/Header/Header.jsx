import React from 'react'
import {easeInOut, motion} from 'framer-motion'
import { images } from '../../constants'
import './Header.scss'
const scaleVarients = {
  whileInView:{
    scale:[0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease:'easeInOut'
    }
  }
}
const Header = () => {
  return (
    <div id = "home" className='app__header app__flex'>
      <motion.div 
         whileInView={{x:[-100,0],opacity:[0,1]}}
         //下面这个是出现的动态
         transition={{duration:1.2}}
         className='app__header-info'
      >
          <div className='app__header-badge'>
            <div className='badge-cmp app__flex'>
              <span>😀</span>
              <div style={{marginLeft:20}}>
                <p className = 'p-text'>Hi, I am</p>
                <h1 className='head-text'>Zechuan</h1>

              </div>
            </div>
            <div className='tag-cmp app__flex'>
            <p className = 'p-text'>Software Engineer</p>
            <p className = 'p-text'>Web Developer</p>
            <p className = 'p-text'>FreeLancer</p>
            </div>
          </div>
      </motion.div>
      <motion.div
       whileInView={{pacity:[0,1]}}
       transition={{duration:0.8,delayChildren:0.8}}
       className='app__header-img'
      >
          <img src={images.profile} alt="profile_bg" />
          <motion.img
          whileInView={{scale:[0,1]}}
          //easeInOut可以将图片快速加载
          transition={{duration:0.8,ease:easeInOut}}
          src={images.circle}
          alt='profile_circle'
          className = "overlay_circle"
          />
      </motion.div>

      <motion.div
      variants={scaleVarients}
      whileInView={scaleVarients.whileInView}
      className='app__header-circles'
      >
          {[images.flutter,images.redux,images.sass].map((circle,index)=>(
            <div className='circle-cmp app__flex' key={`circle-${index}`}>
               <img src={circle} alt="circle" />
            </div>
           
          ))}
      </motion.div>
    </div>
  )
}

export default Header
