import { createSignal, onCleanup } from "solid-js"
import CountdownCard from "./CountdownCard"
import { t } from "../stores/locale"
import globalInfoNumbers from "../stores/globalInfoNumbers"

function timeBetweenDates() {
    const validFromDate = new Date()
    const validTillDate = new Date(`${globalInfoNumbers.FIRST_DAY_COMPETITION} January ${globalInfoNumbers.YEAR} 08:00 UTC-05`)
    const difference = validTillDate.getTime() - validFromDate.getTime()

    let timeData = {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    }
    if (difference > 0) {
        let seconds = Math.floor(difference / 1000)
        let minutes = Math.floor(seconds / 60)
        let hours = Math.floor(minutes / 60)
        const days = Math.floor(hours / 24)

        hours %= 24
        minutes %= 60
        seconds %= 60

        timeData = {
            days: days < 10 ? `0${days}` : `${days}`,
            hours: hours < 10 ? `0${hours}` : `${hours}`,
            minutes: minutes < 10 ? `0${minutes}` : `${minutes}`,
            seconds: seconds < 10 ? `0${seconds}` : `${seconds}`,
        }
    }
    return {
        timeData,
        difference,
    }
}

export default function Countdown() {
    const [timerDetails, setTimerDetails] = createSignal(
        timeBetweenDates().timeData,
    )

    const timer = setInterval(() => {
        setTimerDetails(timeBetweenDates().timeData)
    }, 1000)

    onCleanup(() => clearInterval(timer))

    return (
        <div class="flex flex-row items-center justify-center gap-3">
            <CountdownCard
                id="days"
                label={() => {
                    return t("homePage.days")
                }}
                current={() => {
                    return timerDetails().days
                }}
            />
            <CountdownCard
                id="hours"
                label={() => {
                    return t("homePage.hours")
                }}
                current={() => {
                    return timerDetails().hours
                }}
            />
            <CountdownCard
                id="minutes"
                label={() => {
                    return t("homePage.minutes")
                }}
                current={() => {
                    return timerDetails().minutes
                }}
            />
            <CountdownCard
                id="seconds"
                label={() => {
                    return t("homePage.seconds")
                }}
                current={() => {
                    return timerDetails().seconds
                }}
            />
        </div>
    )
}
