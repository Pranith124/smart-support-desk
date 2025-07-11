
import React, { useState, useEffect } from "react";
import { Clock, AlertTriangle } from "lucide-react";

interface SLATimerProps {
  targetTime: Date;
  isBreached?: boolean;
}

export function SLATimer({ targetTime, isBreached = false }: SLATimerProps) {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = targetTime.getTime();
      const difference = target - now;

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft(`${hours}h ${minutes}m`);
      } else {
        setTimeLeft("Overdue");
      }
    }, 60000);

    return () => clearInterval(timer);
  }, [targetTime]);

  return (
    <div className={`rounded-xl border p-4 ${
      isBreached 
        ? "bg-red-50 border-red-200" 
        : "bg-white border-gray-200"
    }`}>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
          isBreached ? "bg-red-100" : "bg-blue-100"
        }`}>
          {isBreached ? (
            <AlertTriangle className="w-5 h-5 text-red-600" />
          ) : (
            <Clock className="w-5 h-5 text-blue-600" />
          )}
        </div>
        <div>
          <p className="font-medium text-gray-900">
            {isBreached ? "SLA Breached" : "SLA Timer"}
          </p>
          <p className={`text-sm ${isBreached ? "text-red-600" : "text-gray-600"}`}>
            {isBreached ? "Response time exceeded" : `${timeLeft} remaining`}
          </p>
        </div>
      </div>
    </div>
  );
}
