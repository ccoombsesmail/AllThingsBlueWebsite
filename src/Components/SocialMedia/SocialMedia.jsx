import React from "react"
import { SocialMediaIconsReact } from 'social-media-icons-react';
import styles from "./SocialMedia.module.css"
import { SocialIcon } from 'react-social-icons';


const SocialMedia = () => {


    return (
        <div className = {styles.wrapper} >
            <strong> FOLLOW AND SUBSCRIBE</strong>
            <ul className = {styles.smWrapper}>
                <li className={styles.smIcon}>

                    <SocialIcon style={{ height: 40, width: 40 }} size url="https://open.spotify.com/artist/01sLjLNQxogo8tXiVnuXty" />

                    {/* <SocialMediaIconsReact  borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)"
                    backgroundColor="rgba(28,186,223,1)" iconSize="5" roundness="20%" url="https://some-website.com/my-social-media-url" size="51" margin ="30" /> */}
                </li>
                <li className={styles.smIcon}>
                    <SocialIcon style={{ height: 40, width: 40 }} url="https://soundcloud.com/allthingsbluemusic" />
                    {/* <SocialMediaIconsReact className={styles.smIcon} borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)"
                    backgroundColor="rgba(28,186,223,1)" iconSize="5" roundness="20%" url="https://some-website.com/my-social-media-url" size="51" /> */}
                </li>
                <li className={styles.smIcon}>
                    <SocialIcon style={{ height: 40, width: 40 }} url="https://www.instagram.com/allthingsbluemusic/?hl=en" />
                    {/* <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="youtube" iconColor="rgba(255,255,255,1)" 
                    backgroundColor="rgba(28,186,223,1)" iconSize="5" roundness="20%" url="https://some-website.com/my-social-media-url" size="51" /> */}
                </li>
                <li className={styles.smIcon}>
                    <SocialIcon style={{ height: 40, width: 40 }} url="https://www.youtube.com/channel/UC6dS8oolIN9QGlvocVDM8HA" />
                    {/* <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="youtube" iconColor="rgba(255,255,255,1)" 
                    backgroundColor="rgba(28,186,223,1)" iconSize="5" roundness="20%" url="https://some-website.com/my-social-media-url" size="51" /> */}
                </li>
                <li className={styles.smIcon}>
                    <SocialIcon style={{ height: 40, width: 40 }} url="https://www.facebook.com/allthingsbluemusic/" />
                    {/* <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="youtube" iconColor="rgba(255,255,255,1)" 
                    backgroundColor="rgba(28,186,223,1)" iconSize="5" roundness="20%" url="https://some-website.com/my-social-media-url" size="51" /> */}
                </li>

           
            </ul>
            
            <h1 className = {styles.contact}> Contact</h1>
            <h2 className={styles.email}> allthingsbluemusic@gmail.com </h2>

        </div>
    )

}


export default SocialMedia
