import { useEffect } from 'react'
import { useState } from 'react'
import { SendSystemNotice } from '../../util/notice'
import { OpenWindow } from '../../util/window'



require('../../renderer')


export default function Clock() {

    const [left, setLeft] = useState(3)
    const [tick, setTick] = useState(null)


    const timeHandler = () => {
        if (tick === null) {
            setLeft(left => left - 1);
            const interval = setInterval(() => {
                console.log(left, 'left - 1')
                setLeft(left => left - 1);
            }, 1000);
            setTick(interval)
        }
    };


    // console.log(left)
    if (tick && left <= 0) {
        console.log('clearInterval', left, tick)
        clearInterval(tick);
        SendSystemNotice('结束', '活动结束')
    }

    const hour = parseInt(left / 3600);
    const minute = parseInt(left / 60);
    const second = left % 60;

    console.log(left, hour, minute, second)




    return (

        <div className="w-screen h-screen flex items-center justify-center">
            <div className="card w-96 bg-base-100 shadow-xl dark:bg-slate-300">
                {/* <div className="item-end">
                    <input type="checkbox" className="toggle toggle-info" checked />
                </div> */}

                <figure><img src="static/image/bg.png" alt="Shoes" /></figure>

                <div className="card-body">
                    {/* <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p> */}
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center dark:text-white">
                        <div className="flex flex-col">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": hour }}></span>
                            </span>
                            hours
                        </div>
                        <div className="flex flex-col">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": minute }}></span>
                            </span>
                            min
                        </div>
                        <div className="flex flex-col">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": second }}></span>
                            </span>
                            sec
                        </div>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={timeHandler}>开始</button>
                        <button className="btn btn-success" onClick={() => OpenWindow({
                            route: "/alone/clock",
                        })}>OPEN</button>
                    </div>
                </div>
            </div>
        </div>

    );
}