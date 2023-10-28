import Image from 'next/image'
import LowTemp from './envRisksIcons/LowTemp.webp'
import HighTemp from './envRisksIcons/HighTemp.webp'
import UvRadiation from './envRisksIcons/UvRadiation.webp'
import Precipitation from './envRisksIcons/Precipitation.webp'
import ElevationVariation from './envRisksIcons/ElevationVariation.webp'
import ActiveVolcanoes from './envRisksIcons/ActiveVolcanoes.webp'
import Earthquakes from './envRisksIcons/Earthquakes.webp'
import { useEffect } from 'react'
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away.css';

const EnvRisks = () => {

    useEffect(() => {
        tippy('.low-temp', {
           content: 'This is a tooltip',
           animation: 'shift-away',
           allowHTML: true,
        });
        tippy('.high-temp', {
            content: 'This is a tooltip',
            animation: 'shift-away',
            allowHTML: true,
        });
        tippy('.uv-radiation', {
            content: 'This is a tooltip',
            animation: 'shift-away',
            allowHTML: true,
        });
        tippy('.precipitation', {
            content: 'This is a tooltip',
            animation: 'shift-away',
            allowHTML: true,
        });
        tippy('.elevation-variation', {
            content: 'This is a tooltip',
            animation: 'shift-away',
            allowHTML: true,
        });
        tippy('.active-volcanoes', {
            content: 'This is a tooltip',
            animation: 'shift-away',
            allowHTML: true,
        });
        tippy('.earth-quakes', {
            content: 'This is a tooltip',
            animation: 'shift-away',
            allowHTML: true,
        });
      }, []);

    return(
        <div className="flex space-x-5 bg-zinc-100 rounded-[10px] px-2 py-2">
            <div className={`low-temp`}>
                <Image src={LowTemp} alt="" width={22} height={22}/>
            </div>
            <div className='high-temp'>
                <Image src={HighTemp} alt="" width={22} height={22}/>
            </div>
            <div className='uv-radiation'>
                <Image src={UvRadiation} alt="" width={22} height={22}/>
            </div>
            <div className='precipitation'>
                <Image src={Precipitation} alt="" width={22} height={22}/>
            </div>
            <div className='elevation-variation'>
                <Image src={ElevationVariation} alt="" width={22} height={22}/>
            </div>
            <div className='active-volcanoes'>
                <Image src={ActiveVolcanoes} alt="" width={22} height={22}/>
            </div>
            <div className='earth-quakes'>
                <Image src={Earthquakes} alt="" width={22} height={22}/>
            </div> 
        </div>
    )
}

export default EnvRisks