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

        // DOM elements
        const generateButton = document.getElementById('generate-button');
        const verseText = document.getElementById('verse-text');
        const verseReference = document.getElementById('verse-reference');
        const verseCategory = document.getElementById('verse-category');
        const filterButtons = document.querySelectorAll('.filter-button');
        
        let currentCategory = 'all';
        
        // Generate a random verse based on the selected category
        function generateVerse() {
            let filteredVerses = verses;
            
            // Filter verses by category if not "all"
            if (currentCategory !== 'all') {
                filteredVerses = verses.filter(verse => verse.category === currentCategory);
            }
            
            // Get a random verse from the filtered list
            const randomIndex = Math.floor(Math.random() * filteredVerses.length);
            const selectedVerse = filteredVerses[randomIndex];
            
            // Update the display
            verseText.textContent = selectedVerse.text;
            verseReference.textContent = selectedVerse.reference;
            
            // Display the category name
            const categoryDisplayNames = {
                'focus': 'Focus & Attention',
                'overwhelm': 'When Overwhelmed',
                'strength': 'Strength & Energy',
                'peace': 'Peace of Mind',
                'purpose': 'Purpose & Direction',
                'all': 'All Verses'
            };
            
            verseCategory.textContent = categoryDisplayNames[selectedVerse.category] || selectedVerse.category;
            
            // Add a subtle animation
            verseText.style.opacity = '0';
            verseReference.style.opacity = '0';
            
            setTimeout(() => {
                verseText.style.opacity = '1';
                verseReference.style.opacity = '1';
            }, 100);
        }
        
        // Set up event listeners
        generateButton.addEventListener('click', generateVerse);
        
        // Set up filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Update current category
                currentCategory = button.getAttribute('data-category');
                
                // Generate a new verse with the selected category
                generateVerse();
            });
        });
        
        // Generate a verse on page load
        generateVerse();