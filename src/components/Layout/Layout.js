import React from 'react'
import l from './layout.module.css'


export default function Layout({ title, colorBg = false, urlBg, children }) {


    const styleRoot = {};
    if (urlBg) {
        styleRoot.backgroundImage = `url(${urlBg})`
    }
    if (colorBg) {
        styleRoot.backgroundColor = colorBg
    }

    return (
        <section className={l.root} >
            <div className={l.wrapper} style={styleRoot} >
                <article >
                    {title && <div className={l.title}>
                        {title}
                        <span className={l.separator}></span>
                    </div>}
                    {children && < div className={`${l.desc} ${l.full}`}>
                        {children}
                    </div>}
                </article>
            </div>
        </section >
    )
}
