import { sleep, moveTo, click, doubleClick, keyDown, keyUp, scroll } from 'robotjs';

sleep(3000);

while (true) {
    
    // purchase all upgrades
    sleep(1300);
    moveTo(1750, 150);
    click();
    sleep(1000);
    click();
    sleep(1000);
    click();

    // scroll down to buy a fractal engine
    moveTo(1750, 840);
    scroll(-430);
    sleep(100);
    click();
    moveTo(1750, 900);
    click();

    // buys 1 idleverse, then 100 of each last four
    moveTo(1750, 1030);
    click();
    keyDown('shift');
    doubleClick();
    moveTo(1750, 970);
    doubleClick();
    click();
    moveTo(1750, 900);
    doubleClick();
    click();
    moveTo(1750, 840);
    doubleClick();
    click();
    keyUp('shift');

    // buys the upgrades again
    sleep(700);
    scroll(430);
    moveTo(1750, 150);
    click();
    sleep(900);
    click();

    // buys 100 of each last four again
    sleep(600);
    scroll(-430);
    keyDown('shift');
    moveTo(1750, 1030);
    doubleClick();
    moveTo(1750, 955);
    doubleClick();
    click();
    moveTo(1750, 900);
    doubleClick();
    click();
    moveTo(1750, 840);
    doubleClick();
    click();
    keyUp('shift');
    sleep(300);

    // buys the upgrades again
    scroll(430);
    moveTo(1750, 150);
    click();
    sleep(600);
    click();
    sleep(700);

    // reincarnation
    sleep(200);
    moveTo(1550, 80);
    click();
    moveTo(860, 610);
    click();
    sleep(5300);
    moveTo(945, 110);
    click();
    moveTo(945, 560);
    click();
}

