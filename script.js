document.addEventListener('DOMContentLoaded', () => {
    const jobSearchForm = document.getElementById('job-search-form');
    const filterForm = document.getElementById('filter-form');
    const jobListings = document.getElementById('job-listings ul');
    const languageSwitcher = document.getElementById('language');

    // Placeholder jobs data
    const jobs = [
        { title: 'Farm Laborer Needed', location: 'Springfield', type: 'Full-time', salary: '$25k - $30k' },
        { title: 'Harvesting Assistant', location: 'Greenville', type: 'Part-time', salary: '$15k - $20k' },
        { title: 'Seasonal Worker', location: 'Fairview', type: 'Seasonal', salary: '$10k - $15k' },
    ];

    const translations = {
        en: {
            welcome: 'Welcome to Farmers Community',
            description: 'Connecting farmers, helping each other grow.',
            forum: 'Forum',
            forumDescription: 'Discuss your problems and get help from the community.',
            jobs: 'Find a Job',
            jobSearch: 'Job Search',
            keyword: 'Keyword:',
            location: 'Location:',
            search: 'Search',
            filterJobs: 'Filter Jobs',
            jobType: 'Job Type:',
            salaryRange: 'Salary Range:',
            applyFilters: 'Apply Filters',
            jobListings: 'Job Listings',
            apply: 'Apply',
            localWorkers: 'Local Workers',
            localWorkersDescription: 'Find workers in your nearest area.',
            agriculturalData: 'Agricultural Data',
            dataDescription: 'Charts about soil, crops, seeds, and favorable conditions to grow crops.',
            resources: 'Resources',
            resourcesDescription: 'Helping farmers find proper equipment and seeds to yield more.',
            register: 'Register',
            username: 'Username:',
            email: 'Email:',
            password: 'Password:',
            login: 'Login',
            contact: 'Contact Us'
        },
        hi: {
            welcome: 'किसान समुदाय में आपका स्वागत है',
            description: 'किसानों को जोड़ना, एक-दूसरे की मदद करना।',
            forum: 'फोरम',
            forumDescription: 'अपनी समस्याओं पर चर्चा करें और समुदाय से मदद प्राप्त करें।',
            jobs: 'नौकरी खोजें',
            jobSearch: 'नौकरी खोज',
            keyword: 'कीवर्ड:',
            location: 'स्थान:',
            search: 'खोजें',
            filterJobs: 'नौकरियों को फ़िल्टर करें',
            jobType: 'नौकरी का प्रकार:',
            salaryRange: 'वेतन सीमा:',
            applyFilters: 'फ़िल्टर लागू करें',
            jobListings: 'नौकरी सूची',
            apply: 'आवेदन करें',
            localWorkers: 'स्थानीय कार्यकर्ता',
            localWorkersDescription: 'अपने निकटतम क्षेत्र में श्रमिक खोजें।',
            agriculturalData: 'कृषि डेटा',
            dataDescription: 'मिट्टी, फसलों, बीजों और फसलों को उगाने की अनुकूल स्थितियों के बारे में चार्ट।',
            resources: 'संसाधन',
            resourcesDescription: 'किसानों को अधिक उपज देने के लिए उचित उपकरण और बीज खोजने में मदद करना।',
            register: 'रजिस्टर करें',
            username: 'उपयोगकर्ता नाम:',
            email: 'ईमेल:',
            password: 'पासवर्ड:',
            login: 'लॉग इन करें',
            contact: 'संपर्क करें',
        },
        bn: {
            welcome: 'কৃষকদের কমিউনিটিতে স্বাগতম',
            description: 'কৃষকদের সংযুক্ত করা, একে অপরকে সাহায্য করা।',
            forum: 'ফোরাম',
            forumDescription: 'আপনার সমস্যাগুলি নিয়ে আলোচনা করুন এবং সম্প্রদায়ের সাহায্য পান।',
            jobs: 'একটি চাকরি খুঁজুন',
            jobSearch: 'চাকরি অনুসন্ধান',
            keyword: 'মূলশব্দ:',
            location: 'অবস্থান:',
            search: 'অনুসন্ধান',
            filterJobs: 'চাকরি ফিল্টার করুন',
            jobType: 'চাকরির ধরন:',
            salaryRange: 'বেতন সীমা:',
            applyFilters: 'ফিল্টার প্রয়োগ করুন',
            jobListings: 'চাকরির তালিকা',
            apply: 'আবেদন করুন',
            localWorkers: 'স্থানীয় কর্মী',
            localWorkersDescription: 'আপনার নিকটতম এলাকায় কর্মী খুঁজুন।',
            agriculturalData: 'কৃষি ডেটা',
            dataDescription: 'মাটি, ফসল, বীজ এবং ফসল বাড়ানোর জন্য অনুকূল অবস্থার চার্ট।',
            resources: 'সম্পদ',
            resourcesDescription: 'কৃষকদের আরো ফলন দিতে সঠিক সরঞ্জাম এবং বীজ খুঁজে পেতে সাহায্য করা।',
            register: 'নিবন্ধন করুন',
            username: 'ব্যবহারকারীর নাম:',
            email: 'ইমেল:',
            password: 'পাসওয়ার্ড:',
            login: 'লগইন করুন',
            contact: 'যোগাযোগ করুন',
        }
    };

    function translateContent(lang) {
        document.querySelector('h2').textContent = translations[lang].welcome;
        document.querySelector('p').textContent = translations[lang].description;
        document.querySelectorAll('section h2')[1].textContent = translations[lang].forum;
        document.querySelectorAll('section p')[1].textContent = translations[lang].forumDescription;
        document.querySelectorAll('section h2')[2].textContent = translations[lang].jobs;
        document.querySelectorAll('label[for="keyword"]')[0].textContent = translations[lang].keyword;
        document.querySelectorAll('label[for="location"]')[0].textContent = translations[lang].location;
        document.querySelector('#job-search-form button').textContent = translations[lang].search;
        document.querySelector('#filter-options h3').textContent = translations[lang].filterJobs;
        document.querySelector('label[for="job-type"]').textContent = translations[lang].jobType;
        document.querySelector('label[for="salary-range"]').textContent = translations[lang].salaryRange;
        document.querySelector('#filter-form button').textContent = translations[lang].applyFilters;
        document.querySelector('#job-listings h3').textContent = translations[lang].jobListings;
        document.querySelectorAll('button')[3].textContent = translations[lang].apply;
        document.querySelectorAll('section h2')[3].textContent = translations[lang].localWorkers;
        document.querySelectorAll('section p')[3].textContent = translations[lang].localWorkersDescription;
        document.querySelectorAll('section h2')[4].textContent = translations[lang].agriculturalData;
        document.querySelectorAll('section p')[4].textContent = translations[lang].dataDescription;
        document.querySelectorAll('section h2')[5].textContent = translations[lang].resources;
        document.querySelectorAll('section p')[5].textContent = translations[lang].resourcesDescription;
        document.querySelectorAll('section h2')[6].textContent = translations[lang].register;
        document.querySelector('label[for="username"]').textContent = translations[lang].username;
        document.querySelector('label[for="email"]').textContent = translations[lang].email;
        document.querySelector('label[for="password"]').textContent = translations[lang].password;
        document.querySelectorAll('section h2')[7].textContent = translations[lang].login;
        document.querySelectorAll('label[for="username"]')[1].textContent = translations[lang].username;
        document.querySelectorAll('label[for="password"]')[1].textContent = translations[lang].password;
        document.querySelector('#contact h2').textContent = translations[lang].contact;
    }

    languageSwitcher.addEventListener('change', (e) => {
        translateContent(e.target.value);
    });

    function renderJobs(filteredJobs) {
        jobListings.innerHTML = '';
        filteredJobs.forEach(job => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h4>${job.title}</h4>
                <p>Location: ${job.location}</p>
                <p>Type: ${job.type}</p>
                <p>Salary: ${job.salary}</p>
                <button>${translations[languageSwitcher.value].apply}</button>
            `;
            jobListings.appendChild(li);
        });
    }

    jobSearchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const keyword = document.getElementById('keyword').value.toLowerCase();
        const location = document.getElementById('location').value.toLowerCase();
        const filteredJobs = jobs.filter(job =>
            job.title.toLowerCase().includes(keyword) &&
            job.location.toLowerCase().includes(location)
        );
        renderJobs(filteredJobs);
    });

    filterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const jobType = document.getElementById('job-type').value;
        const salaryRange = document.getElementById('salary-range').value;
        const filteredJobs = jobs.filter(job =>
            (jobType === '' || job.type === jobType) &&
            (salaryRange === '' || (salaryRange === 'below-20k' && job.salary.includes('Below $20k')) ||
                (salaryRange === '20k-40k' && job.salary.includes('$20k - $40k')) ||
                (salaryRange === '40k-60k' && job.salary.includes('$40k - $60k')) ||
                (salaryRange === 'above-60k' && job.salary.includes('Above $60k')))
        );
        renderJobs(filteredJobs);
    });

    // Initial content translation based on default language
    translateContent(languageSwitcher.value);

    // Initial render of jobs list
    renderJobs(jobs);
});