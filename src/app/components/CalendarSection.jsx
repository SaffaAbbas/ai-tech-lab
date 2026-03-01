'use client';

import { useState, useMemo } from 'react';

const TIME_SLOTS = Array.from({ length: 48 }, (_, index) => {
  const hours = String(Math.floor(index / 2)).padStart(2, '0');
  const minutes = index % 2 === 0 ? '00' : '30';
  return `${hours}:${minutes}`;
});

const BUDGET_OPTIONS = [
  '$5000 - $20,000',
  '$20,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000+',
];

function getCalendarData(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;
  const days = [];
  for (let i = 0; i < startOffset; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);
  return days;
}

function formatMonthYear(year, month) {
  return new Date(year, month).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

function formatDayFull(year, month, day) {
  return new Date(year, month, day).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
}

function getTimeZone() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    return `${tz} (${time})`;
  } catch {
    return 'Local Time';
  }
}

function isDateAvailable(year, month, day) {
  const date = new Date(year, month, day);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dayOfWeek = date.getDay();
  return date >= today && dayOfWeek !== 0 && dayOfWeek !== 6;
}

export default function CalendarSection() {
  const now = new Date();
  const [currentYear, setCurrentYear] = useState(now.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(now.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    funding: '',
    budget: '',
  });

  const calendarDays = useMemo(() => getCalendarData(currentYear, currentMonth), [currentYear, currentMonth]);
  const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleDateClick = (day) => {
    if (isDateAvailable(currentYear, currentMonth, day)) {
      setSelectedDate(day);
      setSelectedTime(null);
    }
  };

  const handleNext = () => {
    if (selectedDate && selectedTime) setStep(2);
  };

  const handleBack = () => {
    if (step === 2) setStep(1);
    if (step === 3) setStep(1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('https://ailab.techoriginators.com/mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: formatDayFull(currentYear, currentMonth, selectedDate),
          time: selectedTime,
          type: 'calendar_booking',
        }),
      });
    } catch {
      // still show thank you
    }
    setLoading(false);
    setStep(3);
  };

  const isPastMonth = () => {
    const today = new Date();
    return currentYear < today.getFullYear() ||
      (currentYear === today.getFullYear() && currentMonth <= today.getMonth() - 1);
  };

  // ──────── STEP 3: THANK YOU ────────
  if (step === 3) {
    return (
      <section id="calendar-section" className="py-10 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">You're all set!</h2>
          <p className="text-gray-600 text-lg mb-2">
            Your consultation has been scheduled for
          </p>
          <p className="text-indigo-600 font-semibold text-xl mb-1">
            {formatDayFull(currentYear, currentMonth, selectedDate)}
          </p>
          <p className="text-indigo-600 font-semibold text-lg mb-6">at {selectedTime}</p>
          <p className="text-gray-500">
            We'll send a confirmation to <strong>{formData.email}</strong> with all the details.
          </p>
          <button
            onClick={() => { setStep(1); setSelectedDate(null); setSelectedTime(null); setFormData({ name: '', email: '', phone: '', message: '', funding: '', budget: '' }); }}
            className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Book Another Call
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="calendar-section" className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
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
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto border border-gray-100">
          <div className={`grid grid-cols-1 ${step === 1 ? (selectedDate ? 'lg:grid-cols-[280px_1fr_1fr]' : 'lg:grid-cols-[280px_1fr]') : 'lg:grid-cols-[280px_1fr]'}`}>

            {/* ──── LEFT: Info Panel ──── */}
            <div className="p-6 border-b lg:border-b-0 lg:border-r border-gray-200 relative">
              {step === 2 && (
                <button onClick={handleBack} className="mb-4 p-2 hover:bg-gray-100 rounded-full transition">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              <div className="text-sm text-gray-500 mb-1">TechOriginators</div>
              <h3 className="text-xl font-bold mb-4">Free Consultation + Quote</h3>

              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">45 min</span>
              </div>

              <div className="flex items-start gap-2 text-gray-600 mb-4">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">Web conferencing details provided upon confirmation.</span>
              </div>

              {step === 2 && selectedDate && selectedTime && (
                <>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-medium">{selectedTime}, {formatDayFull(currentYear, currentMonth, selectedDate)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm">{getTimeZone()}</span>
                  </div>
                </>
              )}
            </div>

            {/* ──── STEP 1: Calendar + Time Slots ──── */}
            {step === 1 && (
              <>
                {/* Calendar */}
                <div className="p-5 md:p-6 border-b lg:border-b-0 lg:border-r border-gray-200">
                  <h4 className="text-lg font-bold mb-5">Select a Date & Time</h4>

                  {/* Month Nav */}
                  <div className="flex items-center justify-between mb-5">
                    <button onClick={handlePrevMonth} disabled={isPastMonth()} className="p-1.5 hover:bg-gray-100 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <span className="font-semibold">{formatMonthYear(currentYear, currentMonth)}</span>
                    <button onClick={handleNextMonth} className="p-1.5 hover:bg-gray-100 rounded-full text-blue-600 transition">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>

                  {/* Day Headers */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {DAYS.map((d) => (
                      <div key={d} className="text-center text-xs font-semibold text-gray-500">{d}</div>
                    ))}
                  </div>

                  {/* Days Grid */}
                  <div className="grid grid-cols-7 gap-0 mb-4">
                    {calendarDays.map((day, i) => {
                      if (!day) return <div key={i} />;
                      const available = isDateAvailable(currentYear, currentMonth, day);
                      const selected = selectedDate === day;
                      return (
                        <button
                          key={i}
                          disabled={!available}
                          onClick={() => handleDateClick(day)}
                          className={`h-9 w-9 mx-auto flex items-center justify-center text-sm rounded-full transition-all
                            ${selected ? 'bg-blue-600 text-white font-bold shadow-md' : ''}
                            ${!selected && available ? 'text-blue-600 font-semibold hover:bg-blue-50 cursor-pointer' : ''}
                            ${!available ? 'text-gray-300 cursor-not-allowed' : ''}
                          `}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>

                  {/* Timezone */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-sm font-semibold mb-1">Time zone</div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{getTimeZone()}</span>
                    </div>
                  </div>
                </div>

                {/* Time Slots */}
                {selectedDate && (
                  <div className="p-5 md:p-6">
                    <div className="font-bold text-base mb-5">
                      {formatDayFull(currentYear, currentMonth, selectedDate)}
                    </div>
                    <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-1">
                      {TIME_SLOTS.map((time) => (
                        <div key={time} className="flex gap-2">
                          <button
                            onClick={() => setSelectedTime(time)}
                            className={`flex-1 py-2.5 rounded-md border-2 text-sm font-semibold transition-all
                              ${selectedTime === time
                                ? 'border-blue-600 bg-blue-600 text-white'
                                : 'border-blue-200 text-blue-600 hover:border-blue-400'}
                            `}
                          >
                            {time}
                          </button>
                          {selectedTime === time && (
                            <button
                              onClick={handleNext}
                              className="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition"
                            >
                              Next
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {/* ──── STEP 2: Details Form ──── */}
            {step === 2 && (
              <div className="p-5 md:p-6">
                <h4 className="text-lg font-bold mb-5">Enter Details</h4>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      We'd love to hear what you're working on. Share some info on what you're looking to build.
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Are you self-funded or working with investors?
                    </label>
                    <input
                      type="text"
                      name="funding"
                      value={formData.funding}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">What is your budget? *</label>
                    <div className="space-y-2">
                      {BUDGET_OPTIONS.map((opt) => (
                        <label key={opt} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="budget"
                            value={opt}
                            required
                            checked={formData.budget === opt}
                            onChange={handleChange}
                            className="w-4 h-4 text-blue-600 accent-blue-600"
                          />
                          <span className="text-sm text-gray-700">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 pt-2">
                    By proceeding, you confirm that you have read and agree to our Terms of Use and Privacy Notice.
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition disabled:opacity-60"
                  >
                    {loading ? 'Scheduling...' : 'Schedule Event'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
