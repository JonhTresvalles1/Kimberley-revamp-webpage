// ================= Dropdown + Region Chart Switching =================
(function () {
    const projectsRegionDropdown = document.getElementById('customDropdown');
    const projectsRegionSelected = projectsRegionDropdown.querySelector('.projects__dropdown-selected');
    const projectsRegionList = projectsRegionDropdown.querySelector('.projects__dropdown-list');
    const projectsRegionItems = projectsRegionDropdown.querySelectorAll('.projects__dropdown-item');
    const projectsRegionGraphGroups = document.querySelectorAll('.projects__graph-group');

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    boxWidth: 8,
                    color: '#333333',
                    padding: 30
                }
            },
            tooltip: {
                backgroundColor: '#111827',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                padding: 12,
                cornerRadius: 8,
                callbacks: {
                    label: context => ` ${context.parsed.y.toLocaleString()} units`
                }
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { color: '#333333', minRotation: 45, maxRotation: 45 },
                title: {
                    display: true,
                    text: 'Financial years',
                    color: '#333333',
                    font: { size: 14, weight: 'normal' },
                    padding: { top: 40 }
                }
            },
            y: {
                beginAtZero: true,
                grid: { color: '#7a462e79' },
                ticks: {
                    color: '#333333',
                    callback: value => value / 1000 + 'k'
                },
                title: { display: true, text: 'Number of units', color: '#333333' }
            }
        }
    };

    // Data for each region
    const regionData = {
        "Wilinggin": {
            labels: ['FY 2013/14', 'FY 2014/15', 'FY 2015/16', 'FY 2016/17', 'FY 2017/18', 'FY 2018/19', 'FY 2019/20', 'FY 2020/21', 'FY 2021/22', 'FY 2022/23', 'FY 2023/24', 'FY 2024/25', 'FY 2025/26'],
            datasets: [
                {
                    label: 'KACCUs',
                    data: [69000, 13000, 41000, 14000, 48000, 15000, 0, 8000, 34000, 0, 0, 1000, 35000],
                    backgroundColor: '#7a462e79',
                    borderRadius: 8,
                    grouped: false,
                    barThickness: 28,
                    borderWidth: 1,
                    hoverBackgroundColor: '#7a462e'
                },
                {
                    label: 'NKACCUs',
                    data: Array(13).fill(null),
                    grouped: false,
                    backgroundColor: '#D46D55',
                    borderRadius: 8,
                    barThickness: 28,
                    hoverBackgroundColor: '#D46D55'
                }
            ]
        },
        "Dambimangari": {
            labels: ['FY 2012/13', 'FY 2013/14', 'FY 2014/15', 'FY 2015/16',
                'FY 2016/17', 'FY 2017/18', 'FY 2018/19', 'FY 2019/20',
                'FY 2020/21', 'FY 2021/22', 'FY 2022/23', 'FY 2023/24',
                'FY 2024/25', 'FY 2025/26'],
            datasets: [
                {
                    label: 'KACCUs',
                    data: [0, 52959, 12216, 14010,
                        30272, 39592, 28764, 2654,
                        57033, 53635, 62178, 0,
                        27330, 45769],
                    backgroundColor: '#7a462e79',
                    borderRadius: 8,
                    grouped: false,
                    barThickness: 28,
                    borderWidth: 1,
                    hoverBackgroundColor: '#7a462e'
                },
                {
                    label: 'NKACCUs',
                    data: Array(14).fill(null),
                    grouped: false,
                    backgroundColor: '#D46D55',
                    borderRadius: 8,
                    barThickness: 28,
                    hoverBackgroundColor: '#D46D55'
                }
            ]
        },
        "Wunambal Gaambera Uunguu": {
            labels: ['FY 2012/13', 'FY 2013/14', 'FY 2014/15', 'FY 2015/16',
                'FY 2016/17', 'FY 2017/18', 'FY 2018/19', 'FY 2019/20',
                'FY 2020/21', 'FY 2021/22', 'FY 2022/23', 'FY 2023/24',
                'FY 2024/25', 'FY 2025/26'],
            datasets: [
                {
                    label: 'KACCUs',
                    data: [0,
                        36161,
                        18147,
                        20220,
                        21465,
                        34865,
                        948,
                        57127,
                        50477,
                        0,
                        44413,
                        63356,
                        30331,
                        0],
                    backgroundColor: '#7a462e79',
                    borderRadius: 8,
                    grouped: false,
                    barThickness: 28,
                    borderWidth: 1,
                    hoverBackgroundColor: '#7a462e'
                },
                {
                    label: 'NKACCUs',
                    data: Array(13).fill(null),
                    grouped: false,
                    backgroundColor: '#D46D55',
                    borderRadius: 8,
                    barThickness: 28,
                    hoverBackgroundColor: '#D46D55'
                }
            ]
        },
        "Balanggarra": {
            labels: ['FY 2012/13', 'FY 2013/14', 'FY 2014/15', 'FY 2015/16',
                'FY 2016/17', 'FY 2017/18', 'FY 2018/19', 'FY 2019/20',
                'FY 2020/21', 'FY 2021/22', 'FY 2022/23', 'FY 2023/24',
                'FY 2024/25', 'FY 2025/26'],
            datasets: [
                {
                    label: 'KACCUs',
                    data: [0, 68692, 12918, 40409,
                        14206, 48060, 15558, 0,
                        8821, 34359, 0, 0,
                        1041, 35483],
                    backgroundColor: '#7a462e79',
                    borderRadius: 8,
                    grouped: false,
                    barThickness: 28,
                    borderWidth: 1,
                    hoverBackgroundColor: '#7a462e'
                },
                {
                    label: 'NKACCUs',
                    data: Array(13).fill(null),
                    grouped: false,
                    backgroundColor: '#D46D55',
                    borderRadius: 8,
                    barThickness: 28,
                    hoverBackgroundColor: '#D46D55'
                }
            ]
        }
    };

    // Create chart
    function createAccuChart(canvas, data) {
        return new Chart(canvas, { type: 'bar', data, options: chartOptions });
    }

    // Activate a region
    function activateRegion(region) {
        // Update dropdown label
        const item = Array.from(projectsRegionItems).find(i => i.dataset.value === region);
        if (item) projectsRegionSelected.textContent = item.textContent;

        // Hide all groups and destroy charts
        projectsRegionGraphGroups.forEach(g => {
            g.classList.remove('active');
            if (g.chart) g.chart.destroy();
        });

        // Show target group
        const group = document.querySelector(`.projects__graph-group[data-region="${region}"]`);
        if (!group) return;

        group.classList.add('active');
        const canvas = group.querySelector('canvas');
        group.chart = createAccuChart(canvas, regionData[region]);
        runNumberAnimation(group);
    }

    // Dropdown toggle
    projectsRegionSelected.addEventListener('click', () => {
        projectsRegionList.classList.toggle('show');
    });

    // Dropdown item click
    projectsRegionItems.forEach(item => {
        item.addEventListener('click', () => {
            activateRegion(item.dataset.value);
            projectsRegionList.classList.remove('show');
        });
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', e => {
        if (!projectsRegionDropdown.contains(e.target)) projectsRegionList.classList.remove('show');
    });

    // Initialize on load
    const activeGroup = document.querySelector('.projects__graph-group.active');
    if (activeGroup) {
        activateRegion(activeGroup.dataset.region);
    } else if (projectsRegionItems.length > 0) {
        activateRegion(projectsRegionItems[0].dataset.value);
    }
})();