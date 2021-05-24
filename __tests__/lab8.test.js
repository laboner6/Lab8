describe('Basic user flow for SPA ', () => {
  beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500');
    await page.waitForTimeout(500);
  });

  // test 1 is given
  it('Test1: Initial Home Page - Check for 10 Journal Entries', async () => {
    const numEntries = await page.$$eval('journal-entry', (entries) => {
      return entries.length;
    });
    expect(numEntries).toBe(10);
  });

  // test 2 is given
  it('Test2: Make sure <journal-entry> elements are populated', async () => {
    let allArePopulated = true;
    let data, plainValue;
    const entries = await page.$$('journal-entry');
    for (let i = 0; i < entries.length; i++) {
      data = await entries[i].getProperty('entry');
      plainValue = await data.jsonValue();
      if (plainValue.title.length == 0) { allArePopulated = false; }
      if (plainValue.date.length == 0) { allArePopulated = false; }
      if (plainValue.content.length == 0) { allArePopulated = false; }
    }
    expect(allArePopulated).toBe(true);
  }, 30000);

  it('Test3: Clicking first <journal-entry>, new URL should contain /#entry1', async () => {
    // implement test3: Clicking on the first journal entry should update the URL to contain “/#entry1”
    await page.click('journal-entry');
    expect(page.url().includes('#entry1')).toBe(true);
  });

  it('Test4: On first Entry page - checking page header title', async () => {
    // implement test4: Clicking on the first journal entry should update the header text to “Entry 1” 
    const realTitle = await page.$eval('header > h1', (title) => {
      return title.textContent;
    })
    expect(realTitle).toBe("Entry 1");
  });

  it('Test5: On first Entry page - checking <entry-page> contents', async () => {
    /*
     implement test5: Clicking on the first journal entry should contain the following contents: 
        { 
          title: 'You like jazz?',
          date: '4/25/2021',
          content: "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.",
          image: {
            src: 'https://i1.wp.com/www.thepopcornmuncher.com/wp-content/uploads/2016/11/bee-movie.jpg?resize=800%2C455',
            alt: 'bee with sunglasses'
          }
        }
      */
     const testContent = { 
      title: 'You like jazz?',
      date: '4/25/2021',
      content: "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.",
      image: {
        src: 'https://i1.wp.com/www.thepopcornmuncher.com/wp-content/uploads/2016/11/bee-movie.jpg?resize=800%2C455',
        alt: 'bee with sunglasses'
      }
    };

    const realContent = await page.$eval("entry-page", (entry) => {
      return entry.entry;
    })
    expect(realContent).toEqual(testContent);

  }, 10000);

  it('Test6: On first Entry page - checking <body> element classes', async () => {
    // implement test6: Clicking on the first journal entry should update the class attribute of <body> to ‘single-entry’
    const bodyClassName = await page.$eval("body", (entry) => {
      return entry.className;
    })
    expect(bodyClassName).toBe("single-entry");
  });

  it('Test7: Clicking the settings icon, new URL should contain #settings', async () => {
    // implement test7: Clicking on the settings icon should update the URL to contain “/#settings”
    await page.click('img[alt="settings"]');
    expect(page.url().includes('#settings')).toBe(true);
  });

  it('Test8: On Settings page - checking page header title', async () => {
    // implement test8: Clicking on the settings icon should update the header to be “Settings”

  });

  it('Test9: On Settings page - checking <body> element classes', async () => {
    // implement test9: Clicking on the settings icon should update the class attribute of <body> to ‘settings’

  });

  it('Test10: Clicking the back button, new URL should be /#entry1', async() => {
    // implement test10: Clicking on the back button should update the URL to contain ‘/#entry1’

  });

  // define and implement test11: Clicking the back button once should bring the user back to the home page

  it('Test12: On homepage - checking header <h1> element be "Journal Entries', async() => {
    // implement test12: When the user if on the homepage, the header title should be “Journal Entries”
    const realTitle = await page.$eval('header > h1', (title) => {
      return title.textContent;
    })
    expect(realTitle).toBe("Journal Entries");
  });

  // define and implement test13: On the home page the <body> element should not have any class attribute 


  // define and implement test14: Verify the url is correct when clicking on the second entry


  // define and implement test15: Verify the title is current when clicking on the second entry


  // define and implement test16: Verify the entry page contents is correct when clicking on the second entry


  it('Test17: Clicking the third entry, new URL should contain #entry6', async () => {
    // implement test17: Clicking the third entry, new URL should contain #entry6
    const entries = await page.$$('journal-entry');
    await entries[2].click();
    await page.waitForNavigation();
    expect(page.url().includes('/#entry3')).toBe(true);
  });

  it('Test18: Clicking the third entry, new title should be "Entry 3"', async () => {
    // implement test18: Clicking the third entry, new title should be "Entry 3"
    const entries = await page.$$('journal-entry');
    await entries[2].click();
    await page.waitForNavigation();
    const realTitle = await page.$eval('header > h1', (title) => {
      return title.textContent;
    })
    expect(realTitle).toBe("Entry 3");
  });

  it('Test19: Clicking the fourth entry, the audio should have controls property', async () => {
    // implement test19: Clicking the fourth entry, the audio should have controls property
    const entries = await page.$$('journal-entry');
    await entries[3].click();
    const realAudioControl = await page.$eval("audio", (audio) => {
      return audio.controls;
    })
    expect(realAudioControl).toBe(true);
  });

  it('Test20: Clicking the back button, should bring the user back to the home page', async () => {
    // implement test20: Clicking the back button, should bring the user back to the home page
    await page.click(await page.$$('header > h1'));
    expect(page.url()).toBe('http://127.0.0.1:5500/');
  });
  
});
