import  { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
// @ts-ignore
import styles from './styles.module.css'
import './index.css'

interface PageProps {
    offset: number
    gradient: string
    onClick: () => void
    desciption:string 
}
// @ts-ignore

const Page = ({ offset, gradient, onClick,desciption }: PageProps) => (
    <>
        <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
            <div className={styles.slopeBegin} />
        </ParallaxLayer>

        <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
            <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
        </ParallaxLayer>

        <ParallaxLayer className={`${styles.text} ${styles.number} ${'slider'+offset+1}`}
                       offset={offset}
                        // @ts-ignore
                       desciption={desciption}
                       speed={0.3}>
            <div className={`${'phpto'+offset+1}`} style={{width:'400px',height:'260px'}}></div>
            <span>0{offset + 1}</span>
            <p>{desciption}</p>
        </ParallaxLayer>
    </>
)

function Home(){
    const parallax = useRef<IParallax>(null)
    const scroll = (to: number) => {
        if (parallax.current) {
            parallax.current.scrollTo(to)
        }
    }
    return(
        <div className={styles.home}>
            <Parallax className={styles.container} ref={parallax} pages={3} horizontal>
                <Page offset={0} desciption={'记录每一个脚印'} gradient="pink" onClick={() => scroll(1)} />
                <Page offset={1} desciption={'拥抱更好的自己'} gradient="teal" onClick={() => scroll(2)} />
                <Page offset={2} desciption={'监测全方位数据'} gradient="tomato" onClick={() => scroll(0)} />
            </Parallax>
        </div>
    )
}

// @ts-ignore
export default Home