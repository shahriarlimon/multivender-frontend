import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../../../server";

const CountDown = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  /* useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    if (
      timeLeft &&
      typeof timeLeft.days === 'undefined' &&
      typeof timeLeft.hours === 'undefined' &&
      typeof timeLeft.minutes === 'undefined' &&
      typeof timeLeft.seconds === 'undefined'
    ) {
      axios.delete(`${server}/eventt/delete-shop-event/${data?._id}`);
    }

    return () => clearTimeout(timer);
  }, [timeLeft]); */ // Add timeLeft as a dependency to trigger the effect when it changes

  function calculateTimeLeft() {
    const difference = +new Date(data?.Finish_Date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <span className="text-[25px] text-[#475ad2]">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-[red] text-[25px]">Time's Up</span>
      )}
    </div>
  );
};

export default CountDown;
