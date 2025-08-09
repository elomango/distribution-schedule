class DistributionCalendar {
    constructor() {
        const today = new Date();
        this.currentDate = today;
        this.currentMonth = today.getMonth();
        this.currentYear = today.getFullYear();
        
        this.distributionDates = {
            target12: [
                new Date(2025, 0, 7),   // 1/7/25
                new Date(2025, 1, 4),   // 2/4/25
                new Date(2025, 2, 4),   // 3/4/25
                new Date(2025, 3, 1),   // 4/1/25
                new Date(2025, 4, 6),   // 5/6/25
                new Date(2025, 5, 3),   // 6/3/25
                new Date(2025, 6, 1),   // 7/1/25
                new Date(2025, 7, 5),   // 8/5/25
                new Date(2025, 8, 2),   // 9/2/25
                new Date(2025, 9, 7),   // 10/7/25
                new Date(2025, 10, 4),  // 11/4/25
                new Date(2025, 11, 2)   // 12/2/25
            ],
            weekly: [],
            groupA: [],
            groupB: [],
            groupC: [],
            groupD: []
        };

        this.initializeDates();
        this.init();
    }

    initializeDates() {
        // Group A dates
        this.distributionDates.groupA = [
            new Date(2025, 0, 22), // 1/22/25
            new Date(2025, 1, 19), // 2/19/25
            new Date(2025, 2, 19), // 3/19/25
            new Date(2025, 3, 16), // 4/16/25
            new Date(2025, 4, 14), // 5/14/25
            new Date(2025, 5, 11), // 6/11/25
            new Date(2025, 6, 9),  // 7/9/25
            new Date(2025, 7, 6),  // 8/6/25
            new Date(2025, 8, 3),  // 9/3/25
            new Date(2025, 9, 1),  // 10/1/25
            new Date(2025, 10, 26), // 11/26/25
            new Date(2025, 11, 24)  // 12/24/25
        ];

        // Group B dates
        this.distributionDates.groupB = [
            new Date(2025, 0, 2), new Date(2025, 0, 29), // 1/2/25, 1/29/25
            new Date(2025, 1, 26), new Date(2025, 2, 26), new Date(2025, 3, 23), // 2/26/25, 3/26/25, 4/23/25
            new Date(2025, 4, 21), new Date(2025, 5, 18), new Date(2025, 6, 16), // 5/21/25, 6/18/25, 7/16/25
            new Date(2025, 7, 13), new Date(2025, 8, 10), new Date(2025, 9, 8), // 8/13/25, 9/10/25, 10/8/25
            new Date(2025, 10, 5), new Date(2025, 11, 3), new Date(2025, 11, 31) // 11/5/25, 12/3/25, 12/31/25
        ];

        // Group C dates
        this.distributionDates.groupC = [
            new Date(2025, 0, 8),  // 1/8/25
            new Date(2025, 1, 5),  // 2/5/25
            new Date(2025, 2, 5),  // 3/5/25
            new Date(2025, 3, 2),  // 4/2/25
            new Date(2025, 3, 30), // 4/30/25
            new Date(2025, 4, 28), // 5/28/25
            new Date(2025, 5, 25), // 6/25/25
            new Date(2025, 6, 23), // 7/23/25
            new Date(2025, 7, 20), // 8/20/25
            new Date(2025, 8, 17), // 9/17/25
            new Date(2025, 9, 15), // 10/15/25
            new Date(2025, 10, 12), // 11/12/25
            new Date(2025, 11, 10)  // 12/10/25
        ];

        // Group D dates
        this.distributionDates.groupD = [
            new Date(2025, 0, 15), // 1/15/25
            new Date(2025, 1, 12), // 2/12/25
            new Date(2025, 2, 12), // 3/12/25
            new Date(2025, 3, 9),  // 4/9/25
            new Date(2025, 4, 7),  // 5/7/25
            new Date(2025, 5, 4),  // 6/4/25
            new Date(2025, 6, 2),  // 7/2/25
            new Date(2025, 6, 30), // 7/30/25
            new Date(2025, 7, 27), // 8/27/25
            new Date(2025, 8, 24), // 9/24/25
            new Date(2025, 9, 22), // 10/22/25
            new Date(2025, 10, 19), // 11/19/25
            new Date(2025, 11, 17)  // 12/17/25
        ];

        // Weekly dates are the same as all group dates combined
        this.distributionDates.weekly = [
            ...this.distributionDates.groupA,
            ...this.distributionDates.groupB,
            ...this.distributionDates.groupC,
            ...this.distributionDates.groupD
        ];
    }

    generateWeeklyDates() {
        const dates = [];
        // Weekly Payers rotate every week, starting from January 2, 2025 (Thursday)
        let currentDate = new Date(2025, 0, 2); // January 2, 2025
        const endDate = new Date(2025, 11, 31); // December 31, 2025
        
        while (currentDate <= endDate) {
            dates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 7); // Add 7 days for weekly
        }
        
        return dates;
    }


    init() {
        this.renderCalendar();
        this.bindEvents();
    }

    bindEvents() {
        document.getElementById('prevMonth').addEventListener('click', () => this.previousMonth());
        document.getElementById('nextMonth').addEventListener('click', () => this.nextMonth());
        document.getElementById('todayBtn').addEventListener('click', () => this.goToToday());
    }

    goToToday() {
        const today = new Date();
        this.currentMonth = today.getMonth();
        this.currentYear = today.getFullYear();
        this.renderCalendar();
    }

    previousMonth() {
        if (this.currentMonth === 0) {
            this.currentMonth = 11;
            this.currentYear--;
        } else {
            this.currentMonth--;
        }
        this.renderCalendar();
    }

    nextMonth() {
        if (this.currentMonth === 11) {
            this.currentMonth = 0;
            this.currentYear++;
        } else {
            this.currentMonth++;
        }
        this.renderCalendar();
    }

    renderCalendar() {
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        document.getElementById('currentMonth').textContent = 
            `${monthNames[this.currentMonth]} ${this.currentYear}`;

        const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
        const daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

        const calendarBody = document.getElementById('calendarBody');
        calendarBody.innerHTML = '';

        let dayCount = 1;
        for (let week = 0; week < 6; week++) {
            const weekRow = document.createElement('div');
            weekRow.className = 'calendar-week';

            for (let day = 0; day < 7; day++) {
                const dayCell = document.createElement('div');
                dayCell.className = 'calendar-day';

                if (week === 0 && day < firstDay) {
                    dayCell.classList.add('other-month');
                } else if (dayCount > daysInMonth) {
                    dayCell.classList.add('other-month');
                } else {
                    const currentDate = new Date(this.currentYear, this.currentMonth, dayCount);
                    dayCell.innerHTML = `<span class="day-number">${dayCount}</span>`;
                    
                    // Check if this is today
                    const today = new Date();
                    if (currentDate.toDateString() === today.toDateString()) {
                        dayCell.classList.add('today');
                    }
                    
                    const events = this.getEventsForDate(currentDate);
                    if (events.length > 0) {
                        const eventsContainer = document.createElement('div');
                        eventsContainer.className = 'events-container';
                        
                        events.forEach(event => {
                            const eventElement = document.createElement('div');
                            eventElement.className = `event ${event.type}`;
                            eventElement.textContent = event.label;
                            eventsContainer.appendChild(eventElement);
                        });
                        
                        dayCell.appendChild(eventsContainer);
                    }
                    
                    dayCount++;
                }

                weekRow.appendChild(dayCell);
            }

            calendarBody.appendChild(weekRow);
            if (dayCount > daysInMonth) break;
        }
    }

    getEventsForDate(date) {
        const events = [];
        const dateStr = date.toDateString();

        if (this.distributionDates.target12.some(d => d.toDateString() === dateStr)) {
            events.push({ type: 'target12', label: 'Target12' });
        }

        if (this.distributionDates.weekly.some(d => d.toDateString() === dateStr)) {
            events.push({ type: 'weekly', label: 'Weekly' });
        }

        if (this.distributionDates.groupA.some(d => d.toDateString() === dateStr)) {
            events.push({ type: 'group-a', label: 'Group-A' });
        }

        if (this.distributionDates.groupB.some(d => d.toDateString() === dateStr)) {
            events.push({ type: 'group-b', label: 'Group-B' });
        }

        if (this.distributionDates.groupC.some(d => d.toDateString() === dateStr)) {
            events.push({ type: 'group-c', label: 'Group-C' });
        }

        if (this.distributionDates.groupD.some(d => d.toDateString() === dateStr)) {
            events.push({ type: 'group-d', label: 'Group-D' });
        }

        return events;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new DistributionCalendar();
});