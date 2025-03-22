import React from 'react'

const Marquee = () => {

const year ="2025 - 2026";

    return (
        <section className='bg-blue text-lg text-white'>
            <marquee><b className='text-yellow-400'>Admissions open</b> for the academic year of <b>{year}</b>. Attend the <b className='text-yellow-400'>Scholarship meetup</b> for more details..
            </marquee>
        </section>
    )
}

export default Marquee
