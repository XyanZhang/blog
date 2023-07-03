import React from 'react'
import { animated } from '@react-spring/web'
import { useThemeConfig} from '@docusaurus/theme-common'
import { ThemeConfig } from '@docusaurus/preset-classic'
import JuejinIcon from '@site/static/svg/juejin.svg'
import { Icon } from '@iconify/react'

import styles from './styles.module.scss'


export default function SocialLinks({ ...prop }):React.ReactElement {
  const themeConfig = useThemeConfig() as ThemeConfig

  const socials = themeConfig.socials as {
    github: string
    twitter: string
    juejin: string
    csdn: string
    qq: string
    wx: string
    cloudmusic: string
    zhihu: string
  }

  return (
    <animated.div className={styles.social__links} {...prop}>
      {/* <a href="/rss.xml" target="_blank">
        <Icon icon="ri:rss-fill" />
      </a> */}
      <a href={socials.github} target="_blank">
        <Icon icon="ri:github-fill" />
      </a>
      <a href={socials.juejin} target="_blank">
        <JuejinIcon />
      </a>
      <a href={socials.qq} target="_blank">
        <Icon icon="ri:qq-fill" />
      </a>
      <a href={socials.wx} target="_blank">
        <Icon icon="ri:wechat-fill" />
      </a>
      {/* <a href={socials.twitter} target="_blank">
        <Icon icon="ri:twitter-line" />
      </a>
      <a href={socials.zhihu} target="_blank">
        <Icon icon="ri:zhihu-line" />
      </a> */}
    </animated.div>
  )
}
