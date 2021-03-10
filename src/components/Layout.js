import React from 'react'
import l from './layout.module.css'

export default function Layout({ title, desc, colorBg = false, urlBg }) {
    //Зар помоги пожалуйста с css на картинку, она уплывает ум еня вниз, не решил ещё
    const styleRoot = colorBg ? { background: 'red' } : {
        background: `url(${urlBg})`,
        maxWidth: '100%',
        backgroundSize: 'cover',

    }

    return (
        <section className={l.root} style={styleRoot}>
            <div className={l.wrapper} >
                <article >
                    {title && <div className={l.title}>
                        {title}
                        <span className={l.separator}></span>
                    </div>}
                    {desc && < div className={`${l.desc} ${l.full}`}>
                        {desc}
                    </div>}
                </article>
            </div>
        </section >
    )
}
