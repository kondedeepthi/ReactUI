export const getDateinMonthYrFormat = (date = new Date()) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const d = new Date(date);
    const month = monthNames[d.getMonth()];
    const year = d.getFullYear();

    return [month, year].join(' ');
};