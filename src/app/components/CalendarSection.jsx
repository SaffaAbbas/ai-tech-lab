'use client';

import { useState } from 'react';

export default function CalendarSection() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);

  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const months = ['January 2026', 'February 2026', 'March 2026'];
  const availableDates = [26, 27, 28, 29, 30, 31];
  
  const timeSlots = [
    '12:00am', '12:30am', '1:00am', '1:30am', '2:00am', 
    '2:30am', '3:00am', '3:30am', '4:00am', '4:30am'
  ];

  const calendarDays = [
    null, null, null, null, 1, 2, 3,
    4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31
  ];

  const getDayName = (day) => {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(2026, 0, day);
    return dayNames[date.getDay()];
  };

  const getMonthName = () => {
    return months[currentMonth].split(' ')[0];
  };

  const handlePrevMonth = () => {
    if (currentMonth > 0) setCurrentMonth(currentMonth - 1);
  };

  const handleNextMonth = () => {
    if (currentMonth < months.length - 1) setCurrentMonth(currentMonth + 1);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Book a <span className="text-blue-600">Free Consultation</span> and<br />
            get a <span className="font-bold">Customized Quote</span>
          </h2>
        </div>

        {/* Calendar Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_340px_1fr]">
            {/* Left Side - Info */}
            <div className="p-8 border-r border-gray-200">
              <div className="text-sm text-gray-500 mb-2">GenAI-Labs</div>
              <h3 className="text-2xl font-bold mb-6">Free Consultation + Quote</h3>
              
              <div className="flex items-center gap-2 text-gray-600 mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>45 min</span>
              </div>

              <div className="flex items-start gap-2 text-gray-600 mb-8">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">Web conferencing details provided upon confirmation.</span>
              </div>

              <div className="mt-auto">
                <a href="#" className="text-blue-600 text-sm hover:underline">Cookie settings</a>
              </div>
            </div>

            {/* Middle - Calendar */}
            <div className="p-8 relative border-r border-gray-200">
              {/* Best Value Badge */}
              <div className="absolute top-0 right-0 bg-gray-800 text-white text-xs font-bold px-6 py-2 transform rotate-45 translate-x-10 translate-y-3">
                BEST VALUE
              </div>

              <h4 className="text-xl font-bold mb-6">Select a Date & Time</h4>
              
              {/* Month Navigation */}
              <div className="flex items-center justify-between mb-6">
                <button 
                  onClick={handlePrevMonth}
                  disabled={currentMonth === 0}
                  className="p-2 hover:bg-gray-100 rounded disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <span className="font-semibold text-lg">{months[currentMonth]}</span>
                <button 
                  onClick={handleNextMonth}
                  disabled={currentMonth === months.length - 1}
                  className="p-2 hover:bg-gray-100 rounded disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Days of Week */}
              <div className="grid grid-cols-7 gap-1 mb-3">
                {daysOfWeek.map(day => (
                  <div key={day} className="text-center text-xs font-semibold text-gray-600">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1 mb-6">
                {calendarDays.map((day, index) => (
                  <button
                    key={index}
                    disabled={!day || !availableDates.includes(day)}
                    className={`
                      aspect-square flex items-center justify-center text-sm rounded-lg transition-all
                      ${!day ? 'invisible' : ''}
                      ${availableDates.includes(day) 
                        ? selectedDate === day
                          ? 'bg-blue-600 text-white font-bold scale-110 shadow-lg'
                          : 'bg-blue-50 text-blue-600 font-semibold hover:bg-blue-100 cursor-pointer' 
                        : 'text-gray-300 cursor-not-allowed'
                      }
                    `}
                    onClick={() => {
                      if (availableDates.includes(day)) {
                        setSelectedDate(day);
                        setSelectedTime(null);
                      }
                    }}
                  >
                    {day}
                  </button>
                ))}
              </div>

              {/* Time Zone */}
              <div className="pt-6 border-t border-gray-200">
                <div className="text-sm font-semibold mb-2">Time zone</div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Pakistan, Maldives Time (5:09pm)</span>
                </div>
              </div>
            </div>

            {/* Right Side - Time Slots */}
            {selectedDate && (
              <div className="p-8 bg-gray-50">
                <div className="mb-6">
                  <div className="font-bold text-lg">
                    {getDayName(selectedDate)}, {getMonthName()} {selectedDate}
                  </div>
                </div>

                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`
                        w-full py-3 px-4 rounded-lg border-2 font-semibold transition-all
                        ${selectedTime === time
                          ? 'border-blue-600 bg-blue-50 text-blue-600'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300'
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Confirmation Message */}
        {selectedDate && selectedTime && (
          <div className="mt-6 text-center">
            <div className="inline-block bg-green-50 border border-green-200 rounded-lg px-6 py-3">
              <span className="text-green-800 font-semibold">
                ✓ Selected: {getDayName(selectedDate)}, {getMonthName()} {selectedDate} at {selectedTime}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}