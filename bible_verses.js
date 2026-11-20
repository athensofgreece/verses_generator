// Purpose: JavaScript file for the Bible Verses Generator project
        // Bible verses organized by categories relevant to ADHD experiences
        const verses = [
            // Strength & Energy verses
            {
                text:"Do not sorrow, for the joy of the LORD is your strength.",
                reference:"Nehemiah 8:10",
                category:"strength"
            },
            {
                text:"The LORD is my strength and song, And He has become my salvation.",
                reference:"Exodus 15:2",
                category:"strength"
            },
            {
                text:"For I, the LORD your God, will hold your right hand, Saying to you, ‘Fear not, I will help you.",
                reference:"Isaiah 41:13",
                category:"strength"
            },
            {
                text:"It is God who arms me with strength, And makes my way perfect.",
                reference:"Psalm 18:32",
                category:"strength"
            },
            {
                text:"The LORD God is my strength; He will make my feet like deer’s feet, And He will make me walk on my high hills.",
                reference:"Habakkuk 3:19",
                category:"strength"
            },
            {
                text:"Be strong and of good courage, do not fear nor be afraid of them; for the LORD your God, He is the One who goes with you. He will not leave you nor forsake you.",
                reference:"Deuteronomy 31:6",
                category:"strength"
            },
            {
                text:"Behold, God is my salvation, I will trust and not be afraid; ‘For YAH, the LORD, is my strength and song; He also has become my salvation.",
                reference:"Isaiah 12:2",
                category:"strength"
            },
            {
                text:"The LORD is my light and my salvation; Whom shall I fear? The LORD is the strength of my life; Of whom shall I be afraid?",
                reference:"Psalm 27:1",
                category:"strength"
            },
            {
                text:"That He would grant you, according to the riches of His glory, to be strengthened with might through His Spirit in the inner man.",
                reference:"Ephesians 3:16",
                category:"strength"
            },
            {
                text:"But the Lord is faithful, who will establish you and guard you from the evil one.",
                reference:"2 Thessalonians 3:3",
                category:"strength"
            },
            {
                text: "I can do all things through Christ who strengthens me.",
                reference: "Philippians 4:13",
                category: "strength"
            },
            {
                text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
                reference: "Galatians 6:9",
                category: "strength"
            },
            {
                text: "But those who wait on the LORD shall renew their strength; They shall mount up with wings like eagles, They shall run and not be weary, They shall walk and not faint.",
                reference: "Isaiah 40:31",
                category: "strength"
            },
            {
                text: "Therefore, my beloved brethren, be steadfast, immovable, always abounding in the work of the Lord, knowing that your labor is not in vain in the Lord.",
                reference: "1 Corinthians 15:58",
                category: "strength"
            },
            {
                text: "The LORD is my strength and my shield; My heart trusted in Him, and I am helped.",
                reference: "Psalm 28:7",
                category: "strength"
            },
            {
                text: "My flesh and my heart fail; But God is the strength of my heart and my portion forever.",
                reference: "Psalm 73:26",
                category: "strength"
            },
            {
                text: "The LORD will give strength to His people; The LORD will bless His people with peace.",
                reference: "Psalm 29:11",
                category: "strength"
            },
            {
                text: "God is our refuge and strength, A very present help in trouble.",
                reference: "Psalm 46:1",
                category: "strength"
            },
            {
                text: "Have you not known? Have you not heard? The everlasting God, the LORD, The Creator of the ends of the earth, Neither faints nor is weary.",
                reference: "Isaiah 40:28",
                category: "strength"
            },
            {
                text: "And He said to me, 'My grace is sufficient for you, for My strength is made perfect in weakness.'",
                reference: "2 Corinthians 12:9",
                category: "strength"
            },
            
            // Peace of Mind verses
            {
                text:"For to be carnally minded is death, but to be spiritually minded is life and peace.",
                reference:"Romans 8:6",
                category:"peace"
            },
            {
                text:"For I know the thoughts that I think toward you, says the LORD, thoughts of peace and not of evil, to give you a future and a hope.",
                reference:"Jeremiah 29:11",
                category:"peace"
            },
            {
               text:"And let the peace of God rule in your hearts, to which also you were called in one body; and be thankful.",
                reference:"Colossians 3:15",
                category:"peace"
            },
            {
                text:"Pursue peace with all people, and holiness, without which no one will see the Lord.",
                reference:"Hebrews 12:14",
                category:"peace"
            },
            {
                text:"Deceit is in the heart of those who devise evil, but counselors of peace have joy.",
                reference:"Proverbs 12:20",
                category:"peace"
            },
            {
                text:"I will hear what God the LORD will speak, for He will speak peace to His people and to His saints; but let them not turn back to folly.",
                reference:"Psalm 85:8",
                category:"peace"
            },
            {
                text:"Now the fruit of righteousness is sown in peace by those who make peace.",
                reference:"James 3:18",
                category:"peace"
            },
            {
                text:"The work of righteousness will be peace, and the effect of righteousness, quietness and assurance forever.",
                reference:"Isaiah 32:17",
                category:"peace"
            },
            {
                text:"These things I have spoken to you, that in Me you may have peace. In the world you will have tribulation; but be of good cheer, I have overcome the world.",
                reference:"John 16:33",
                category:"peace"
            },
            {
                text:"Blessed are the peacemakers, for they shall be called sons of God.",
                reference:"Matthew 5:9",
                category:"peace"
            },
            {
                text: "For God has not given us a spirit of fear, but of power and of love and of a sound mind.",
                reference: "2 Timothy 1:7",
                category: "peace"
            },
            {
                text: "You will keep him in perfect peace, whose mind is stayed on You, because he trusts in You.",
                reference: "Isaiah 26:3",
                category: "peace"
            },
            {
                text: "Be still, and know that I am God.",
                reference: "Psalm 46:10",
                category: "peace"
            },
            {
                text: "For God is not the author of confusion but of peace.",
                reference: "1 Corinthians 14:33",
                category: "peace"
            },
            {
                text: "Peace I leave with you, My peace I give to you; not as the world gives do I give to you. Let not your heart be troubled, neither let it be afraid.",
                reference: "John 14:27",
                category: "peace"
            },
            {
                text: "And the peace of God, which surpasses all understanding, will guard your hearts and minds through Christ Jesus.",
                reference: "Philippians 4:7",
                category: "peace"
            },
            {
                text: "When you lie down, you will not be afraid; Yes, you will lie down and your sleep will be sweet.",
                reference: "Proverbs 3:24",
                category: "peace"
            },
            {
                text: "The LORD gives strength to his people; the LORD blesses his people with peace.",
                reference: "Psalm 29:11",
                category: "peace"
            },
            {
                text: "In peace I will lie down and sleep, for you alone, LORD, make me dwell in safety.",
                reference: "Psalm 4:8",
                category: "peace"
            },
            {
                text: "Great peace have those who love your law, and nothing can make them stumble.",
                reference: "Psalm 119:165",
                category: "peace"
            },
            
            // When Overwhelmed verses
            {
                text: "Be anxious for nothing, but in everything by prayer and supplication, with thanksgiving, let your requests be made known to God; and the peace of God, which surpasses all understanding, will guard your hearts and minds through Christ Jesus.",
                reference: "Philippians 4:6-7",
                category: "overwhelm"
            },
            {
                text: "Come to Me, all you who labor and are heavy laden, and I will give you rest.",
                reference: "Matthew 11:28",
                category: "overwhelm"
            },
            {
                text: "Therefore do not worry about tomorrow, for tomorrow will worry about its own things. Sufficient for the day is its own trouble.",
                reference: "Matthew 6:34",
                category: "overwhelm"
            },
            {
                text: "Cast your burden on the LORD, and He shall sustain you; He shall never permit the righteous to be moved.",
                reference: "Psalm 55:22",
                category: "overwhelm"
            },
            {
                text: "Casting all your care upon Him, for He cares for you.",
                reference: "1 Peter 5:7",
                category: "overwhelm"
            },
            {
                text: "When anxiety was great within me, your consolation brought me joy.",
                reference: "Psalm 94:19",
                category: "overwhelm"
            },
            {
                text: "Cast your cares on the LORD and he will sustain you; he will never let the righteous be shaken.",
                reference: "Psalm 55:22",
                category: "overwhelm"
            },
            {
                text: "I sought the LORD, and He heard me, and delivered me from all my fears.",
                reference: "Psalm 34:4",
                category: "overwhelm"
            },
            {
                text: "Why are you cast down, O my soul? And why are you disquieted within me? Hope in God, for I shall yet praise Him for the help of His countenance.",
                reference: "Psalm 42:5",
                category: "overwhelm"
            },
            {
                text: "The eternal God is your refuge, and underneath are the everlasting arms.",
                reference: "Deuteronomy 33:27",
                category: "overwhelm"
            },
            {
                text:"",
                reference:"",
                category:"overwhelm"
            },
            {
                text:"Fear not, for I am with you; Be not dismayed, for I am your God. I will strengthen you, Yes, I will help you, I will uphold you with My righteous right hand.",
                reference:"Isaiah 41:10",
                category:"overwhelm"
            },
            {
                text:"These things I have spoken to you, that in Me you may have peace. In the world you will have tribulation; but be of good cheer, I have overcome the world.",
                reference: "John 16:33",
                category: "overwhelm"
            },
            {
                text:"From the end of the earth I will cry to You, When my heart is overwhelmed; Lead me to the rock that is higher than I.",
                reference:"Psalm 61:2",
                category:"overwhelm"
            },
            {
                text:"And He said to me, 'My grace is sufficient for you, for My strength is made perfect in weakness.' Therefore most gladly I will rather boast in my infirmities, that the power of Christ may rest upon me.",
                reference:"2 Corinthians 12:9",
                category:"overwhelm"
            },
            {
                text:"Have I not commanded you? Be strong and of good courage; do not be afraid, nor be dismayed, for the LORD your God is with you wherever you go.",
                reference:"Joshua 1:9",
                category:"overwhelm"
            },
            {
                text:"God is our refuge and strength, A very present help in trouble. Therefore we will not fear, Even though the earth be removed, And though the mountains be carried into the midst of the sea.",
                reference:"Psalm 46:1-2",
                category:"overwhelm"
            },
            {
                text:"And we know that all things work together for good to those who love God, to those who are the called according to His purpose.",
                reference: "Romans 8:28",
                category: "overwhelm"
            },
            {
                text:"You will keep him in perfect peace, whose mind is stayed on You, because he trusts in You.",
                reference:"Isaiah 26:3",
                category:"overwhelm"
            },
            {
                text:"Trust in the LORD with all your heart, And lean not on your own understanding; In all your ways acknowledge Him, And He shall direct your paths.",
                reference:"Proverbs 3:5-6",
                category:"overwhelm"
            },
            {
                text:"Through the LORD’s mercies we are not consumed, Because His compassions fail not. They are new every morning; Great is Your faithfulness.",
                reference:"Lamentations 3:22-23",
                category:"overwhelm"
            },
            
            // Focus & Attention verses
            {
                text: "Finally, brethren, whatever things are true, whatever things are noble, whatever things are just, whatever things are pure, whatever things are lovely, whatever things are of good report, if there is any virtue and if there is anything praiseworthy—meditate on these things.",
                reference: "Philippians 4:8",
                category: "focus"
            },
            {
                text: "Set your mind on things above, not on things on the earth.",
                reference: "Colossians 3:2",
                category: "focus"
            },
            {
                text: "Commit your works to the LORD, and your thoughts will be established.",
                reference: "Proverbs 16:3",
                category: "focus"
            },
            {
                text: "Let all things be done decently and in order.",
                reference: "1 Corinthians 14:40",
                category: "focus"
            },
            {
                text: "The mind of man plans his way, but the LORD directs his steps.",
                reference: "Proverbs 16:9",
                category: "focus"
            },
            {
                text: "But seek first the kingdom of God and His righteousness, and all these things shall be added to you.",
                reference: "Matthew 6:33",
                category: "focus"
            },
            {
                text: "For the weapons of our warfare are not carnal but mighty in God for pulling down strongholds, casting down arguments and every high thing that exalts itself against the knowledge of God, bringing every thought into captivity to the obedience of Christ.",
                reference: "2 Corinthians 10:4-5",
                category: "focus"
            },
            {
                text: "Ponder the path of your feet, and let all your ways be established.",
                reference: "Proverbs 4:26",
                category: "focus"
            },
            {
                text: "Let the words of my mouth and the meditation of my heart be acceptable in Your sight, O LORD, my strength and my Redeemer.",
                reference: "Psalm 19:14",
                category: "focus"
            },
            {
                text: "Watch and pray, lest you enter into temptation. The spirit indeed is willing, but the flesh is weak.",
                reference: "Matthew 26:41",
                category: "focus"
            },
            {
                text:"Let us run with endurance the race that is set before us, looking unto Jesus, the author and finisher of our faith.",
                reference:"Hebrews 12:1-2",
                category:"focus"
            },
            {
                text:"I will meditate on Your precepts, And contemplate Your ways.",
                reference:"Psalm 119:15",
                category:"focus"
            },
            {
                text:"With my soul I have desired You in the night, Yes, by my spirit within me I will seek You early; For when Your judgments are in the earth, The inhabitants of the world will learn righteousness.",
                reference:"Isaiah 26:9",
                category:"focus"
            },
            {
                text:"Be diligent to present yourself approved to God, a worker who does not need to be ashamed, rightly dividing the word of truth.",
                reference:"2 Timothy 2:15",
                category:"focus"
            },
            {
                text:"But the end of all things is at hand; therefore be serious and watchful in your prayers.",
                reference:"1 Peter 4:7",
                category:"focus"
            },
            {
                text:"But the wisdom that is from above is first pure, then peaceable, gentle, willing to yield, full of mercy and good fruits, without partiality and without hypocrisy.",
                reference:"James 3:17",
                category:"focus"
            },
            {
                text:"He is a double-minded man, unstable in all his ways.",
                reference:"James 1:8",
                category:"focus"
            },
            {
                text:"Let your eyes look straight ahead, And your eyelids look right before you.",
                reference:"Proverbs 4:25",
                category:"focus"
            },
            {
                text:"And do not be conformed to this world, but be transformed by the renewing of your mind, that you may prove what is that good and acceptable and perfect will of God.",
                reference:"Romans 12:2",
                category:"focus"
            },
            {
                text:"Praying always with all prayer and supplication in the Spirit, being watchful to this end with all perseverance and supplication for all the saints.",
                reference:"Ephesians 6:18",
                category:"focus"
            },
            {
                text:"And you shall love the Lord your God with all your heart, with all your soul, with all your mind, and with all your strength.",
                reference:"Mark 12:30",
                category:"focus"
            },
            {
                text:"And whatever you do, do it heartily, as to the Lord and not to men.",
                reference:"Colossians 3:23",
                category:"focus"
            },
            
            // Purpose & Direction verses
            {
                text:"Your ears shall hear a word behind you, saying, 'This is the way, walk in it,' whenever you turn to the right hand or whenever you turn to the left.",
                reference:"Isaiah 30:21",
                category:"purpose"
            },
            {
                text:"He has shown you, O man, what is good; And what does the LORD require of you but to do justly, to love mercy, and to walk humbly with your God?",
                reference:"Micah 6:8",
                category:"purpose"
            },
            {
                text:"You did not choose Me, but I chose you and appointed you that you should go and bear fruit, and that your fruit should remain.",
                reference:"John 15:16",
                category:"purpose"
            },
            {
                text:"Commit your works to the LORD, And your thoughts will be established.",
                reference:"Proverbs 16:3",
                category:"purpose"
            },
            {
                text:"If any of you lacks wisdom, let him ask of God, who gives to all liberally and without reproach, and it will be given to him.",
                reference:"James 1:5",
                category:"purpose"
            },
            {
                text:"Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you. For everyone who asks receives, and he who seeks finds, and to him who knocks it will be opened.",
                reference:"Matthew 7:7-8",
                category:"purpose"
            },
            {
                text:"Show me Your ways, O LORD; Teach me Your paths. Lead me in Your truth and teach me, For You are the God of my salvation; On You I wait all the day.",
                reference:"Psalm 25:4-5",
                category:"purpose"
            },
            {
                text:"But you are a chosen generation, a royal priesthood, a holy nation, His own special people, that you may proclaim the praises of Him who called you out of darkness into His marvelous light.",
                reference:"1 Peter 2:9",
                category:"purpose"
            },
            {
                text:"But none of these things move me; nor do I count my life dear to myself, so that I may finish my race with joy, and the ministry which I received from the Lord Jesus, to testify to the gospel of the grace of God.",
                reference:"Acts 20:24",
                category:"purpose"
            },
            {
                text:"All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness, that the man of God may be complete, thoroughly equipped for every good work.",
                reference:"2 Timothy 3:16-17",
                category:"purpose"
            },
            {
                text: "Trust in the LORD with all your heart, and lean not on your own understanding; In all your ways acknowledge Him, and He shall direct your paths.",
                reference: "Proverbs 3:5-6",
                category: "purpose"
            },
            {
                text: "For I know the thoughts that I think toward you, says the LORD, thoughts of peace and not of evil, to give you a future and a hope.",
                reference: "Jeremiah 29:11",
                category: "purpose"
            },
            {
                text: "Do not remember the former things, nor consider the things of old. Behold, I will do a new thing, now it shall spring forth; Shall you not know it?",
                reference: "Isaiah 43:18-19",
                category: "purpose"
            },
            {
                text: "The LORD will perfect that which concerns me; Your mercy, O LORD, endures forever; Do not forsake the works of Your hands.",
                reference: "Psalm 138:8",
                category: "purpose"
            },
            {
                text: "Many are the plans in a person's heart, but it is the LORD's purpose that prevails.",
                reference: "Proverbs 19:21",
                category: "purpose"
            },
            {
                text: "And we know that all things work together for good to those who love God, to those who are the called according to His purpose.",
                reference: "Romans 8:28",
                category: "purpose"
            },
            {
                text: "Your eyes saw my substance, being yet unformed. And in Your book they all were written, the days fashioned for me, when as yet there were none of them.",
                reference: "Psalm 139:16",
                category: "purpose"
            },
            {
                text: "For we are His workmanship, created in Christ Jesus for good works, which God prepared beforehand that we should walk in them.",
                reference: "Ephesians 2:10",
                category: "purpose"
            },
            {
                text: "I will instruct you and teach you in the way you should go; I will guide you with My eye.",
                reference: "Psalm 32:8",
                category: "purpose"
            },
            {
                text: "Commit your way to the LORD, trust also in Him, and He shall bring it to pass.",
                reference: "Psalm 37:5",
                category: "purpose"
            }
        ];

        // Display names for the original verse categories
        const categoryDisplayNames = {
            'focus': 'Focus & Attention',
            'overwhelm': 'When Overwhelmed',
            'strength': 'Strength & Energy',
            'peace': 'Peace of Mind',
            'purpose': 'Purpose & Direction'
        };
        
        // Skip incomplete entries (e.g. empty placeholders) without changing the data above
        const usableVerses = verses.filter(verse =>
            verse.text && verse.text.trim() && verse.reference && verse.reference.trim()
        );
        
        // Moods shown to the user. Each mood pulls whole categories and/or
        // hand-picked references from the existing verse list.
        const moods = {
            all: { label: 'Any verse' },
            distracted: { label: 'Distracted', categories: ['focus'] },
            anxious: {
                label: 'Anxious',
                categories: ['peace'],
                references: ['Philippians 4:6-7', '1 Peter 5:7', 'Psalm 94:19', 'Psalm 34:4', 'Isaiah 41:10', 'Matthew 6:34']
            },
            overwhelmed: { label: 'Overwhelmed', categories: ['overwhelm'] },
            strength: { label: 'Need Strength', categories: ['strength'] },
            hope: {
                label: 'Need Hope',
                references: [
                    'Jeremiah 29:11', 'Isaiah 40:31', 'Lamentations 3:22-23', 'Psalm 42:5',
                    'Romans 8:28', 'Isaiah 43:18-19', 'Psalm 73:26', 'John 16:33',
                    'Psalm 138:8', 'Psalm 27:1', 'Nehemiah 8:10', 'Psalm 46:1',
                    'Isaiah 41:10', 'Deuteronomy 31:6', 'Psalm 28:7'
                ]
            },
            direction: { label: 'Need Direction', categories: ['purpose'] }
        };
        
        // DOM elements
        const generateButton = document.getElementById('generate-button');
        const verseText = document.getElementById('verse-text');
        const verseReference = document.getElementById('verse-reference');
        const verseCategory = document.getElementById('verse-category');
        const verseBox = document.querySelector('.verse-box');
        const moodButtons = document.querySelectorAll('.mood-button');
        
        let currentMood = 'all';
        let currentVerse = null;
        
        function versesForMood(moodId) {
            const mood = moods[moodId];
            if (!mood || moodId === 'all') {
                return usableVerses;
            }
            const categories = mood.categories || [];
            const references = mood.references || [];
            const matches = usableVerses.filter(verse => categories.includes(verse.category));
            
            // Add hand-picked references once each, even if listed in several categories
            const seen = new Set(matches.map(verse => verse.reference));
            usableVerses.forEach(verse => {
                if (references.includes(verse.reference) && !seen.has(verse.reference)) {
                    seen.add(verse.reference);
                    matches.push(verse);
                }
            });
            return matches;
        }
        
        // Pick a random verse, avoiding an immediate repeat when possible
        function pickRandomVerse(list, previous) {
            const options = list.length > 1 ? list.filter(verse => verse !== previous) : list;
            return options[Math.floor(Math.random() * options.length)];
        }
        
        // Generate a random verse for the selected mood
        function generateVerse() {
            if (speakingButton && verseBox.contains(speakingButton)) {
                stopSpeaking();
            }
            const selectedVerse = pickRandomVerse(versesForMood(currentMood), currentVerse);
            currentVerse = selectedVerse;
            
            // Update the display
            verseText.textContent = selectedVerse.text;
            verseReference.textContent = selectedVerse.reference;
            verseCategory.textContent = currentMood === 'all'
                ? categoryDisplayNames[selectedVerse.category] || selectedVerse.category
                : moods[currentMood].label;
            updateFavoriteButtons();
            
            // Restart the gentle fade-in (disabled for prefers-reduced-motion in CSS)
            verseBox.classList.remove('fade-in');
            void verseBox.offsetWidth;
            verseBox.classList.add('fade-in');
        }
        
        // On small screens, scroll the new verse into view after picking a mood
        function bringVerseIntoView() {
            const rect = verseBox.getBoundingClientRect();
            if (rect.top < 0 || rect.bottom > window.innerHeight) {
                const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                verseBox.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest' });
            }
        }
        
        // ---- Daily verse ----
        // One entry per reference so the daily rotation never shows the same verse twice in a row
        const dailyPool = usableVerses.filter((verse, index) =>
            usableVerses.findIndex(other => other.reference === verse.reference) === index
        );
        
        // A step that shares no factor with the pool size visits every verse before repeating
        const dailyStep = (() => {
            const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
            let step = 37;
            while (gcd(step, dailyPool.length) !== 1) {
                step++;
            }
            return step;
        })();
        
        const dailyText = document.getElementById('daily-text');
        const dailyReference = document.getElementById('daily-reference');
        const dailyDate = document.getElementById('daily-date');
        let dailyVerse = null;
        let dailyDayNumber = null;
        
        // Whole days since 1970-01-01 in the user's local calendar (DST-safe)
        function localDayNumber(date) {
            return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000);
        }
        
        function verseForDay(dayNumber) {
            return dailyPool[(dayNumber * dailyStep) % dailyPool.length];
        }
        
        function showDailyVerse() {
            const now = new Date();
            const dayNumber = localDayNumber(now);
            if (dayNumber === dailyDayNumber) {
                return;
            }
            dailyDayNumber = dayNumber;
            dailyVerse = verseForDay(dayNumber);
            dailyText.textContent = dailyVerse.text;
            dailyReference.textContent = dailyVerse.reference;
            dailyDate.textContent = now.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' });
            updateFavoriteButtons();
        }
        
        // Refresh the daily verse after midnight, including when a tab is reopened
        function scheduleDailyRefresh() {
            const now = new Date();
            const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 1);
            setTimeout(() => {
                showDailyVerse();
                scheduleDailyRefresh();
            }, nextMidnight - now);
        }
        
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'visible') {
                showDailyVerse();
            }
        });
        
        // ---- Favorites ----
        const FAVORITES_KEY = 'versesGenerator.favorites';
        const favoritesList = document.getElementById('favorites-list');
        const favoritesEmpty = document.getElementById('favorites-empty');
        const favoritesCount = document.getElementById('favorites-count');
        const tabButtons = document.querySelectorAll('.tab-button');
        const views = {
            home: document.getElementById('view-home'),
            journal: document.getElementById('view-journal'),
            favorites: document.getElementById('view-favorites')
        };
        
        // Reference + text, because a few references appear with different wording
        const verseKey = verse => verse.reference + '|' + verse.text;
        
        function loadFavorites() {
            try {
                const saved = JSON.parse(localStorage.getItem(FAVORITES_KEY));
                return Array.isArray(saved)
                    ? saved.filter(verse => verse && typeof verse.text === 'string' && typeof verse.reference === 'string')
                    : [];
            } catch (error) {
                return [];
            }
        }
        
        let favorites = loadFavorites();
        
        function saveFavorites() {
            try {
                localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
            } catch (error) {
                // Storage unavailable (e.g. private browsing): favorites last for this visit only
            }
        }
        
        function isFavorite(verse) {
            return Boolean(verse) && favorites.some(saved => verseKey(saved) === verseKey(verse));
        }
        
        function toggleFavorite(verse) {
            if (isFavorite(verse)) {
                favorites = favorites.filter(saved => verseKey(saved) !== verseKey(verse));
            } else {
                favorites.unshift({ text: verse.text, reference: verse.reference, category: verse.category });
            }
            saveFavorites();
            renderFavorites();
        }
        
        // Find the verse an action button belongs to (daily card, random card or a favorite)
        function verseForActions(element) {
            const actions = element.closest('.verse-actions');
            if (actions.dataset.target === 'daily') {
                return dailyVerse;
            }
            if (actions.dataset.target === 'random') {
                return currentVerse;
            }
            if (actions.dataset.target === 'journal') {
                return journal.find(entry => verseKey(entry) === actions.dataset.key);
            }
            return favorites.find(saved => verseKey(saved) === actions.dataset.key);
        }
        
        function updateFavoriteButtons() {
            document.querySelectorAll('[data-action="favorite"]').forEach(button => {
                const saved = isFavorite(verseForActions(button));
                button.setAttribute('aria-pressed', String(saved));
                button.textContent = saved ? '\u2605 Saved' : '\u2606 Save';
            });
        }
        
        function createActionButton(action, label) {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'action-button';
            button.dataset.action = action;
            button.textContent = label;
            if (action === 'listen') {
                button.setAttribute('aria-pressed', 'false');
            }
            return button;
        }
        
        function createFavoriteItem(verse) {
            const item = document.createElement('li');
            item.className = 'favorite-item';
            
            const text = document.createElement('div');
            text.className = 'verse-text';
            text.textContent = verse.text;
            
            const reference = document.createElement('div');
            reference.className = 'verse-reference';
            reference.textContent = verse.reference;
            
            const actions = document.createElement('div');
            actions.className = 'verse-actions';
            actions.dataset.key = verseKey(verse);
            actions.append(
                createActionButton('copy', 'Copy'),
                createActionButton('share', 'Share'),
                createActionButton('listen', '\u25B6 Listen'),
                createActionButton('reflect', '\u270E Reflect'),
                createActionButton('remove', 'Remove')
            );
            
            item.append(text, reference, actions);
            return item;
        }
        
        function renderFavorites() {
            favoritesList.replaceChildren(...favorites.map(createFavoriteItem));
            favoritesEmpty.hidden = favorites.length > 0;
            favoritesCount.textContent = favorites.length;
            updateFavoriteButtons();
        }
        
        function showView(name) {
            Object.entries(views).forEach(([key, view]) => {
                view.hidden = key !== name;
            });
            tabButtons.forEach(button => {
                const active = button.dataset.view === name;
                button.classList.toggle('active', active);
                button.setAttribute('aria-pressed', String(active));
            });
        }
        
        tabButtons.forEach(button => {
            button.addEventListener('click', () => showView(button.dataset.view));
        });
        
        // Another open tab changed favorites: reload so this tab doesn't overwrite them
        window.addEventListener('storage', event => {
            if (event.key === FAVORITES_KEY || event.key === null) {
                favorites = loadFavorites();
                renderFavorites();
            }
            if (event.key === JOURNAL_KEY || event.key === null) {
                journal = loadJournal();
                renderJournal();
            }
        });
        
        // ---- Copy & share ----
        const toast = document.getElementById('toast');
        let toastTimer = null;
        
        function showToast(message) {
            toast.textContent = message;
            toast.classList.add('visible');
            clearTimeout(toastTimer);
            toastTimer = setTimeout(() => toast.classList.remove('visible'), 2500);
        }
        
        function formatVerse(verse) {
            return '"' + verse.text + '" \u2014 ' + verse.reference;
        }
        
        async function copyText(text) {
            if (navigator.clipboard && window.isSecureContext) {
                try {
                    await navigator.clipboard.writeText(text);
                    return true;
                } catch (error) {
                    // Fall through to the legacy method below
                }
            }
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.setAttribute('readonly', '');
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            let copied = false;
            try {
                copied = document.execCommand('copy');
            } catch (error) {
                copied = false;
            }
            textarea.remove();
            return copied;
        }
        
        async function copyVerse(verse) {
            const copied = await copyText(formatVerse(verse));
            showToast(copied ? 'Verse copied' : 'Could not copy. Please select the text instead.');
        }
        
        async function shareVerse(verse) {
            if (navigator.share) {
                try {
                    await navigator.share({ title: verse.reference, text: formatVerse(verse), url: window.location.href });
                    return;
                } catch (error) {
                    if (error.name === 'AbortError') {
                        return; // The user closed the share sheet
                    }
                }
            }
            const copied = await copyText(formatVerse(verse));
            showToast(copied ? 'Sharing isn\u2019t available here, so the verse was copied' : 'Could not share or copy this verse.');
        }
        
        // ---- Read aloud ----
        const canSpeak = Boolean(window.speechSynthesis && window.SpeechSynthesisUtterance);
        let speakingButton = null;
        
        if (!canSpeak) {
            document.documentElement.classList.add('no-speech');
        }
        
        // "Psalm 34:4" reads as "Psalm chapter 34, verse 4" instead of a time
        function spokenReference(reference) {
            return reference.replace(/(\d+):(\d+)(?:-(\d+))?/, (match, chapter, first, last) =>
                'chapter ' + chapter + ', ' + (last ? 'verses ' + first + ' to ' + last : 'verse ' + first)
            );
        }
        
        function resetListenButton() {
            if (speakingButton) {
                speakingButton.textContent = '\u25B6 Listen';
                speakingButton.setAttribute('aria-pressed', 'false');
                speakingButton = null;
            }
        }
        
        function stopSpeaking() {
            if (canSpeak) {
                window.speechSynthesis.cancel();
            }
            resetListenButton();
        }
        
        // Tapping Listen again (now "Stop") stops reading
        function speakVerse(verse, button) {
            const wasSpeaking = speakingButton === button;
            stopSpeaking();
            if (wasSpeaking || !canSpeak) {
                return;
            }
            const utterance = new SpeechSynthesisUtterance(verse.text + ' ' + spokenReference(verse.reference));
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            utterance.onend = utterance.onerror = () => {
                if (speakingButton === button) {
                    resetListenButton();
                }
            };
            speakingButton = button;
            button.textContent = '\u25A0 Stop';
            button.setAttribute('aria-pressed', 'true');
            window.speechSynthesis.speak(utterance);
        }
        
        // One listener handles every verse action button, including ones added later
        document.addEventListener('click', event => {
            const button = event.target.closest('[data-action]');
            if (!button) {
                return;
            }
            const verse = verseForActions(button);
            if (!verse) {
                return;
            }
            const action = button.dataset.action;
            if (action === 'favorite' || action === 'remove') {
                toggleFavorite(verse);
            } else if (action === 'copy') {
                copyVerse(verse);
            } else if (action === 'share') {
                shareVerse(verse);
            } else if (action === 'listen') {
                speakVerse(verse, button);
            } else if (action === 'reflect') {
                openJournal(verse);
            } else if (action === 'delete-note') {
                deleteJournalEntry(verse);
            }
        });
        
        // Set up event listeners
        generateButton.addEventListener('click', generateVerse);
        
        // Set up mood buttons
        moodButtons.forEach(button => {
            button.addEventListener('click', () => {
                moodButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.setAttribute('aria-pressed', 'false');
                });
                button.classList.add('active');
                button.setAttribute('aria-pressed', 'true');
                
                currentMood = button.getAttribute('data-mood');
                
                // Generate a new verse for the selected mood
                generateVerse();
                bringVerseIntoView();
            });
        });
        
        // ---- Dark mode ----
        // The inline script in index.html sets data-theme before first paint
        const THEME_KEY = 'versesGenerator.theme';
        const themeToggle = document.getElementById('theme-toggle');
        
        function applyTheme(theme) {
            const dark = theme === 'dark';
            const label = dark ? 'Switch to light mode' : 'Switch to dark mode';
            document.documentElement.setAttribute('data-theme', theme);
            themeToggle.textContent = dark ? '\u2600' : '\u263E';
            themeToggle.setAttribute('aria-label', label);
            themeToggle.title = label;
        }
        
        function savedTheme() {
            try {
                return localStorage.getItem(THEME_KEY);
            } catch (error) {
                return null;
            }
        }
        
        themeToggle.addEventListener('click', () => {
            const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            try {
                localStorage.setItem(THEME_KEY, next);
            } catch (error) {
                // Storage unavailable: the choice lasts for this visit only
            }
        });
        
        // Follow the system setting until the user picks a theme
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
                if (!savedTheme()) {
                    applyTheme(event.matches ? 'dark' : 'light');
                }
            });
        }
        
        applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
        
        // ---- Dialogs ----
        // Native <dialog> with a plain open-attribute fallback for older browsers
        function openDialog(dialog) {
            if (typeof dialog.showModal === 'function') {
                dialog.showModal();
            } else {
                dialog.setAttribute('open', '');
            }
        }
        
        function closeDialog(dialog) {
            if (typeof dialog.close === 'function') {
                dialog.close();
            } else {
                dialog.removeAttribute('open');
            }
        }
        
        // Clicking the dimmed backdrop closes a dialog
        document.querySelectorAll('dialog').forEach(dialog => {
            dialog.addEventListener('click', event => {
                if (event.target === dialog) {
                    closeDialog(dialog);
                }
            });
        });
        
        // ---- Reading settings ----
        // The inline script in index.html applies saved settings before first paint
        const SETTINGS_KEY = 'versesGenerator.settings';
        const settingsDialog = document.getElementById('settings-dialog');
        const readingDefaults = { size: 'medium', font: 'default' };
        
        function loadReadingSettings() {
            try {
                const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY));
                return Object.assign({}, readingDefaults, saved && typeof saved === 'object' ? saved : {});
            } catch (error) {
                return Object.assign({}, readingDefaults);
            }
        }
        
        let readingSettings = loadReadingSettings();
        
        function applyReadingSettings() {
            document.documentElement.setAttribute('data-text-size', readingSettings.size);
            document.documentElement.setAttribute('data-font', readingSettings.font);
            settingsDialog.querySelectorAll('input[type="radio"]').forEach(input => {
                input.checked = readingSettings[input.name] === input.value;
            });
        }
        
        settingsDialog.addEventListener('change', event => {
            if (event.target.name in readingDefaults) {
                readingSettings[event.target.name] = event.target.value;
                applyReadingSettings();
                try {
                    localStorage.setItem(SETTINGS_KEY, JSON.stringify(readingSettings));
                } catch (error) {
                    // Storage unavailable: settings last for this visit only
                }
            }
        });
        
        document.getElementById('settings-button').addEventListener('click', () => openDialog(settingsDialog));
        
        applyReadingSettings();
        
        // ---- Breathing pause ----
        const BREATH_IN_SECONDS = 4;
        const BREATH_CYCLE_SECONDS = 10;
        const pauseDialog = document.getElementById('pause-dialog');
        const pauseTimer = document.getElementById('pause-timer');
        const breathCue = document.getElementById('breath-cue');
        const pauseStop = document.getElementById('pause-stop');
        let pauseInterval = null;
        let pauseEndsAt = 0;
        let pauseStartedAt = 0;
        let wakeLock = null;
        
        function formatSeconds(totalSeconds) {
            const minutes = Math.floor(totalSeconds / 60);
            const seconds = totalSeconds % 60;
            return minutes + ':' + String(seconds).padStart(2, '0');
        }
        
        // Keep the screen on during a pause where supported
        async function keepScreenOn() {
            try {
                if (navigator.wakeLock) {
                    wakeLock = await navigator.wakeLock.request('screen');
                }
            } catch (error) {
                wakeLock = null;
            }
        }
        
        function releaseScreen() {
            if (wakeLock) {
                wakeLock.release().catch(() => {});
                wakeLock = null;
            }
        }
        
        function stopPauseTimer() {
            clearInterval(pauseInterval);
            pauseInterval = null;
            releaseScreen();
        }
        
        function finishPause() {
            stopPauseTimer();
            pauseTimer.textContent = formatSeconds(0);
            breathCue.textContent = 'Well done. Take this peace with you.';
            pauseDialog.classList.add('finished');
            pauseStop.textContent = 'Close';
        }
        
        function updatePause() {
            const now = Date.now();
            const left = Math.max(0, Math.ceil((pauseEndsAt - now) / 1000));
            pauseTimer.textContent = formatSeconds(left);
            if (left === 0) {
                finishPause();
                return;
            }
            const elapsed = ((now - pauseStartedAt) / 1000) % BREATH_CYCLE_SECONDS;
            breathCue.textContent = elapsed < BREATH_IN_SECONDS ? 'Breathe in' : 'Breathe out';
        }
        
        function startPause(minutes) {
            const verse = currentVerse || dailyVerse;
            document.getElementById('pause-text').textContent = verse.text;
            document.getElementById('pause-reference').textContent = verse.reference;
            pauseDialog.classList.remove('finished');
            pauseStop.textContent = 'End pause';
            pauseStartedAt = Date.now();
            pauseEndsAt = pauseStartedAt + minutes * 60000;
            stopPauseTimer();
            updatePause();
            pauseInterval = setInterval(updatePause, 250);
            keepScreenOn();
            openDialog(pauseDialog);
        }
        
        document.querySelectorAll('.pause-option').forEach(button => {
            button.addEventListener('click', () => startPause(Number(button.dataset.minutes)));
        });
        
        pauseStop.addEventListener('click', () => closeDialog(pauseDialog));
        pauseDialog.addEventListener('close', stopPauseTimer);
        
        // ---- Reflection journal ----
        const JOURNAL_KEY = 'versesGenerator.journal';
        const journalDialog = document.getElementById('journal-dialog');
        const journalNote = document.getElementById('journal-note');
        const journalPrompt = document.getElementById('journal-prompt');
        const journalDelete = document.getElementById('journal-delete');
        const journalList = document.getElementById('journal-list');
        const journalEmpty = document.getElementById('journal-empty');
        const reflectionPrompts = [
            'What is one word from this verse you want to carry today?',
            'How does this verse speak to how you feel right now?',
            'What is one small step this verse invites you to take?',
            'What would change if you believed this today?',
            'Who could you share this encouragement with?',
            'What do you want to tell God about this?',
            'Where do you need this verse most this week?',
            'What feels hard to believe here, and why?'
        ];
        let journalVerse = null;
        
        function loadJournal() {
            try {
                const saved = JSON.parse(localStorage.getItem(JOURNAL_KEY));
                return Array.isArray(saved)
                    ? saved.filter(entry => entry && typeof entry.reference === 'string' && typeof entry.note === 'string')
                    : [];
            } catch (error) {
                return [];
            }
        }
        
        let journal = loadJournal();
        
        function saveJournal() {
            try {
                localStorage.setItem(JOURNAL_KEY, JSON.stringify(journal));
            } catch (error) {
                // Storage unavailable: notes last for this visit only
            }
        }
        
        // The same verse always gets the same prompt
        function promptFor(verse) {
            let hash = 0;
            for (const character of verseKey(verse)) {
                hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
            }
            return reflectionPrompts[hash % reflectionPrompts.length];
        }
        
        function journalEntryFor(verse) {
            return journal.find(entry => verseKey(entry) === verseKey(verse));
        }
        
        function openJournal(verse) {
            const entry = journalEntryFor(verse);
            journalVerse = { text: verse.text, reference: verse.reference, category: verse.category };
            document.getElementById('journal-verse-text').textContent = verse.text;
            document.getElementById('journal-verse-reference').textContent = verse.reference;
            journalPrompt.textContent = entry ? entry.prompt : promptFor(verse);
            journalNote.value = entry ? entry.note : '';
            journalDelete.hidden = !entry;
            openDialog(journalDialog);
            journalNote.focus();
        }
        
        // Closing the dialog in any way (Done, X, Escape, backdrop) saves the note
        function saveJournalNote() {
            if (!journalVerse) {
                return;
            }
            const verse = journalVerse;
            const note = journalNote.value.trim();
            journalVerse = null;
            journal = loadJournal().filter(entry => verseKey(entry) !== verseKey(verse));
            if (note) {
                journal.unshift(Object.assign({}, verse, {
                    note: note,
                    prompt: journalPrompt.textContent,
                    updatedAt: new Date().toISOString()
                }));
            }
            saveJournal();
            renderJournal();
            if (note) {
                showToast('Note saved');
            }
        }
        
        function deleteJournalEntry(verse) {
            if (!window.confirm('Delete this note? This can\u2019t be undone.')) {
                return false;
            }
            journal = loadJournal().filter(entry => verseKey(entry) !== verseKey(verse));
            saveJournal();
            renderJournal();
            showToast('Note deleted');
            return true;
        }
        
        // submit and cancel fire before the dialog closes, so the note is stored right away
        journalDialog.addEventListener('submit', saveJournalNote);
        journalDialog.addEventListener('cancel', saveJournalNote);
        journalDialog.addEventListener('close', saveJournalNote);
        
        journalDelete.addEventListener('click', () => {
            const verse = journalVerse;
            if (verse && deleteJournalEntry(verse)) {
                journalVerse = null;
                closeDialog(journalDialog);
            }
        });
        
        function createJournalItem(entry) {
            const item = document.createElement('li');
            item.className = 'favorite-item journal-item';
            
            const date = document.createElement('p');
            date.className = 'journal-date';
            date.textContent = new Date(entry.updatedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
            
            const text = document.createElement('div');
            text.className = 'verse-text';
            text.textContent = entry.text;
            
            const reference = document.createElement('div');
            reference.className = 'verse-reference';
            reference.textContent = entry.reference;
            
            const prompt = document.createElement('p');
            prompt.className = 'journal-item-prompt';
            prompt.textContent = entry.prompt;
            
            const note = document.createElement('p');
            note.className = 'journal-item-note';
            note.textContent = entry.note;
            
            const actions = document.createElement('div');
            actions.className = 'verse-actions';
            actions.dataset.target = 'journal';
            actions.dataset.key = verseKey(entry);
            actions.append(
                createActionButton('reflect', '\u270E Edit'),
                createActionButton('listen', '\u25B6 Listen'),
                createActionButton('delete-note', 'Delete')
            );
            
            item.append(date, text, reference, prompt, note, actions);
            return item;
        }
        
        function renderJournal() {
            journalList.replaceChildren(...journal.map(createJournalItem));
            journalEmpty.hidden = journal.length > 0;
        }
        
        // Initial render
        showDailyVerse();
        scheduleDailyRefresh();
        renderFavorites();
        renderJournal();
        generateVerse();
