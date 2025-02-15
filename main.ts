enum Oled {

    //% block=" "

    oled1 = 0,

    //% block=" "

    oled2 = 1,

    //% block=" "

    oled3 = 2,

    //% block=" "

    oled4 = 3,

    //% block=" "

    oled5 = 4,

    //% block=" "

    oled6 = 5,

    //% block=" "

    oled7 = 6,

    //% block=" "

    oled8 = 7,

    //% block=" "

    oled9 = 8,

    //% block=" "

    oled10 = 9,

    //% block=" "

    oled11 = 10,

    //% block=" "

    oled12 = 11,

    //% block=" "

    oled13 = 12,

    //% block=" "

    oled14 = 13,

    //% block=" "

    oled15 = 14,

    //% block=" "

    oled16 = 15,

    //% block=" "

    oled17 = 16,

    //% block=" "

    oled18 = 17,

    //% block=" "

    oled19 = 18,

    //% block=" "

    oled20 = 19,

    //% block=" "

    oled21 = 20,

    //% block=" "

    oled22 = 21,

    //% block=" "

    oled23 = 22,

    //% block=" "

    oled24 = 23,

    //% block=" "

    oled25 = 24,

    //% block=" "

    oled26 = 25,

    //% block=" "

    oled27 = 26,

    //% block=" "

    oled28 = 27,

    //% block=" "

    oled29 = 28,

    //% block=" "

    oled30 = 29,

    //% block=" "

    oled31 = 30,

    //% block=" "

    oled32 = 31,

    //% block=" "

    oled33 = 32,

    //% block=" "

    oled34 = 33,

    //% block=" "

    oled35 = 34,

    //% block=" "

    oled36 = 35,

    //% block=" "

    oled37 = 36,

    //% block=" "

    oled38 = 37,

    //% block=" "

    oled39 = 38,

    //% block=" "

    oled40 = 39,

    //% block=" "

    oled41 = 40,

    //% block=" "

    oled42 = 41,

    //% block=" "

    oled43 = 42,

    //% block=" "

    oled44 = 43,

    //% block=" "

    oled45 = 44,

    //% block=" "

    oled46 = 45,

    //% block=" "

    oled47 = 46,

    //% block=" "

    oled48 = 47,

    //% block=" "

    oled49 = 48,

    //% block=" "

    oled50 = 49,

    //% block=" "

    oled51 = 50,

    //% block=" "

    oled52 = 51,





}
enum Write_pin {

    //% block="P0"

    w0 = 1,

    //% block="P16"

    w1 = 2,

    //% block="P1"

    w2 = 3,

    //% block="P12"

    w3 = 4,

    //% block="P2"

    w4 = 5,

    //% block="P8"

    w5 = 6



}
enum Read_pin {

    //% block="P0"

    r0 = 1,

    //% block="P1"

    r1 = 2,

    //% block="P2"

    r2 = 3



}
enum Ultrasonic_pin {

    //% block="(P0,P13)"

    u1 = 13,

    //% block="(P1,P14)"

    u3 = 114,

    //% block="(P12,P9)"

    u4 = 129,

    //% block="(P2,P15)"

    u5 = 215,

    //% block="(P8,P7)"

    u6 = 87

}
enum Recodpin {

    //% block="(P0,P13)"

    rc1 = 13,
    //% block="(P1,P14)"

    rc2 = 114,

    //% block="(P2,P15)"

    rc3 = 215

}
enum Record_list {//

    //% block="machine gun burst"

    rl1 = 1,

    //% block="laser fire"

    rl2 = 2,

    //% block="racing acceleration"

    rl3 = 3,
    //% block="battle start"

    rl4 = 4,
    //% block="countdown"

    rl5 = 5,
    //% block="recorded audio"

    rl6 = 6

}
enum PingUnit {

    //% block="centimeters"

    Centimeters,

    //% block="microseconds"

    MicroSeconds,



    //% block="inches"

    Inches

}
enum Grayscale_pin {

    //% block="P13"

    g0 = 1,

    //% block="P16"

    g1 = 2,

    //% block="P0"

    g2 = 3,

    //% block="P10"

    g3 = 4,

    //% block="P14"

    g4 = 5,

    //% block="P12"

    g5 = 6,

    //% block="P1"

    g6 = 7,

    //% block="P9"

    g7 = 8,

    //% block="P15"

    g8 = 9,

    //% block="P8"

    g9 = 10,

    //% block="P2"

    g10 = 11,

    //% block="P7"

    g11 = 12

}
enum gs {

    //% block="up"

    g0 = 1,

    //% block="down"

    g1 = 2,

    //% block="left"

    g2 = 3,

    //% block="right"

    g3 = 4



}
enum PINs {

    P0,

    P1,

    P2,

    P3,

    P4,

    P5,

    P6,

    P7,

    P8,

    P9,

    P10,

    P11,

    P12,

    P13,

    P14,

    P15,

    P16,

    P19,

    P20

}
enum TMP36Type {

    //% block="(℃)" enumval=0

    TMP36_temperature_C,



    //% block="(℉)" enumval=1

    TMP36_temperature_F,

}
enum RGB {

    //% block="red"

    RED,

    //% block="green"

    GREEN,

    //% block="blue"

    BLUE,

    //% block="clear"

    CLEAR

}
enum NeoPixelColors {

    //% block=red

    Red = 0xFF0000,

    //% block=orange

    Orange = 0xFFA500,

    //% block=yellow

    Yellow = 0xFFFF00,

    //% block=green

    Green = 0x00FF00,

    //% block=blue

    Blue = 0x0000FF,

    //% block=indigo

    Indigo = 0x4b0082,

    //% block=violet

    Violet = 0x8a2be2,

    //% block=purple

    Purple = 0xFF00FF,

    //% block=white

    White = 0xFFFFFF,

    //% block=black

    Black = 0x000000

}
enum NeoPixelMode {

    //% block="GRB"

    RGB = 1,

    //% block="RGB+W"

    RGBW = 2,

    //% block="RGB"

    RGB_RGB = 3

}
namespace Microbit {



    export enum DHT11_state {

        //% block="temperature(℃)" enumval=0

        DHT11_temperature_C,



        //% block="humidity(0~100)" enumval=1

        DHT11_humidity,

    }



    export enum Distance_Unit_List {

        //% block="centimeters" 

        Distance_Unit_cm,



        //% block="inches"

        Distance_Unit_inch,

    }



    //% blockId=buttonState

    //% weight=27

    //% buttonpin.fieldEditor="gridpicker"

    //% buttonpin.fieldOptions.width=220

    //% buttonpin.fieldOptions.columns=2

    //% block="Button Sensor %buttonpin"

    //% subcategory=Sensor

    export function buttonState(buttonpin: Write_pin): number {

        let pin16

        if (buttonpin == 1) {



            pin16 = DigitalPin.P0;

        }

        if (buttonpin == 2) {

            pin16 = DigitalPin.P16;

        }

        if (buttonpin == 3) {

            pin16 = DigitalPin.P1;

        }

        if (buttonpin == 4) {



            pin16 = DigitalPin.P12;

        }

        if (buttonpin == 5) {

            pin16 = DigitalPin.P2;

        }

        if (buttonpin == 6) {

            pin16 = DigitalPin.P8;

        }





        return pins.digitalReadPin(pin16);

    }



    //% blockId=hState

    //% weight=27

    //% hallpin.fieldEditor="gridpicker"

    //% hallpin.fieldOptions.width=220

    //% hallpin.fieldOptions.columns=1

    //% block="Hall Sensor %hallpin"

    //% subcategory=Sensor

    export function hState(hallpin: Read_pin): number {

        let pin18

        if (hallpin == 1) {



            pin18 = AnalogPin.P0;

        }

        if (hallpin == 2) {

            pin18 = AnalogPin.P1;

        }

        if (hallpin == 3) {

            pin18 = AnalogPin.P2;

        }
        if (pins.analogReadPin(pin18) < 512)
            return (0);
        else
            return (1);

    }



    //% blockId=farState

    //% weight=38

    //% farStatepin.fieldEditor="gridpicker"

    //% farStatepin.fieldOptions.width=220

    //% farStatepin.fieldOptions.columns=2

    //% block="Long-range Photoelectric Sensor %farStatepin"

    //% subcategory=Sensor

    export function farState(farStatepin: Write_pin): number {

        let pin17

        if (farStatepin == 1) {



            pin17 = DigitalPin.P0;

        }

        if (farStatepin == 2) {

            pin17 = DigitalPin.P16;

        }

        if (farStatepin == 3) {

            pin17 = DigitalPin.P1;

        }

        if (farStatepin == 4) {



            pin17 = DigitalPin.P12;

        }

        if (farStatepin == 5) {

            pin17 = DigitalPin.P2;

        }

        if (farStatepin == 6) {

            pin17 = DigitalPin.P8;

        }

        return pins.digitalReadPin(pin17);

    }



    //% blockId=potentiometerRead

    //% weight=37

    //% potentiometerpin.fieldEditor="gridpicker"

    //% potentiometerpin.fieldOptions.width=220

    //% potentiometerpin.fieldOptions.columns=1

    //% block="Potentiometer %potentiometerpin"

    //% subcategory=Sensor

    export function potentiometerRead(potentiometerpin: Read_pin): number {

        let pin15

        if (potentiometerpin == 1) {



            pin15 = AnalogPin.P0;

        }

        if (potentiometerpin == 2) {

            pin15 = AnalogPin.P1;

        }

        if (potentiometerpin == 3) {

            pin15 = AnalogPin.P2;

        }

        return pins.analogReadPin(pin15);

    }



    //% blockId="ReadGrayLevel" block="Grayscale Sensor %graylevelpin"

    //% weight=36

    //% graylevelpin.fieldEditor="gridpicker"

    //% graylevelpin.fieldOptions.width=220

    //% graylevelpin.fieldOptions.columns=1

    //% subcategory=Sensor

    export function ReadGrayLevel(graylevelpin: Read_pin): number {

        let voltage7 = 0;

        let grayLevel = 0;

        let pin13

        if (graylevelpin == 1) {



            pin13 = AnalogPin.P0;

        }

        if (graylevelpin == 2) {

            pin13 = AnalogPin.P1;

        }

        if (graylevelpin == 3) {

            pin13 = AnalogPin.P2;

        }

        voltage7 = pins.map(

            pins.analogReadPin(pin13),

            0,

            1023,

            80,

            1023

        );

        grayLevel = voltage7;

        return Math.round(grayLevel);

    }



    //% blockId="readlightintensity" block="Photosensitive Sensor %lightintensitypin"

    //% weight=35

    //% lightintensitypin.fieldEditor="gridpicker"

    //% lightintensitypin.fieldOptions.width=220

    //% lightintensitypin.fieldOptions.columns=1

    //% subcategory=Sensor

    export function ReadLightIntensity(lightintensitypin: Read_pin): number {

        let voltage2 = 0;

        let lightintensity = 0;

        let pin2

        if (lightintensitypin == 1) {

            pin2 = AnalogPin.P0;



        }

        if (lightintensitypin == 2) {

            pin2 = AnalogPin.P1;

        }

        if (lightintensitypin == 3) {

            pin2 = AnalogPin.P2;



        }

        voltage2 = pins.map(

            pins.analogReadPin(pin2),

            0,

            1023,

            0,

            1023

        );

        lightintensity = voltage2;

        return Math.round(1023 - lightintensity);



    }



    //% blockId="Readflame" block="Flame Sensor %flamepin"

    //% weight=34

    //% flamepin.fieldEditor="gridpicker"

    //% flamepin.fieldOptions.width=220

    //% flamepin.fieldOptions.columns=1

    //% subcategory=Sensor

    export function Readflame(flamepin: Read_pin): number {

        let voltage6 = 0;

        let flame = 0;

        let pin12

        if (flamepin == 1) {



            pin12 = AnalogPin.P0;

        }

        if (flamepin == 2) {

            pin12 = AnalogPin.P1;

        }

        if (flamepin == 3) {

            pin12 = AnalogPin.P2;

        }

        voltage6 = pins.map(

            pins.analogReadPin(pin12),

            0,

            1023,

            0,

            1023

        );

        flame = voltage6;

        return Math.round(1023 - flame);

    }



    //% blockId="octopus_ReadWaterLevel" block="Water Level Sensor %waterlevelpin"

    //% weight=33

    //% waterlevelpin.fieldEditor="gridpicker"

    //% waterlevelpin.fieldOptions.width=220

    //% waterlevelpin.fieldOptions.columns=1

    //% subcategory=Sensor



    export function ReadWaterLevel(waterlevelpin: Read_pin): number {

        let voltage4 = 0;

        let waterLevel = 0;

        let pin10

        if (waterlevelpin == 1) {



            pin10 = AnalogPin.P0;

        }

        if (waterlevelpin == 2) {

            pin10 = AnalogPin.P1;

        }

        if (waterlevelpin == 3) {

            pin10 = AnalogPin.P2;

        }

        voltage4 = pins.analogReadPin(pin10);

        if (voltage4 > 620) { waterLevel = 100; }

        else if (voltage4 > 618) { waterLevel = 98; }

        else if (voltage4 > 617) { waterLevel = 96; }

        else if (voltage4 > 616) { waterLevel = 94; }

        else if (voltage4 > 614) { waterLevel = 92; }

        else if (voltage4 > 612) { waterLevel = 90; }

        else if (voltage4 > 610) { waterLevel = 88; }

        else if (voltage4 > 609) { waterLevel = 86; }

        else if (voltage4 > 607) { waterLevel = 85; }

        else if (voltage4 > 606) { waterLevel = 83; }

        else if (voltage4 > 605) { waterLevel = 81; }

        else if (voltage4 > 604) { waterLevel = 80; }

        else if (voltage4 > 603) { waterLevel = 78; }

        else if (voltage4 > 602) { waterLevel = 77; }

        else if (voltage4 > 600) { waterLevel = 75; }

        else if (voltage4 > 598) { waterLevel = 73; }

        else if (voltage4 > 596) { waterLevel = 72; }

        else if (voltage4 > 594) { waterLevel = 70; }

        else if (voltage4 > 592) { waterLevel = 68; }

        else if (voltage4 > 590) { waterLevel = 65; }

        else if (voltage4 > 588) { waterLevel = 63; }

        else if (voltage4 > 586) { waterLevel = 62; }

        else if (voltage4 > 583) { waterLevel = 60; }

        else if (voltage4 > 580) { waterLevel = 58; }

        else if (voltage4 > 575) { waterLevel = 56; }

        else if (voltage4 > 574) { waterLevel = 55; }

        else if (voltage4 > 573) { waterLevel = 54; }



        else if (voltage4 > 572) { waterLevel = 53; }

        else if (voltage4 > 570) { waterLevel = 52; }

        else if (voltage4 > 568) { waterLevel = 51; }

        else if (voltage4 > 566) { waterLevel = 50; }

        else if (voltage4 > 563) { waterLevel = 49; }

        else if (voltage4 > 560) { waterLevel = 48; }

        else if (voltage4 > 557) { waterLevel = 47; }

        else if (voltage4 > 554) { waterLevel = 46; }

        else if (voltage4 > 551) { waterLevel = 45; }

        else if (voltage4 > 548) { waterLevel = 44; }

        else if (voltage4 > 545) { waterLevel = 43; }

        else if (voltage4 > 542) { waterLevel = 42; }

        else if (voltage4 > 539) { waterLevel = 41; }

        else if (voltage4 > 536) { waterLevel = 40; }

        else if (voltage4 > 533) { waterLevel = 39; }

        else if (voltage4 > 530) { waterLevel = 38; }

        else if (voltage4 > 527) { waterLevel = 37; }

        else if (voltage4 > 523) { waterLevel = 36; }

        else if (voltage4 > 516) { waterLevel = 35; }

        else if (voltage4 > 510) { waterLevel = 34; }

        else if (voltage4 > 506) { waterLevel = 33; }

        else if (voltage4 > 500) { waterLevel = 32; }

        else if (voltage4 > 497) { waterLevel = 31; }

        else if (voltage4 > 494) { waterLevel = 30; }

        else if (voltage4 > 481) { waterLevel = 29; }

        else if (voltage4 > 478) { waterLevel = 28; }

        else if (voltage4 > 475) { waterLevel = 27; }

        else if (voltage4 > 472) { waterLevel = 26; }

        else if (voltage4 > 469) { waterLevel = 25; }

        else if (voltage4 > 466) { waterLevel = 24; }

        else if (voltage4 > 463) { waterLevel = 23; }

        else if (voltage4 > 460) { waterLevel = 22; }

        else if (voltage4 > 457) { waterLevel = 21; }

        else if (voltage4 > 454) { waterLevel = 19; }

        else if (voltage4 > 451) { waterLevel = 18; }

        else if (voltage4 > 448) { waterLevel = 17; }

        else if (voltage4 > 445) { waterLevel = 16; }

        else if (voltage4 > 442) { waterLevel = 15; }

        else if (voltage4 > 439) { waterLevel = 14; }

        else if (voltage4 > 436) { waterLevel = 13; }

        else if (voltage4 > 433) { waterLevel = 12; }

        else if (voltage4 > 430) { waterLevel = 11; }

        else if (voltage4 > 427) { waterLevel = 10; }

        else if (voltage4 > 424) { waterLevel = 9; }

        else if (voltage4 > 421) { waterLevel = 8; }

        else if (voltage4 > 418) { waterLevel = 7; }

        else if (voltage4 > 415) { waterLevel = 6; }

        else if (voltage4 > 412) { waterLevel = 5; }

        else if (voltage4 > 409) { waterLevel = 4; }

        else if (voltage4 > 406) { waterLevel = 3; }

        else if (voltage4 > 403) { waterLevel = 2; }

        else if (voltage4 > 400) { waterLevel = 1; }

        else { waterLevel = 0; }



        return Math.round(waterLevel);

    }



    //% blockId="ReadGasConcentration" block="MQ-2 Gas Sensor %gasconcentrationpin"

    //% weight=32

    //% gasconcentrationpin.fieldEditor="gridpicker"

    //% gasconcentrationpin.fieldOptions.width=220

    //% gasconcentrationpin.fieldOptions.columns=1

    //% subcategory=Sensor

    export function ReadGasConcentration(gasconcentrationpin: Read_pin): number {

        let voltage5 = 0;

        let gasConcentration = 0;

        let pin11

        if (gasconcentrationpin == 1) {



            pin11 = AnalogPin.P0;

        }

        if (gasconcentrationpin == 2) {

            pin11 = AnalogPin.P1;

        }

        if (gasconcentrationpin == 3) {

            pin11 = AnalogPin.P2;

        }

        voltage5 = pins.map(

            pins.analogReadPin(pin11),

            0,

            1023,

            0,

            1023

        );

        gasConcentration = voltage5;

        return Math.round(gasConcentration);

    }



    //% blockId="readsoilmoisture" block="Soil moisture Sensor %soilhumiditypin"

    //% weight=31

    //% soilmoisturepin.fieldEditor="gridpicker"

    //% soilmoisturepin.fieldOptions.width=220

    //% soilmoisturepin.fieldOptions.columns=1

    //% subcategory=Sensor

    export function ReadSoilHumidity(soilmoisturepin: Read_pin): number {

        let voltage = 0;

        let soilmoisture = 0;

        let pin

        if (soilmoisturepin == 1) {

            pin = AnalogPin.P0;

        }

        if (soilmoisturepin == 2) {

            pin = AnalogPin.P1;

        }

        if (soilmoisturepin == 3) {

            pin = AnalogPin.P2;



        }

        voltage = pins.map(

            pins.analogReadPin(pin),

            0,

            1023,

            0,

            1023

        );

        soilmoisture = voltage;

        return Math.round(soilmoisture);

    }



    //% blockId="readWaterTemp" block="Temperature Sensor %waterproofpin"

    //% weight=30

    //% waterproofpin.fieldEditor="gridpicker"

    //% waterproofpin.fieldOptions.width=220

    //% waterproofpin.fieldOptions.columns=1

    //% subcategory=Sensor

    export function readWaterTemp(waterproofpin: Read_pin): number {

        let voltage22 = 0;

        let waterProofTemp = 0;

        let pin14

        if (waterproofpin == 1) {



            pin14 = AnalogPin.P0;

        }

        if (waterproofpin == 2) {

            pin14 = AnalogPin.P1;

        }

        if (waterproofpin == 3) {

            pin14 = AnalogPin.P2;

        }

        voltage22 = pins.analogReadPin(pin14);//%获得原始值

        if (voltage22 > 1001) { waterProofTemp = 100; }

        else if (voltage22 > 1000) { waterProofTemp = 98; }

        else if (voltage22 > 999) { waterProofTemp = 97; }

        else if (voltage22 > 998) { waterProofTemp = 96; }

        else if (voltage22 > 997) { waterProofTemp = 95; }

        else if (voltage22 > 996) { waterProofTemp = 93; }

        else if (voltage22 > 995) { waterProofTemp = 92; }

        else if (voltage22 > 994) { waterProofTemp = 91; }

        else if (voltage22 > 993) { waterProofTemp = 90; }

        else if (voltage22 > 992) { waterProofTemp = 89; }

        else if (voltage22 > 991) { waterProofTemp = 88; }

        else if (voltage22 > 990) { waterProofTemp = 87; }

        else if (voltage22 > 989) { waterProofTemp = 86; }

        else if (voltage22 > 988) { waterProofTemp = 85; }

        else if (voltage22 > 987) { waterProofTemp = 84; }

        else if (voltage22 > 986) { waterProofTemp = 83; }

        else if (voltage22 > 985) { waterProofTemp = 82; }

        else if (voltage22 > 984) { waterProofTemp = 81; }

        else if (voltage22 > 982) { waterProofTemp = 80; }

        else if (voltage22 > 981) { waterProofTemp = 79; }

        else if (voltage22 > 980) { waterProofTemp = 78; }

        else if (voltage22 > 978) { waterProofTemp = 77; }

        else if (voltage22 > 977) { waterProofTemp = 76; }

        else if (voltage22 > 975) { waterProofTemp = 75; }

        else if (voltage22 > 974) { waterProofTemp = 74; }

        else if (voltage22 > 972) { waterProofTemp = 73; }

        else if (voltage22 > 971) { waterProofTemp = 72; }

        else if (voltage22 > 969) { waterProofTemp = 71; }

        else if (voltage22 > 967) { waterProofTemp = 70; }

        else if (voltage22 > 965) { waterProofTemp = 69; }

        else if (voltage22 > 963) { waterProofTemp = 68; }

        else if (voltage22 > 961) { waterProofTemp = 67; }

        else if (voltage22 > 959) { waterProofTemp = 66; }

        else if (voltage22 > 957) { waterProofTemp = 65; }

        else if (voltage22 > 955) { waterProofTemp = 64; }

        else if (voltage22 > 953) { waterProofTemp = 63; }

        else if (voltage22 > 950) { waterProofTemp = 62; }

        else if (voltage22 > 948) { waterProofTemp = 61; }

        else if (voltage22 > 943) { waterProofTemp = 59; }

        else if (voltage22 > 940) { waterProofTemp = 58; }

        else if (voltage22 > 937) { waterProofTemp = 57; }

        else if (voltage22 > 934) { waterProofTemp = 56; }

        else if (voltage22 > 931) { waterProofTemp = 55; }

        else if (voltage22 > 928) { waterProofTemp = 54; }

        else if (voltage22 > 924) { waterProofTemp = 53; }

        else if (voltage22 > 921) { waterProofTemp = 52; }

        else if (voltage22 > 917) { waterProofTemp = 51; }

        else if (voltage22 > 914) { waterProofTemp = 51; }

        else if (voltage22 > 910) { waterProofTemp = 49; }

        else if (voltage22 > 906) { waterProofTemp = 48; }

        else if (voltage22 > 902) { waterProofTemp = 47; }

        else if (voltage22 > 898) { waterProofTemp = 46; }

        else if (voltage22 > 893) { waterProofTemp = 45; }

        else if (voltage22 > 889) { waterProofTemp = 44; }

        else if (voltage22 > 884) { waterProofTemp = 43; }

        else if (voltage22 > 879) { waterProofTemp = 42; }

        else if (voltage22 > 874) { waterProofTemp = 41; }

        else if (voltage22 > 869) { waterProofTemp = 40; }

        else if (voltage22 > 864) { waterProofTemp = 39; }

        else if (voltage22 > 858) { waterProofTemp = 38; }

        else if (voltage22 > 852) { waterProofTemp = 37; }

        else if (voltage22 > 846) { waterProofTemp = 36; }

        else if (voltage22 > 840) { waterProofTemp = 35; }

        else if (voltage22 > 834) { waterProofTemp = 34; }

        else if (voltage22 > 827) { waterProofTemp = 33; }

        else if (voltage22 > 821) { waterProofTemp = 32; }

        else if (voltage22 > 814) { waterProofTemp = 31; }

        else if (voltage22 > 806) { waterProofTemp = 30; }

        else if (voltage22 > 799) { waterProofTemp = 29; }

        else if (voltage22 > 791) { waterProofTemp = 28; }

        else if (voltage22 > 784) { waterProofTemp = 27; }

        else if (voltage22 > 776) { waterProofTemp = 26; }

        else if (voltage22 > 767) { waterProofTemp = 25; }

        else if (voltage22 > 759) { waterProofTemp = 24; }

        else if (voltage22 > 750) { waterProofTemp = 23; }

        else if (voltage22 > 741) { waterProofTemp = 22; }

        else if (voltage22 > 732) { waterProofTemp = 21; }

        else if (voltage22 > 713) { waterProofTemp = 19; }

        else if (voltage22 > 703) { waterProofTemp = 18; }

        else if (voltage22 > 692) { waterProofTemp = 17; }

        else if (voltage22 > 682) { waterProofTemp = 16; }

        else if (voltage22 > 671) { waterProofTemp = 15; }

        else if (voltage22 > 661) { waterProofTemp = 14; }

        else if (voltage22 > 650) { waterProofTemp = 13; }

        else if (voltage22 > 638) { waterProofTemp = 12; }

        else if (voltage22 > 627) { waterProofTemp = 11; }

        else if (voltage22 > 615) { waterProofTemp = 10; }

        else if (voltage22 > 604) { waterProofTemp = 9; }

        else if (voltage22 > 592) { waterProofTemp = 8; }

        else if (voltage22 > 579) { waterProofTemp = 7; }

        else if (voltage22 > 567) { waterProofTemp = 6; }

        else if (voltage22 > 555) { waterProofTemp = 5; }

        else if (voltage22 > 542) { waterProofTemp = 4; }

        else if (voltage22 > 530) { waterProofTemp = 3; }

        else if (voltage22 > 517) { waterProofTemp = 2; }

        else if (voltage22 > 504) { waterProofTemp = 1; }

        else { waterProofTemp = 0; }

        return waterProofTemp;

    }



    /**

    * get Ultrasonic distance

    */

    //% blockId=sonarbit

    //% weight=29



    //% subcategory=Sensor

    //% blockId=sonar_ping block="Ultrasonic Sensor %ultpins units %unit"

    //% ultpins.fieldEditor="gridpicker"

    //% ultpins.fieldOptions.width=220

    //% ultpins.fieldOptions.columns=2

    export function ping(ultpins: Ultrasonic_pin, unit: PingUnit, maxCmDistance = 500): number {

        // send pulse



        let d

        let distance

        let echopin

        let trigpin

        if (ultpins == 13) {

            trigpin = DigitalPin.P0;

            echopin = DigitalPin.P13;

        }

        if (ultpins == 114) {

            trigpin = DigitalPin.P1;

            echopin = DigitalPin.P14;

        }

        if (ultpins == 215) {

            trigpin = DigitalPin.P2;

            echopin = DigitalPin.P15;

        }

        if (ultpins == 87) {

            trigpin = DigitalPin.P8;

            echopin = DigitalPin.P7;

        }

        if (ultpins == 129) {

            trigpin = DigitalPin.P12;

            echopin = DigitalPin.P9;

        }

        if (ultpins == 1610) {

            trigpin = DigitalPin.P16;

            echopin = DigitalPin.P10;

        }

        pins.setPull(trigpin, PinPullMode.PullNone);

        pins.digitalWritePin(trigpin, 0);

        control.waitMicros(2);

        pins.digitalWritePin(trigpin, 1);

        control.waitMicros(10);

        pins.digitalWritePin(trigpin, 0);



        // read pulse

        d = pins.pulseIn(echopin, PulseValue.High, maxCmDistance * 50);

        distance = d * 34 / 2 / 1000 * 3 / 2;

        switch (unit) {

            case PingUnit.Centimeters: return Math.round(distance);

            case PingUnit.Inches: return Math.round(distance / 30.48);

            default: return Math.round(d);

        }

    }



    //////人体红外/////

    //% weight=27

    //% pirpin.fieldEditor="gridpicker"

    //% pirpin.fieldOptions.width=220

    //% pirpin.fieldOptions.columns=2

    //% blockId="PIR" block="PIR Sensor %pirpin detects motion"

    //% subcategory=Sensor 

    export function pir(pirpin: Write_pin): number {

        let pin48
        let rt

        if (pirpin == 1) {



            pin48 = DigitalPin.P0;

        }

        if (pirpin == 2) {

            pin48 = DigitalPin.P16;

        }

        if (pirpin == 3) {

            pin48 = DigitalPin.P1;

        }

        if (pirpin == 4) {



            pin48 = DigitalPin.P12;

        }

        if (pirpin == 5) {

            pin48 = DigitalPin.P2;

        }

        if (pirpin == 6) {

            pin48 = DigitalPin.P8;

        }



        if (pins.digitalReadPin(pin48) == 1) {

            rt = 0

        }

        else {

            rt = 1

        }
        return rt

    }


    /////////摇杆////////////////////

    export enum rocket {
        //% block="X"

        x = 1,

        //% block="Y"

        y = 2
    }
    export enum rock {
        //% block="up"

        orient1 = 2,

        //% block="down"

        orient2 = 1,

        //% block="left"

        orient3 = 4,

        //% block="right"

        orient4 = 3
    }

    //% weight=27

    //% direction.fieldEditor="gridpicker"

    //% direction.fieldOptions.width=220

    //% direction.fieldOptions.columns=2

    //% blockId="ROCKET" block="Joystick %direction moved"

    //% subcategory=Sensor 

    export function rocker(direction: rocket): number {

        let GetBuff = pins.createBuffer(3)

        GetBuff = pins.i2cReadBuffer(97, 3)

        let re = GetBuff.getNumber(NumberFormat.Int8BE, direction)
        if (direction == 2) {
            return -re
        } else {
            return re
        }
        // re = -re


    }
    //% weight=27

    //% direction.fieldEditor="gridpicker"

    //% direction.fieldOptions.width=220

    //% direction.fieldOptions.columns=2

    //% blockId="ROCKETORI" block="Joystick detected %orientation "

    //% subcategory=Sensor 

    export function rockerori(orientation: rock): boolean {

        let GetBuff2 = pins.createBuffer(3)

        GetBuff2 = pins.i2cReadBuffer(97, 3)
        let ud = GetBuff2.getNumber(NumberFormat.Int8BE, 2)
        let lr = GetBuff2.getNumber(NumberFormat.Int8BE, 1)
        let flag
        if (orientation == 1) {
            if (ud > 50)
                flag = true
            else
                flag = false
        }
        if (orientation == 2) {
            if (ud < -50)
                flag = true
            else
                flag = false
        }
        if (orientation == 4) {
            if (lr < -50)
                flag = true
            else
                flag = false
        }
        if (orientation == 3) {
            if (lr > 50)
                flag = true
            else
                flag = false
        }
        return flag

    }



    ////////////////执行器/////////////////////////////////////

    export enum enPos {

        //% blockId="forward" block="forward"

        forward = 1,

        //% blockId="stop" block="back"

        stop = 2

    }

    export enum enMotorcolor {
        //% block="red"

        red = 81,

        //% block="green"

        blue = 82,

        //% block="blue"

        green = 83,

        //% block="yellow"

        yellow = 84

    }

    export enum enServo {
        S1 = 0,
        S2,
        S3,
        S4
    }



    export enum enMotors {



        M2 = 10,

        M3 = 12,

        M1 = 8,

        M4 = 14

    }


    const PCA9685_ADD = 0x40

    const MODE1 = 0x00

    const SUBADR1 = 0x02

    const SUBADR2 = 0x03

    const SUBADR3 = 0x04

    const PRESCALE = 0xFE

    const LED0_ON_L = 0x06

    const LED0_ON_H = 0x07

    const LED0_OFF_L = 0x08

    const LED0_OFF_H = 0x09

    const ALL_LED_ON_L = 0xFA

    const ALL_LED_ON_H = 0xFB

    const ALL_LED_OFF_L = 0xFC

    const ALL_LED_OFF_H = 0xFD



    const STP_CHA_L = 2047

    const STP_CHA_H = 4095



    const STP_CHB_L = 1

    const STP_CHB_H = 2047



    const STP_CHC_L = 1023

    const STP_CHC_H = 3071



    const STP_CHD_L = 3071

    const STP_CHD_H = 1023



    let initialized = false

    let caraddress1 = 81
    let caraddress2 = 82



    function i2cwrite(addr: number, reg: number, value: number) {

        let buf6 = pins.createBuffer(2)

        buf6[0] = reg

        buf6[1] = value

        pins.i2cWriteBuffer(addr, buf6)

    }



    function i2cread(addr: number, reg: number) {

        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);

        let val = pins.i2cReadNumber(addr, NumberFormat.UInt8BE);

        return val;

    }



    function initPCA9685(): void {
        i2cwrite(PCA9685_ADD, MODE1, 0x00)
        setFreq(50);
        initialized = true
    }

    function setFreq(freq: number): void {
        // Constrain the frequency
        let prescaleval = 25000000;
        prescaleval /= 4096;
        prescaleval /= freq;
        prescaleval -= 1;
        let prescale = prescaleval; //Math.Floor(prescaleval + 0.5);
        let oldmode = i2cread(PCA9685_ADD, MODE1);
        let newmode = (oldmode & 0x7F) | 0x10; // sleep
        i2cwrite(PCA9685_ADD, MODE1, newmode); // go to sleep
        i2cwrite(PCA9685_ADD, PRESCALE, prescale); // set the prescaler
        i2cwrite(PCA9685_ADD, MODE1, oldmode);
        control.waitMicros(5000);
        i2cwrite(PCA9685_ADD, MODE1, oldmode | 0xa1);
    }


    function setPwm(channel: number, on: number, off: number): void {
        if (channel < 0 || channel > 15)
            return;
        if (!initialized) {
            initPCA9685();
        }
        let buf22 = pins.createBuffer(5);
        buf22[0] = LED0_ON_L + 4 * channel;
        buf22[1] = on & 0xff;
        buf22[2] = (on >> 8) & 0xff;
        buf22[3] = off & 0xff;
        buf22[4] = (off >> 8) & 0xff;
        pins.i2cWriteBuffer(PCA9685_ADD, buf22);
    }




    //% blockId=SuperBit_MotorRun 

    //% weight=27

    //% index.fieldEditor="gridpicker"

    //% index.fieldOptions.width=220

    //% index.fieldOptions.columns=2

    //% block="DC Motor|%index|speed(-255~255) %speed"

    //% speed.min=-255 speed.max=255

    //% subcategory=Movement

    export function MotorRun(index: enMotors, speed: number): void {

        if (!initialized) {

            initPCA9685()

        }

        speed = speed * 16; // map 255 to 4096

        if (speed >= 4096) {

            speed = 4095

        }

        if (speed <= -4096) {

            speed = -4095

        }



        let a = index

        let b = index + 1



        if (a > 10) {

            if (speed >= 0) {

                setPwm(a, 0, speed)

                setPwm(b, 0, 0)

            } else {

                setPwm(a, 0, 0)

                setPwm(b, 0, -speed)

            }

        }

        else {

            if (speed >= 0) {

                setPwm(b, 0, speed)

                setPwm(a, 0, 0)

            } else {

                setPwm(b, 0, 0)

                setPwm(a, 0, -speed)

            }

        }

    }
    //% blockId=SuperBit_runMotor block="|%motoraddress|Motor rotate at|%speed|"

    //% speed.min=-100 speed.max=100

    //% parts="SuperBit_runMotor" subcategory=Movement group="Servo Motor"

    export function runMotor(motoraddress: enMotorcolor, speed: number): void {
        speed = speed / 2

        let speed_Buff

        if (speed < 0) {

            speed = -speed

            speed_Buff = (~speed) + 1

            speed_Buff = speed_Buff | 0x80

        }

        else {

            speed_Buff = speed

        }

        let SetBuff = pins.createBuffer(4)

        SetBuff.setNumber(NumberFormat.UInt8BE, 0, 0x11)

        SetBuff.setNumber(NumberFormat.UInt8BE, 1, speed_Buff)

        SetBuff.setNumber(NumberFormat.UInt8BE, 2, 0)

        SetBuff.setNumber(NumberFormat.UInt8BE, 3, 0)

        pins.i2cWriteBuffer(motoraddress, SetBuff)


    }
    //% blockId="writemotorlocation" block="|%motoraddress|Motor is turned at|%speed|to|%location|degrees"

    //% speed.min=0 speed.max=100

    //% location.min=-360 location.max=360

    //% parts="writemotorlocation" subcategory=Movement group="Servo Motor"

    export function Writemotorlocation(motoraddress: enMotorcolor, speed: number, location: number): void {
        if (speed == 0) {
            return
        }

        speed = speed / 2
        let speed_Buff2

        if (speed < 0) {
            speed = -speed
            speed_Buff2 = (~speed) + 1
            speed_Buff2 = speed_Buff2 | 0x80
        }
        else {
            speed_Buff2 = speed
        }

        let location_Buff2

        if (location < 0) {
            location = -location
            location_Buff2 = (~location) + 1
            location_Buff2 = location_Buff2 | 0x8000
        }
        else {
            location_Buff2 = location
        }

        let GetBuff3 = pins.createBuffer(6)
        GetBuff3 = pins.i2cReadBuffer(motoraddress, 6)

        if (((location - 5) <= getMotorLocation(GetBuff3)) && (getMotorLocation(GetBuff3) <= (location + 5))) {
            return;
        }
        let SetBuff2 = pins.createBuffer(4)

        SetBuff2.setNumber(NumberFormat.UInt8BE, 0, 0x3)
        SetBuff2.setNumber(NumberFormat.UInt8BE, 1, speed_Buff2)
        SetBuff2.setNumber(NumberFormat.UInt8BE, 2, location_Buff2 >> 8)
        SetBuff2.setNumber(NumberFormat.UInt8BE, 3, location_Buff2)


        pins.i2cWriteBuffer(motoraddress, SetBuff2)

        let flag2 = GetBuff3.getNumber(NumberFormat.Int8BE, 5);
        while (true) {//如果没有在运行，则一直读取
            GetBuff3 = pins.i2cReadBuffer(motoraddress, 6)
            flag2 = GetBuff3.getNumber(NumberFormat.Int8BE, 5)
            if ((flag2 == 3)) break;//当有一个Servo Motor转动起来的时候，就退出死循环
        }
        while (true) {//如果没有在运行，则一直读取
            GetBuff3 = pins.i2cReadBuffer(motoraddress, 6)
            flag2 = GetBuff3.getNumber(NumberFormat.Int8BE, 5)
            if ((flag2 == 11) || (flag2 == 10)) break;//当结束任务的时候，就退出死循环
        }
    }

    //% blockId="writemotorrelativelocation" block="|%motoraddress|Motor rotate at|%speed|in|%location|degrees"

    //% speed.min=-100 speed.max=100
    //% location.min=0 
    //% parts="writemotorrelativelocation" subcategory=Movement group="Servo Motor"

    export function Writemotorrelativelocation(motoraddress: enMotorcolor, speed: number, location: number): void {
        if (((location <= 5) && (location >= 0)) || ((location >= -5) && (location <= 0))) {
            return;
        }
        speed = speed / 2

        let location_Buff22

        if (speed < 0) {
            speed = -speed
            location_Buff22 = (~location) + 1
            location_Buff22 = location_Buff22 | 0x8000
        }
        else {
            speed = speed
            location_Buff22 = location
        }

        let SetBuff22 = pins.createBuffer(4)

        SetBuff22.setNumber(NumberFormat.UInt8BE, 0, 0x4)
        SetBuff22.setNumber(NumberFormat.UInt8BE, 1, speed)
        SetBuff22.setNumber(NumberFormat.UInt8BE, 2, location_Buff22 >> 8)
        SetBuff22.setNumber(NumberFormat.UInt8BE, 3, location_Buff22)

        let GetBuff4 = pins.createBuffer(6)
        let flag3 = 0

        if (speed != 0) {
            pins.i2cWriteBuffer(motoraddress, SetBuff22)
        } else {
            location = 0;
        }


        if (location != 0) {
            while (true) {//如果没有在运行，则一直读取
                GetBuff4 = pins.i2cReadBuffer(motoraddress, 6)
                flag3 = GetBuff4.getNumber(NumberFormat.Int8BE, 5)
                if ((flag3 == 4)) break;//等待电机执行指令，跳出循环
            }
            while (true) {//如果没有在运行，则一直读取
                GetBuff4 = pins.i2cReadBuffer(motoraddress, 6)
                flag3 = GetBuff4.getNumber(NumberFormat.Int8BE, 5)
                if ((flag3 == 11) || (flag3 == 10)) break;//等待电机执行完指令或堵转时，跳出循环
            }
        }


    }
    //% blockId="writemotorrelativetime" block="|%motoraddress|Motor rotate at|%speed|in|%time|seconds"

    //% speed.min=-100 speed.max=100

    //% parts="writemotorrelativetime" subcategory=Movement group="Servo Motor"

    export function Writemotorrelativetime(motoraddress: enMotorcolor, speed: number, time: number): void {

        speed = speed / 2

        if (time > 0 && time < 0.1) {
            time = 0.1;
        }
        time = time * 10

        let speed_Buff3

        if (speed < 0) {
            speed = -speed
            speed_Buff3 = (~speed) + 1
            speed_Buff3 = speed_Buff3 | 0x80
        }
        else {
            speed_Buff3 = speed
        }

        let SetBuff222 = pins.createBuffer(4)

        SetBuff222.setNumber(NumberFormat.UInt8BE, 0, 0x12)
        SetBuff222.setNumber(NumberFormat.UInt8BE, 1, speed_Buff3)
        SetBuff222.setNumber(NumberFormat.UInt8BE, 2, time >> 8)
        SetBuff222.setNumber(NumberFormat.UInt8BE, 3, time)

        let flag4 = 0
        pins.i2cWriteBuffer(motoraddress, SetBuff222)

        if (time != 0) {
            if (speed <= 0) {
                let waitFalg = (control.millis() + (time * 100));
                while (control.millis() <= waitFalg) { }

            } else {
                let GetBuff5 = pins.createBuffer(6)
                while (true) {//如果没有在运行，则一直读取
                    GetBuff5 = pins.i2cReadBuffer(motoraddress, 6)
                    flag4 = GetBuff5.getNumber(NumberFormat.Int8BE, 5)
                    // serial.writeLine("read1:[" + GetBuff.getNumber(NumberFormat.Int8BE, 0) + "," + GetBuff.getNumber(NumberFormat.Int8BE, 1) + "," + GetBuff.getNumber(NumberFormat.Int8BE, 2) + "," + GetBuff.getNumber(NumberFormat.Int8BE, 3) + "," + GetBuff.getNumber(NumberFormat.Int8BE, 4) + "," + GetBuff.getNumber(NumberFormat.Int8BE, 5) + "," + GetBuff.getNumber(NumberFormat.Int8BE, 6) + "]");
                    if ((flag4 == 0x7)) break;//等待电机执行指令，跳出循环
                }
                while (true) {//如果没有在运行，则一直读取
                    GetBuff5 = pins.i2cReadBuffer(motoraddress, 6)
                    flag4 = GetBuff5.getNumber(NumberFormat.Int8BE, 5)
                    // serial.writeLine("read2:" + flag);
                    if ((flag4 == 11)) break;//等待电机执行完指令或堵转时，跳出循环
                }
            }
        }
    }

    //% blockId=SuperBit_runDMotor block="Dual motors rotate at|%speed1| |%speed2|"

    //% speed1.min=-100 speed1.max=100

    //% speed2.min=-100 speed2.max=100

    //% parts="SuperBit_runDMotor" subcategory=Movement group="Servo Motor"

    export function runDMotor(speed1: number, speed2: number): void {

        speed1 = -speed1 / 2
        speed2 = speed2 / 2

        let speed_Buff1
        if (speed1 < 0) {
            speed1 = -speed1
            speed_Buff1 = (~speed1) + 1
            speed_Buff1 = speed_Buff1 | 0x80
        }
        else {
            speed_Buff1 = speed1
        }

        let speed_Buff23
        if (speed2 < 0) {
            speed2 = -speed2
            speed_Buff23 = (~speed2) + 1
            speed_Buff23 = speed_Buff23 | 0x80
        }
        else {
            speed_Buff23 = speed2
        }

        let SetBuff3 = pins.createBuffer(4)
        let SetBuffc = pins.createBuffer(4)


        SetBuff3.setNumber(NumberFormat.UInt8BE, 0, 0x11)
        SetBuff3.setNumber(NumberFormat.UInt8BE, 1, speed_Buff1)
        SetBuff3.setNumber(NumberFormat.UInt8BE, 2, 0)
        SetBuff3.setNumber(NumberFormat.UInt8BE, 3, 0)

        SetBuffc.setNumber(NumberFormat.UInt8BE, 0, 0x11)
        SetBuffc.setNumber(NumberFormat.UInt8BE, 1, speed_Buff23)
        SetBuffc.setNumber(NumberFormat.UInt8BE, 2, 0)
        SetBuffc.setNumber(NumberFormat.UInt8BE, 3, 0)

        pins.i2cWriteBuffer(caraddress1, SetBuff3)
        pins.i2cWriteBuffer(caraddress2, SetBuffc)

    }
    //% blockId="writeDmotorlocation" block="Dual motors at|%speed1| |%speed2|in|%location|degrees"

    //% speed1.min=-100 speed1.max=100

    //% speed2.min=-100 speed2.max=100
    //% location.min=0 
    //% parts="writeDmotorlocation" subcategory=Movement group="Servo Motor"

    export function WriteDmotorlocation(speed1: number, speed2: number, location: number): void {
        if (((location <= 5) && (location >= 0)) || ((location >= -5) && (location <= 0))) {
            return;
        }
        speed1 = -speed1 / 2
        speed2 = speed2 / 2

        let location1
        let location_Buff1

        let location2
        let location_Buff23

        location2 = ~location
        location1 = ~location

        if (speed2 < 0) {
            speed2 = -speed2
            location_Buff23 = location2 + 1
        }
        else {
            location_Buff23 = location
        }

        if (speed1 < 0) {
            speed1 = -speed1
            location_Buff1 = location1 + 1
        }
        else {
            location_Buff1 = location
        }

        if (speed1 == 0) {
            location_Buff1 = 0
        }

        if (speed2 == 0) {
            location_Buff23 = 0
        }

        let SetBuff23 = pins.createBuffer(4)
        let SetBuff2c = pins.createBuffer(4)


        SetBuff2c.setNumber(NumberFormat.UInt8BE, 0, 0x4)
        SetBuff2c.setNumber(NumberFormat.UInt8BE, 1, speed2)
        SetBuff2c.setNumber(NumberFormat.UInt8BE, 2, location_Buff23 >> 8)
        SetBuff2c.setNumber(NumberFormat.UInt8BE, 3, location_Buff23)


        SetBuff23.setNumber(NumberFormat.UInt8BE, 0, 0x4)
        SetBuff23.setNumber(NumberFormat.UInt8BE, 1, speed1)
        SetBuff23.setNumber(NumberFormat.UInt8BE, 2, location_Buff1 >> 8)
        SetBuff23.setNumber(NumberFormat.UInt8BE, 3, location_Buff1)

        if ((location != 0) && ((speed1 != 0) || (speed2 != 0))) {


            let GetBuff6 = pins.createBuffer(7)
            let GetBuff1 = pins.createBuffer(7)

            //发送控制参数并获取运动状态
            pins.i2cWriteBuffer(caraddress1, SetBuff23)
            GetBuff1 = pins.i2cReadBuffer(caraddress1, 6)
            pins.i2cWriteBuffer(caraddress2, SetBuff2c)
            GetBuff6 = pins.i2cReadBuffer(caraddress2, 6)

            let flag5 = GetBuff6.getNumber(NumberFormat.Int8BE, 5)//获取了第6位
            let flag1 = GetBuff1.getNumber(NumberFormat.Int8BE, 5)//获取了第6位
            //4为正在运行
            while (true) {//如果没有在运行，则一直读取

                GetBuff6 = pins.i2cReadBuffer(caraddress2, 6)
                GetBuff1 = pins.i2cReadBuffer(caraddress1, 6)
                flag5 = GetBuff6.getNumber(NumberFormat.Int8BE, 5)
                flag1 = GetBuff1.getNumber(NumberFormat.Int8BE, 5)
                if ((flag1 == 4) || (flag5 == 4)) break;//当有一个电机转动起来的时候，就退出死循环


            }
            //11为运行结束
            while (true) {
                GetBuff6 = pins.i2cReadBuffer(caraddress2, 6)
                GetBuff1 = pins.i2cReadBuffer(caraddress1, 6)
                flag5 = GetBuff6.getNumber(NumberFormat.Int8BE, 5)
                flag1 = GetBuff1.getNumber(NumberFormat.Int8BE, 5)
                // 11：结束运动，10：堵转停止
                if (((flag1 == 11) || (flag1 == 10)) && ((flag5 == 11) || (flag5 == 10))) break;//当有两个电机都执行完毕的时候，就退出死循环
            }
        }
    }

    //% blockId="writeDmotortime" block="Dual motors rotate at |%speed1| |%speed2|in|%time|seconds"

    //% speed1.min=-100 speed1.max=100

    //% speed2.min=-100 speed2.max=100
    //% time.min=0 
    //% parts="writeDmotortime" subcategory=Movement group="Servo Motor"

    export function writeDmotortime(speed1: number, speed2: number, time: number): void {

        speed1 = -speed1 / 2
        speed2 = speed2 / 2
        // serial.writeLine("read1:" + time + "," + (time > 0 && time < 0.1));
        if (time > 0 && time < 0.1) {
            time = 0.1;
        }
        time = time * 10
        let speed_Buff32
        let speed_Buff4

        if (speed1 < 0) {
            speed1 = -speed1
            speed_Buff32 = (~speed1) + 1
            speed_Buff32 = speed_Buff32 | 0x80
        }
        else {
            speed_Buff32 = speed1
        }

        if (speed2 < 0) {
            speed2 = -speed2
            speed_Buff4 = (~speed2) + 1
            speed_Buff4 = speed_Buff4 | 0x80
        }
        else {
            speed_Buff4 = speed2
        }

        let SetBuff32 = pins.createBuffer(4)
        let SetBuff4 = pins.createBuffer(4)

        SetBuff32.setNumber(NumberFormat.UInt8BE, 0, 0x12)
        SetBuff32.setNumber(NumberFormat.UInt8BE, 1, speed_Buff32)
        SetBuff32.setNumber(NumberFormat.UInt8BE, 2, time >> 8)
        SetBuff32.setNumber(NumberFormat.UInt8BE, 3, time)

        SetBuff4.setNumber(NumberFormat.UInt8BE, 0, 0x12)
        SetBuff4.setNumber(NumberFormat.UInt8BE, 1, speed_Buff4)
        SetBuff4.setNumber(NumberFormat.UInt8BE, 2, time >> 8)
        SetBuff4.setNumber(NumberFormat.UInt8BE, 3, time)
        // serial.writeLine("read1:" + SetBuff4.getNumber(NumberFormat.UInt8BE, ));

        if (speed1 != 0) {
            pins.i2cWriteBuffer(caraddress1, SetBuff32)
        }
        if (speed2 != 0) {
            pins.i2cWriteBuffer(caraddress2, SetBuff4)
        }



        if ((time !== 0) && ((speed1 !== 0) || (speed2 !== 0))) {
            let GetBuff7 = pins.createBuffer(6)
            let GetBuff12 = pins.createBuffer(6)

            GetBuff7 = pins.i2cReadBuffer(caraddress2, 6)
            GetBuff12 = pins.i2cReadBuffer(caraddress1, 6)

            let flag6 = GetBuff7.getNumber(NumberFormat.Int8BE, 5)//获取了第6位
            let flag12 = GetBuff12.getNumber(NumberFormat.Int8BE, 5)//获取了第6位

            while (true) {//如果没有在运行，则一直读取

                GetBuff7 = pins.i2cReadBuffer(caraddress2, 6)
                GetBuff12 = pins.i2cReadBuffer(caraddress1, 6)
                flag6 = GetBuff7.getNumber(NumberFormat.Int8BE, 5)
                flag12 = GetBuff12.getNumber(NumberFormat.Int8BE, 5)
                // serial.writeLine("read2:[" + flag1 + "," + flag+"]");
                if ((flag12 == 0x7) || (flag6 == 0x7)) break;//当有一个电机转动起来的时候，就退出死循环


            }
            //11为运行结束
            while (true) {
                GetBuff7 = pins.i2cReadBuffer(caraddress2, 6)
                GetBuff12 = pins.i2cReadBuffer(caraddress1, 6)
                flag6 = GetBuff7.getNumber(NumberFormat.Int8BE, 5)
                flag12 = GetBuff12.getNumber(NumberFormat.Int8BE, 5)
                // serial.writeLine("read3:[" + flag1 + "," + flag + "]");
                if (((flag12 == 11)) && ((flag6 == 11))) break;//当有两个电机都执行完毕的时候，就退出死循环

            }
        }

    }

    //% blockId=SuperBit_DMotor block="Set left motor to|%motoraddress1|and right motor to|%motoraddress2|"

    //% parts="SuperBit_DMotor" subcategory=Movement group="Servo Motor"

    export function DMotor(motoraddress1: enMotorcolor, motoraddress2: enMotorcolor): void {
        caraddress1 = motoraddress1

        caraddress2 = motoraddress2

    }


    //% blockId=SuperBit_Servo4 block="Servo| %num|angle %value"
    //% num.min=1 num.max=4 value.min=0 value.max=300
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=20
    //%  subcategory=Movement
    export function Servo4(num: enServo, value: number): void {

        // 50hz: 20,000 us
        let us = (value * 1800 * 0.6 / 180 + 600); // 0.6 ~ 2.4
        let pwm = us * 4096 / 20000;
        setPwm(num, 0, pwm);

    }

    //% blockId="readmotorspeed" block="Read speed of the |%motoraddress|motor"

    //% parts="readmotorspeed" subcategory=Movement group="Servo Motor"

    export function Readmotorspeed(motoraddress: enMotorcolor): number {

        let GetBuff8 = pins.createBuffer(6)
        GetBuff8 = pins.i2cReadBuffer(motoraddress, 6)
        return GetBuff8.getNumber(NumberFormat.Int8BE, 0);

    }

    function getMotorLocation(buffer: Buffer) {

        let location_Buff = (buffer.getNumber(NumberFormat.Int8BE, 1) << 8) + buffer.getNumber(NumberFormat.Int8BE, 2)
        let This_location;
        if (location_Buff & 0x0080) {
            This_location = location_Buff + 0x0100
        }
        else {
            This_location = location_Buff
        }
        return This_location;
    }
    function getMotorSpeed(buffer: Buffer) {

        let location_Buff3 = (buffer.getNumber(NumberFormat.Int8BE, 0) << 8) + buffer.getNumber(NumberFormat.Int8BE, 1)
        let This_speed;
        if (location_Buff3 & 0x0080) {
            This_speed = location_Buff3 + 0x0100
        }
        else {
            This_speed = location_Buff3
        }
        return This_speed;
    }

    //% blockId="readmotorlocation" block="Read position of the |%motoraddress|motor"

    //% parts="readmotorlocation" subcategory=Movement group="Servo Motor"

    export function Readmotorlocation(motoraddress: enMotorcolor): number {

        let GetBuff22 = pins.createBuffer(6)

        GetBuff22 = pins.i2cReadBuffer(motoraddress, 6)
        let This_location2 = getMotorLocation(GetBuff22);
        return This_location2;

    }
    



    /**

    * toggle fans

    */

    //% blockId=fans block="Fan %fanpin switch $fanstate || speed %speed"

    //% fanstate.shadow="toggleOnOff"

    //% weight=24

    //% fanpin.fieldEditor="gridpicker"

    //% fanpin.fieldOptions.width=220

    //% fanpin.fieldOptions.columns=1

    //% speed.min=0 speed.max=1023

    //% expandableArgumentMode="toggle"

    //% subcategory=Movement

    export function motorFan(fanpin: Read_pin, fanstate: boolean, speed: number = 1023): void {

        let pin3





        if (fanpin == 1) {



            pin3 = AnalogPin.P0;

        }

        if (fanpin == 2) {

            pin3 = AnalogPin.P1;

        }

        if (fanpin == 3) {

            pin3 = AnalogPin.P2;

        }



        if (fanstate) {

            pins.analogSetPeriod(pin3, 1023);

            pins.analogWritePin(pin3, Math.map(speed, 0, 1023, 0, 1023));

        }

        else {

            pins.analogWritePin(pin3, 0);

            speed = 0;

        }



    }



    //% blockId="elecmagnet" block="Electromagnet %elecpin switch %magState || electromagnet %force"

    //% magState.shadow="toggleOnOff"

    //% weight=23

    //% elecpin.fieldEditor="gridpicker"

    //% elecpin.fieldOptions.width=220

    //% elecpin.fieldOptions.columns=2

    //% force.min=0 force.max=1023

    //% expandableArgumentMode="toggle"

    //% subcategory=Movement

    export function elecmagnet(elecpin: Write_pin, magState: boolean, force: number = 1023): void {

        let pin8

        if (elecpin == 1) {



            pin8 = AnalogPin.P0;

        }

        if (elecpin == 2) {

            pin8 = AnalogPin.P16;

        }

        if (elecpin == 3) {

            pin8 = AnalogPin.P1;

        }

        if (elecpin == 4) {



            pin8 = AnalogPin.P12;

        }

        if (elecpin == 5) {

            pin8 = AnalogPin.P2;

        }

        if (elecpin == 6) {

            pin8 = AnalogPin.P8;

        }



        if (magState == true) {

            pins.analogSetPeriod(pin8, 1023)

            pins.analogWritePin(pin8, Math.map(force, 0, 1023, 0, 1023))

        }

        else {

            pins.analogWritePin(pin8, 0)

            force = 0

        }

    }



    ////////////////////////////////////////////



    /**
  * toggle led
  */
    //% blockId=LEDR block="Red LED %pin swicth $ledstate "
    //% ledstate.shadow="toggleOnOff"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=220
    //% pin.fieldOptions.columns=2
    //% expandableArgumentMode="toggle"
    //% subcategory="Audio-visual" group="LED"
    export function ledRBrightness(pin: Write_pin, ledstate: boolean): void {
        let myPin; // 直接将 pin 赋值给 myPin

        switch (pin) {
            case 1:
                myPin = DigitalPin.P0;
                break;
            case 2:
                myPin = DigitalPin.P16;
                break;
            case 3:
                myPin = DigitalPin.P1;
                break;
            case 4:
                myPin = DigitalPin.P12;
                break;
            case 5:
                myPin = DigitalPin.P2;
                break;
            case 6:
                myPin = DigitalPin.P8;
                break;
        }
        if (ledstate) {
            pins.digitalWritePin(myPin, 0)
        }
        else {
            pins.digitalWritePin(myPin, 1)
        }
    }


    /**
   * toggle led
   */
    //% blockId=LEDG block="Green LED %pin switch $ledstate "
    //% ledstate.shadow="toggleOnOff"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=220
    //% pin.fieldOptions.columns=2
    //% expandableArgumentMode="toggle"
    //% subcategory="Audio-visual" group="LED"
    export function ledGBrightness(pin: Write_pin, ledstate: boolean): void {
        let myPin2; // 直接将 pin 赋值给 myPin

        switch (pin) {
            case 1:
                myPin2 = DigitalPin.P0;
                break;
            case 2:
                myPin2 = DigitalPin.P16;
                break;
            case 3:
                myPin2 = DigitalPin.P1;
                break;
            case 4:
                myPin2 = DigitalPin.P12;
                break;
            case 5:
                myPin2 = DigitalPin.P2;
                break;
            case 6:
                myPin2 = DigitalPin.P8;
                break;
        }

        if (ledstate) {
            pins.digitalWritePin(myPin2, 0)
        }
        else {
            pins.digitalWritePin(myPin2, 1)
        }
    }

    /**
     * toggle led
     */
    //% blockId=LEDB block="Blue LED %pin switch $ledstate "
    //% ledstate.shadow="toggleOnOff"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=220
    //% pin.fieldOptions.columns=2
    //% expandableArgumentMode="toggle"
    //% subcategory="Audio-visual" group="LED"
    export function ledBBrightness(pin: Write_pin, ledstate: boolean): void {
        let myPin3; // 直接将 pin 赋值给 myPin

        switch (pin) {
            case 1:
                myPin3 = DigitalPin.P0;
                break;
            case 2:
                myPin3 = DigitalPin.P16;
                break;
            case 3:
                myPin3 = DigitalPin.P1;
                break;
            case 4:
                myPin3 = DigitalPin.P12;
                break;
            case 5:
                myPin3 = DigitalPin.P2;
                break;
            case 6:
                myPin3 = DigitalPin.P8;
                break;
        }
        if (ledstate) {
            pins.digitalWritePin(myPin3, 0)
        }
        else {
            pins.digitalWritePin(myPin3, 1)
        }
    }

    /**
    * toggle led
    */
    //% blockId=LEDY block="Yellow LED %pin swicth $ledstate "
    //% ledstate.shadow="toggleOnOff"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=220
    //% pin.fieldOptions.columns=2
    //% expandableArgumentMode="toggle"
    //% subcategory="Audio-visual" group="LED"
    export function ledYBrightness(pin: Write_pin, ledstate: boolean): void {
        let myPin4; // 直接将 pin 赋值给 myPin

        switch (pin) {
            case 1:
                myPin4 = DigitalPin.P0;
                break;
            case 2:
                myPin4 = DigitalPin.P16;
                break;
            case 3:
                myPin4 = DigitalPin.P1;
                break;
            case 4:
                myPin4 = DigitalPin.P12;
                break;
            case 5:
                myPin4 = DigitalPin.P2;
                break;
            case 6:
                myPin4 = DigitalPin.P8;
                break;
        }

        if (ledstate) {
            pins.digitalWritePin(myPin4, 0)
        }
        else {
            pins.digitalWritePin(myPin4, 1)
        }
    }









    enum LCS_Constants {

        // Constants

        ADDRESS = 0x29,

        ID = 0x12, // Register should be equal to 0x44 for the TCS34721 or TCS34725, or 0x4D for the TCS34723 or TCS34727.



        COMMAND_BIT = 0x80,



        ENABLE = 0x00,

        ENABLE_AIEN = 0x10, // RGBC Interrupt Enable

        ENABLE_WEN = 0x08, // Wait enable - Writing 1 activates the wait timer

        ENABLE_AEN = 0x02, // RGBC Enable - Writing 1 actives the ADC, 0 disables it

        ENABLE_PON = 0x01, // Power on - Writing 1 activates the internal oscillator, 0 disables it

        ATIME = 0x01, // Integration time

        WTIME = 0x03, // Wait time (if ENABLE_WEN is asserted)

        AILTL = 0x04, // Clear channel lower interrupt threshold

        AILTH = 0x05,

        AIHTL = 0x06, // Clear channel upper interrupt threshold

        AIHTH = 0x07,

        PERS = 0x0C, // Persistence register - basic SW filtering mechanism for interrupts

        PERS_NONE = 0x00, // Every RGBC cycle generates an interrupt

        PERS_1_CYCLE = 0x01, // 1 clean channel value outside threshold range generates an interrupt

        PERS_2_CYCLE = 0x02, // 2 clean channel values outside threshold range generates an interrupt

        PERS_3_CYCLE = 0x03, // 3 clean channel values outside threshold range generates an interrupt

        PERS_5_CYCLE = 0x04, // 5 clean channel values outside threshold range generates an interrupt

        PERS_10_CYCLE = 0x05, // 10 clean channel values outside threshold range generates an interrupt

        PERS_15_CYCLE = 0x06, // 15 clean channel values outside threshold range generates an interrupt

        PERS_20_CYCLE = 0x07, // 20 clean channel values outside threshold range generates an interrupt

        PERS_25_CYCLE = 0x08, // 25 clean channel values outside threshold range generates an interrupt

        PERS_30_CYCLE = 0x09, // 30 clean channel values outside threshold range generates an interrupt

        PERS_35_CYCLE = 0x0A, // 35 clean channel values outside threshold range generates an interrupt

        PERS_40_CYCLE = 0x0B, // 40 clean channel values outside threshold range generates an interrupt

        PERS_45_CYCLE = 0x0C, // 45 clean channel values outside threshold range generates an interrupt

        PERS_50_CYCLE = 0x0D, // 50 clean channel values outside threshold range generates an interrupt

        PERS_55_CYCLE = 0x0E, // 55 clean channel values outside threshold range generates an interrupt

        PERS_60_CYCLE = 0x0F, // 60 clean channel values outside threshold range generates an interrupt

        CONFIG = 0x0D,

        CONFIG_WLONG = 0x02, // Choose between short and long (12x) wait times via WTIME

        CONTROL = 0x0F, // Set the gain level for the sensor

        STATUS = 0x13,

        STATUS_AINT = 0x10, // RGBC Clean channel interrupt

        STATUS_AVALID = 0x01, // Indicates that the RGBC channels have completed an integration cycle



        CDATAL = 0x14, // Clear channel data

        CDATAH = 0x15,

        RDATAL = 0x16, // Red channel data

        RDATAH = 0x17,

        GDATAL = 0x18, // Green channel data

        GDATAH = 0x19,

        BDATAL = 0x1A, // Blue channel data

        BDATAH = 0x1B,



        GAIN_1X = 0x00, //  1x gain

        GAIN_4X = 0x01, //  4x gain

        GAIN_16X = 0x02, // 16x gain

        GAIN_60X = 0x03  // 60x gain

    }



    let LCS_integration_time_val = 0



    // I2C functions



    function I2C_WriteReg8(addr: number, reg: number, val: number) {

        let buf32 = pins.createBuffer(2)

        buf32.setNumber(NumberFormat.UInt8BE, 0, reg)

        buf32.setNumber(NumberFormat.UInt8BE, 1, val)

        pins.i2cWriteBuffer(addr, buf32)

    }



    function I2C_ReadReg8(addr: number, reg: number): number {

        let buf42 = pins.createBuffer(1)

        buf42.setNumber(NumberFormat.UInt8BE, 0, reg)

        pins.i2cWriteBuffer(addr, buf42)

        buf42 = pins.i2cReadBuffer(addr, 1)

        return buf42.getNumber(NumberFormat.UInt8BE, 0);

    }



    function I2C_ReadReg16(addr: number, reg: number): number {

        let buf52 = pins.createBuffer(1)

        buf52.setNumber(NumberFormat.UInt8BE, 0, reg)

        pins.i2cWriteBuffer(addr, buf52)

        buf52 = pins.i2cReadBuffer(addr, 2)

        // Little endian

        return ((buf52.getNumber(NumberFormat.UInt8BE, 1) << 8) | buf52.getNumber(NumberFormat.UInt8BE, 0));

    }

    function LCS_get_raw_data(delay: boolean = false): number[] {

        if (delay) {

            // Delay for the integration time to allow reading immediately after the previous read.

            basic.pause((256 - LCS_integration_time_val) * 2.4)

        }



        let div = (256 - LCS_integration_time_val) * 1024

        let rgbc = [0, 0, 0, 0]

        rgbc[0] = I2C_ReadReg16(LCS_Constants.ADDRESS, (LCS_Constants.COMMAND_BIT | LCS_Constants.RDATAL)) / div

        rgbc[1] = I2C_ReadReg16(LCS_Constants.ADDRESS, (LCS_Constants.COMMAND_BIT | LCS_Constants.GDATAL)) / div

        rgbc[2] = I2C_ReadReg16(LCS_Constants.ADDRESS, (LCS_Constants.COMMAND_BIT | LCS_Constants.BDATAL)) / div

        rgbc[3] = I2C_ReadReg16(LCS_Constants.ADDRESS, (LCS_Constants.COMMAND_BIT | LCS_Constants.CDATAL)) / div

        if (rgbc[0] > 1) {

            rgbc[0] = 1

        }

        if (rgbc[1] > 1) {

            rgbc[1] = 1

        }

        if (rgbc[2] > 1) {

            rgbc[2] = 1

        }

        if (rgbc[3] > 1) {

            rgbc[3] = 1

        }

        return rgbc

    }



    let font: number[] = [];

    font[0] = 0x0022d422;

    font[1] = 0x0022d422;

    font[2] = 0x0022d422;

    font[3] = 0x0022d422;

    font[4] = 0x0022d422;

    font[5] = 0x0022d422;

    font[6] = 0x0022d422;

    font[7] = 0x0022d422;

    font[8] = 0x0022d422;

    font[9] = 0x0022d422;

    font[10] = 0x0022d422;

    font[11] = 0x0022d422;

    font[12] = 0x0022d422;

    font[13] = 0x0022d422;

    font[14] = 0x0022d422;

    font[15] = 0x0022d422;

    font[16] = 0x0022d422;

    font[17] = 0x0022d422;

    font[18] = 0x0022d422;

    font[19] = 0x0022d422;

    font[20] = 0x0022d422;

    font[21] = 0x0022d422;

    font[22] = 0x0022d422;

    font[23] = 0x0022d422;

    font[24] = 0x0022d422;

    font[25] = 0x0022d422;

    font[26] = 0x0022d422;

    font[27] = 0x0022d422;

    font[28] = 0x0022d422;

    font[29] = 0x0022d422;

    font[30] = 0x0022d422;

    font[31] = 0x0022d422;

    font[32] = 0x00000000;

    font[33] = 0x000002e0;

    font[34] = 0x00018060;

    font[35] = 0x00afabea;

    font[36] = 0x00aed6ea;

    font[37] = 0x01991133;

    font[38] = 0x010556aa;

    font[39] = 0x00000060;

    font[40] = 0x000045c0;

    font[41] = 0x00003a20;

    font[42] = 0x00051140;

    font[43] = 0x00023880;

    font[44] = 0x00002200;

    font[45] = 0x00021080;

    font[46] = 0x00000100;

    font[47] = 0x00111110;

    font[48] = 0x0007462e;

    font[49] = 0x00087e40;

    font[50] = 0x000956b9;

    font[51] = 0x0005d629;

    font[52] = 0x008fa54c;

    font[53] = 0x009ad6b7;

    font[54] = 0x008ada88;

    font[55] = 0x00119531;

    font[56] = 0x00aad6aa;

    font[57] = 0x0022b6a2;

    font[58] = 0x00000140;

    font[59] = 0x00002a00;

    font[60] = 0x0008a880;

    font[61] = 0x00052940;

    font[62] = 0x00022a20;

    font[63] = 0x0022d422;

    font[64] = 0x00e4d62e;

    font[65] = 0x000f14be;

    font[66] = 0x000556bf;

    font[67] = 0x0008c62e;

    font[68] = 0x0007463f;

    font[69] = 0x0008d6bf;

    font[70] = 0x000094bf;

    font[71] = 0x00cac62e;

    font[72] = 0x000f909f;

    font[73] = 0x000047f1;

    font[74] = 0x0017c629;

    font[75] = 0x0008a89f;

    font[76] = 0x0008421f;

    font[77] = 0x01f1105f;

    font[78] = 0x01f4105f;

    font[79] = 0x0007462e;

    font[80] = 0x000114bf;

    font[81] = 0x000b6526;

    font[82] = 0x010514bf;

    font[83] = 0x0004d6b2;

    font[84] = 0x0010fc21;

    font[85] = 0x0007c20f;

    font[86] = 0x00744107;

    font[87] = 0x01f4111f;

    font[88] = 0x000d909b;

    font[89] = 0x00117041;

    font[90] = 0x0008ceb9;

    font[91] = 0x0008c7e0;

    font[92] = 0x01041041;

    font[93] = 0x000fc620;

    font[94] = 0x00010440;

    font[95] = 0x01084210;

    font[96] = 0x00000820;

    font[97] = 0x010f4a4c;

    font[98] = 0x0004529f;

    font[99] = 0x00094a4c;

    font[100] = 0x000fd288;

    font[101] = 0x000956ae;

    font[102] = 0x000097c4;

    font[103] = 0x0007d6a2;

    font[104] = 0x000c109f;

    font[105] = 0x000003a0;

    font[106] = 0x0006c200;

    font[107] = 0x0008289f;

    font[108] = 0x000841e0;

    font[109] = 0x01e1105e;

    font[110] = 0x000e085e;

    font[111] = 0x00064a4c;

    font[112] = 0x0002295e;

    font[113] = 0x000f2944;

    font[114] = 0x0001085c;

    font[115] = 0x00012a90;

    font[116] = 0x010a51e0;

    font[117] = 0x010f420e;

    font[118] = 0x00644106;

    font[119] = 0x01e8221e;

    font[120] = 0x00093192;

    font[121] = 0x00222292;

    font[122] = 0x00095b52;

    font[123] = 0x0008fc80;

    font[124] = 0x000003e0;

    font[125] = 0x000013f1;

    font[126] = 0x00841080;

    font[127] = 0x0022d422;



    let _I2CAddr = 0;

    let _screen = pins.createBuffer(1025);

    let _buf2 = pins.createBuffer(2);

    let _buf3 = pins.createBuffer(3);

    let _buf4 = pins.createBuffer(4);

    let _ZOOM = 1;



    function cmd1(d: number) {

        let n = d % 256;

        pins.i2cWriteNumber(_I2CAddr, n, NumberFormat.UInt16BE);

    }



    function cmd2(d1: number, d2: number) {

        _buf3[0] = 0;

        _buf3[1] = d1;

        _buf3[2] = d2;

        pins.i2cWriteBuffer(_I2CAddr, _buf3);

    }



    function cmd3(d1: number, d2: number, d3: number) {

        _buf4[0] = 0;

        _buf4[1] = d1;

        _buf4[2] = d2;

        _buf4[3] = d3;

        pins.i2cWriteBuffer(_I2CAddr, _buf4);

    }



    function set_pos(col: number = 0, page: number = 0) {

        cmd1(0xb0 | page) // page number

        let c = col * (_ZOOM + 1)

        cmd1(0x00 | (c % 16)) // lower start column address

        cmd1(0x10 | (c >> 4)) // upper start column address    

    }



    // clear bit

    function clrbit(d: number, b: number): number {

        if (d & (1 << b))

            d -= (1 << b)

        return d

    }








    /**

     * A NeoPixel strip

     */

    export class Strip {

        buf: Buffer;

        pin: DigitalPin;

        // TODO: encode as bytes instead of 32bit

        brightness: number;

        start: number; // start offset in LED strip

        _length: number; // number of LEDs

        _mode: NeoPixelMode;

        _matrixWidth: number; // number of leds in a matrix - if any



        /**

         * Shows all LEDs to a given color (range 0-255 for r, g, b).

         * @param rgb RGB color of the LED

         */

        //% blockId="neopixel_set_strip_color" block="%strip|display Color %rgb=neopixel_colors"

        //% strip.defl=strip

        //% weight=12

        //% parts="neopixel" subcategory="Audio-visual" group="RGB LED Module"

        //% color=#2699BF blockGap=10

        showColor(rgb: number) {

            rgb = rgb >> 0;

            this.setAllRGB(rgb);

            this.show();

        }



        /**

         * Shows a rainbow pattern on all LEDs.

         * @param startHue the start hue value for the rainbow, eg: 1

         * @param endHue the end hue value for the rainbow, eg: 360

         */

        //% blockId="neopixel_set_strip_rainbow" block="%strip|Display rainbow from start %startHue|to %endHue"

        //% strip.defl=strip

        //% weight=13

        //% parts="neopixel" subcategory="Audio-visual" group="RGB LED Module"

        //% color=#2699BF blockGap=10

        showRainbow(startHue: number = 1, endHue: number = 360) {

            if (this._length <= 0) return;



            startHue = startHue >> 0;

            endHue = endHue >> 0;

            const saturation = 100;

            const luminance = 50;

            const steps = this._length + 1;

            const direction = HueInterpolationDirection.Clockwise;



            //hue

            const h1 = startHue;

            const h2 = endHue;

            const hDistCW = ((h2 + 360) - h1) % 360;

            const hStepCW = Math.idiv((hDistCW * 100), steps);

            const hDistCCW = ((h1 + 360) - h2) % 360;

            const hStepCCW = Math.idiv(-(hDistCCW * 100), steps);

            let hStep: number;

            if (direction === HueInterpolationDirection.Clockwise) {

                hStep = hStepCW;

            } else if (direction === HueInterpolationDirection.CounterClockwise) {

                hStep = hStepCCW;

            } else {

                hStep = hDistCW < hDistCCW ? hStepCW : hStepCCW;

            }

            const h1_100 = h1 * 100; //we multiply by 100 so we keep more accurate results while doing interpolation



            //sat

            const s1 = saturation;

            const s2 = saturation;

            const sDist = s2 - s1;

            const sStep = Math.idiv(sDist, steps);

            const s1_100 = s1 * 100;



            //lum

            const l1 = luminance;

            const l2 = luminance;

            const lDist = l2 - l1;

            const lStep = Math.idiv(lDist, steps);

            const l1_100 = l1 * 100



            //interpolate

            if (steps === 1) {

                this.setPixelColor(0, hsl(h1 + hStep, s1 + sStep, l1 + lStep))

            } else {

                this.setPixelColor(0, hsl(startHue, saturation, luminance));

                for (let t = 1; t < steps - 1; t++) {

                    const u = Math.idiv((h1_100 + t * hStep), 100) + 360;

                    const v = Math.idiv((s1_100 + t * sStep), 100);

                    const w = Math.idiv((l1_100 + t * lStep), 100);

                    this.setPixelColor(t, hsl(u, v, w));

                }

                this.setPixelColor(steps - 1, hsl(endHue, saturation, luminance));

            }

            this.show();

        }






        setPixelColor(pixeloffset: number, rgb: number): void {

            this.setPixelRGB((pixeloffset - 1) >> 0, rgb >> 0);

        }





        show() {

            // only supported in beta

            // ws2812b.setBufferMode(this.pin, this._mode);

            ws2812b.sendBuffer(this.buf, this.pin);

        }



        /**
    
         * Set the brightness of the strip. This flag only applies to future operation.
    
         * @param brightness a measure of LED brightness in 0-255. eg: 255
    
         */

        //% blockId="neopixel_set_brightness" block="%strip|set brightness %brightness"

        //% strip.defl=strip

        //% weight=17

        //% parts="neopixel" subcategory="Audio-visual" group="RGB LED Module"

        //% color=#2699BF blockGap=10

        setBrightness(brightness: number): void {

            this.brightness = brightness & 0xff;

        }



        /**
    
         * Set the pin where the neopixel is connected, defaults to P0.
    
         */

        //% parts="neopixel" subcategory="Audio-visual" group="RGB LED Module"

        //% color=#2699BF blockGap=10

        setPin(pin: DigitalPin): void {



            this.pin = pin;

            pins.digitalWritePin(this.pin, 0);

            // don't yield to avoid races on initialization

        }







        private setBufferRGB(offset: number, red: number, green: number, blue: number): void {

            if (this._mode === NeoPixelMode.RGB_RGB) {

                this.buf[offset + 0] = red;

                this.buf[offset + 1] = green;

            } else {

                this.buf[offset + 0] = green;

                this.buf[offset + 1] = red;

            }

            this.buf[offset + 2] = blue;

        }



        private setAllRGB(rgb: number) {

            let red = unpackR(rgb);

            let green = unpackG(rgb);

            let blue = unpackB(rgb);



            const br3 = this.brightness;

            if (br3 < 255) {

                red = (red * br3) >> 8;

                green = (green * br3) >> 8;

                blue = (blue * br3) >> 8;

            }

            const end3 = this.start + this._length;

            const stride6 = this._mode === NeoPixelMode.RGBW ? 4 : 3;

            for (let i5 = this.start; i5 < end3; ++i5) {

                this.setBufferRGB(i5 * stride6, red, green, blue)

            }

        }

        private setAllW(white: number) {

            if (this._mode !== NeoPixelMode.RGBW)

                return;



            let br4 = this.brightness;

            if (br4 < 255) {

                white = (white * br4) >> 8;

            }

            let buf8 = this.buf;

            let end4 = this.start + this._length;

            for (let i6 = this.start; i6 < end4; ++i6) {

                let ledoffset3 = i6 * 4;

                buf8[ledoffset3 + 3] = white;

            }

        }

        private setPixelRGB(pixeloffset: number, rgb: number): void {

            if (pixeloffset < 0

                || pixeloffset >= this._length)

                return;



            let stride7 = this._mode === NeoPixelMode.RGBW ? 4 : 3;

            pixeloffset = (pixeloffset + this.start) * stride7;



            let red2 = unpackR(rgb);

            let green2 = unpackG(rgb);

            let blue2 = unpackB(rgb);



            let br5 = this.brightness;

            if (br5 < 255) {

                red2 = (red2 * br5) >> 8;

                green2 = (green2 * br5) >> 8;

                blue2 = (blue2 * br5) >> 8;

            }

            this.setBufferRGB(pixeloffset, red2, green2, blue2)

        }

        private setPixelW(pixeloffset: number, white: number): void {

            if (this._mode !== NeoPixelMode.RGBW)

                return;



            if (pixeloffset < 0

                || pixeloffset >= this._length)

                return;



            pixeloffset = (pixeloffset + this.start) * 4;



            let br6 = this.brightness;

            if (br6 < 255) {

                white = (white * br6) >> 8;

            }

            let buf9 = this.buf;

            buf9[pixeloffset + 3] = white;

        }

    }



    /**
    
     * Create a new NeoPixel driver for `numleds` LEDs.
    
     * @param pin the pin where the neopixel is connected.
    
     * @param numleds number of leds in the strip, eg: 8,30,60,64
    
     */

    //% blockId="neopixel_create" block="Set color to using the LED ring-light port %neopixelpin "

    //% parts="neopixel" subcategory="Audio-visual" group="RGB LED Module"

    //% neopixelpin.fieldEditor="gridpicker"

    //% neopixelpin.fieldOptions.width=220

    //% neopixelpin.fieldOptions.columns=2

    //% weight=18

    //% trackArgs=0,2

    //% blockSetVariable=strip

    //% color=#2699BF blockGap=10

    //% weight=51

    export function create(neopixelpin: Write_pin): Strip {

        let strip2 = new Strip();

        let stride8 = NeoPixelMode.RGBW ? 4 : 3;

        strip2.buf = pins.createBuffer(8 * stride8);

        strip2.start = 0;

        strip2._length = 8;

        strip2._mode = NeoPixelMode.RGB;

        strip2._matrixWidth = 0;

        strip2.setBrightness(128)

        if (neopixelpin == 1) {

            strip2.setPin(DigitalPin.P0);

        }

        if (neopixelpin == 2) {

            strip2.setPin(DigitalPin.P16);

        }

        if (neopixelpin == 3) {

            strip2.setPin(DigitalPin.P1);

        }

        if (neopixelpin == 4) {

            strip2.setPin(DigitalPin.P12);

        }

        if (neopixelpin == 5) {

            strip2.setPin(DigitalPin.P2);

        }

        if (neopixelpin == 6) {

            strip2.setPin(DigitalPin.P8);

        }



        return strip2;

    }



    /**
    
     * Converts red, green, blue channels into a RGB color
    
     * @param red value of the red channel between 0 and 255. eg: 255
    
     * @param green value of the green channel between 0 and 255. eg: 255
    
     * @param blue value of the blue channel between 0 and 255. eg: 255
    
     */

    //% blockId="neopixel_rgb" block="red %red|green %green|blue %blue"

    //% parts="neopixel" subcategory="Audio-visual" group="RGB LED Module"

    //% weight=12

    //% color=#2699BF blockGap=10

    export function rgb(red: number, green: number, blue: number): number {

        return packRGB(red, green, blue);

    }



    /**
    
     * Gets the RGB value of a known color
    
    */

    //% blockId="neopixel_colors" block="%color"

    //% parts="neopixel" subcategory="Audio-visual" group="RGB LED Module"

    //% weight=13

    //% color=#2699BF blockGap=10

    export function colors(color: NeoPixelColors): number {

        return color;

    }



    function packRGB(a: number, b: number, c: number): number {

        return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);

    }



    function unpackR(rgb: number): number {

        let r3 = (rgb >> 16) & 0xFF;

        return r3;

    }



    function unpackG(rgb: number): number {

        let g3 = (rgb >> 8) & 0xFF;

        return g3;

    }



    function unpackB(rgb: number): number {

        let b3 = (rgb) & 0xFF;

        return b3;

    }



    export function hsl(h: number, s: number, l: number): number {

        h = Math.round(h);

        s = Math.round(s);

        l = Math.round(l);



        h = h % 360;

        s = Math.clamp(0, 99, s);

        l = Math.clamp(0, 99, l);

        let c2 = Math.idiv((((100 - Math.abs(2 * l - 100)) * s) << 8), 10000); //chroma, [0,255]

        let h12 = Math.idiv(h, 60);//[0,6]

        let h22 = Math.idiv((h - h12 * 60) * 256, 60);//[0,255]

        let temp = Math.abs((((h12 % 2) << 8) + h22) - 256);

        let x = (c2 * (256 - (temp))) >> 8;//[0,255], second largest component of this color

        let r$: number;

        let g$: number;

        let b$: number;

        if (h12 == 0) {

            r$ = c2; g$ = x; b$ = 0;

        } else if (h12 == 1) {

            r$ = x; g$ = c2; b$ = 0;

        } else if (h12 == 2) {

            r$ = 0; g$ = c2; b$ = x;

        } else if (h12 == 3) {

            r$ = 0; g$ = x; b$ = c2;

        } else if (h12 == 4) {

            r$ = x; g$ = 0; b$ = c2;

        } else if (h12 == 5) {

            r$ = c2; g$ = 0; b$ = x;

        }

        let m2 = Math.idiv((Math.idiv((l * 2 << 8), 100) - c2), 2);

        let r4 = r$ + m2;

        let g4 = g$ + m2;

        let b4 = b$ + m2;

        return packRGB(r4, g4, b4);

    }



    export enum HueInterpolationDirection {

        Clockwise,

        CounterClockwise,

        Shortest

    }

    /**
    
    * show text in OLED
    
    * @param oled_x is X alis, eg: 0
    
    * @param oled_y is Y alis, eg: 0
    
    * @param s is the text will be show, eg: 'Hello!'
    
    */

    //% blockId="OLED12864_I2C_SHOWSTRING1" block="Display text – please choose location %oled| text%s"

    //% parts=OLED12864_I2C trackArgs=0

    //% oled.fieldEditor="gridpicker"

    //% oled.fieldOptions.width=320

    //% oled.fieldOptions.columns=13

    //% group="OLED Module" subcategory="Audio-visual"

    //% weight=10 blockGap=10 color=#0855AA

    export function showString(oled: Oled, s: string, color: number = 1) {

        let oled_x = oled % 13;

        let oled_y = Math.floor(oled / 13);

        let crror = 0

        let col2 = 0

        let q = 0

        let ind2 = 0

        let firstoledinit = 0

        if (pins.i2cReadNumber(_I2CAddr, NumberFormat.Int8LE) == 67) {

            init();

        }

        else {

            for (let r = 0; r < s.length; r++) {

                q = font[s.charCodeAt(r)]

                for (let o = 0; o < 5; o++) {

                    col2 = 0

                    for (let p = 0; p < 5; p++) {

                        if (q & (1 << (5 * o + p)))

                            col2 |= (1 << (p + 1))

                    }

                    ind2 = (oled_x + r) * 5 * (_ZOOM + 1) + oled_y * 128 + o * (_ZOOM + 1) + 1

                    if (color == 0)

                        col2 = 255 - col2

                    _screen[ind2] = col2

                    if (_ZOOM)

                        _screen[ind2 + 1] = col2

                }

            }

            set_pos(oled_x * 5, oled_y)

            let ind02 = oled_x * 5 * (_ZOOM + 1) + oled_y * 128

            let buf72 = _screen.slice(ind02, ind2 + 1)

            buf72[0] = 0x40

            pins.i2cWriteBuffer(_I2CAddr, buf72)

        }

    }



    /**
    
     * show a number in OLED
    
     * @param olednum_x is X alis, eg: 0
    
     * @param olednum_y is Y alis, eg: 0
    
     * @param num is the number will be show, eg: 12
    
     * @param color is number color, eg: 1
    
     */

    //% blockId="OLED12864_I2C_NUMBER" block="Display number – please choose location%oled| number%num"

    //% parts=OLED12864_I2C trackArgs=0

    //% olednum.fieldEditor="gridpicker"

    //% olednum.fieldOptions.width=320

    //% olednum.fieldOptions.columns=13

    //% group="OLED Module" subcategory="Audio-visual"

    //% weight=9 blockGap=10 color=#0855AA

    export function showNumber(olednum: Oled, num: number, color: number = 1) {



        let olednum_x = 0

        let olednum_y = 0

        olednum_x = Math.floor(olednum / 13);

        olednum_y = olednum % 13;

        showString(olednum, num.toString(), color)

    }





    export function draw() {

        set_pos()

        pins.i2cWriteBuffer(_I2CAddr, _screen)

    }

    /**
     * show text in OLED
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param s is the text will be show, eg: 'Hello!'
     * @param color is string color, eg: 1
     */
    //% blockId="OLED12864_I2C_SHOWSTRINGxy" block="Display string at x %x|y %y|at %s|color %color"
    //% parts=OLED12864_I2C trackArgs=0
    //% group="OLED Module" subcategory="Audio-visual"
    //% weight=80 blockGap=10 color=#0855AA
    export function showStringxy(x: number, y: number, s: string, color: number = 1) {
        let col = 0
        let e = 0
        let ind = 0
        for (let f = 0; f < s.length; f++) {
            e = font[s.charCodeAt(f)]
            for (let g = 0; g < 5; g++) {
                col = 0
                for (let h = 0; h < 5; h++) {
                    if (e & (1 << (5 * g + h)))
                        col |= (1 << (h + 1))
                }
                ind = (x + f) * 5 * (_ZOOM + 1) + y * 128 + g * (_ZOOM + 1) + 1
                if (color == 0)
                    col = 255 - col
                _screen[ind] = col
                if (_ZOOM)
                    _screen[ind + 1] = col
            }
        }
        set_pos(x * 5, y)
        let ind0 = x * 5 * (_ZOOM + 1) + y * 128
        let buf7 = _screen.slice(ind0, ind + 1)
        buf7[0] = 0x40
        pins.i2cWriteBuffer(_I2CAddr, buf7)
    }

    /**
     * show a number in OLED
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param num is the number will be show, eg: 12
     * @param color is number color, eg: 1
     */
    //% blockId="OLED12864_I2C_NUMBERxy" block="Display number at x %x|y %y|number %num|color %color"
    //% parts=OLED12864_I2C trackArgs=0
    //% group="OLED Module" subcategory="Audio-visual"
    //% weight=80 blockGap=10 color=#0855AA
    export function showNumberxy(x: number, y: number, num: number, color: number = 1) {
        showStringxy(x, y, num.toString(), color)
    }


    /**
    
     * clear screen
    
     */

    //% blockId="OLED12864_I2C_CLEAR" block="clear"

    //% parts=OLED12864_I2C trackArgs=0

    //% group="OLED Module" subcategory="Audio-visual"

    //% weight=8 blockGap=10 color=#0855AA

    export function clear() {

        _screen.fill(0)

        _screen[0] = 0x40

        draw()

    }



    /**
    
     * OLED initialize
    
     * @param addr is i2c addr, eg: 60
    
     */

    //% blockId="OLED12864_I2C_init" block="Initialize OLED "

    //% parts=OLED12864_I2C trackArgs=0

    //% weight=11 blockGap=10

    //% group="OLED Module" subcategory="Audio-visual"

    //% blockGap=10  color=#0855AA

    export function init() {

        _I2CAddr = 60;

        cmd1(0xAE)       // SSD1306_DISPLAYOFF

        cmd1(0xA4)       // SSD1306_DISPLAYALLON_RESUME

        cmd2(0xD5, 0xF0) // SSD1306_SETDISPLAYCLOCKDIV

        cmd2(0xA8, 0x3F) // SSD1306_SETMULTIPLEX

        cmd2(0xD3, 0x00) // SSD1306_SETDISPLAYOFFSET

        cmd1(0 | 0x0)    // line #SSD1306_SETSTARTLINE

        cmd2(0x8D, 0x14) // SSD1306_CHARGEPUMP

        cmd2(0x20, 0x00) // SSD1306_MEMORYMODE

        cmd3(0x21, 0, 127) // SSD1306_COLUMNADDR

        cmd3(0x22, 0, 63)  // SSD1306_PAGEADDR

        cmd1(0xa0 | 0x1) // SSD1306_SEGREMAP

        cmd1(0xc8)       // SSD1306_COMSCANDEC

        cmd2(0xDA, 0x12) // SSD1306_SETCOMPINS

        cmd2(0x81, 0xCF) // SSD1306_SETCONTRAST

        cmd2(0xd9, 0xF1) // SSD1306_SETPRECHARGE

        cmd2(0xDB, 0x40) // SSD1306_SETVCOMDETECT

        cmd1(0xA6)       // SSD1306_NORMALDISPLAY

        cmd2(0xD6, 1)    // zoom on

        cmd1(0xAF)       // SSD1306_DISPLAYON

        clear()

        _ZOOM = 1

    }

    //% blockId="laser_controller" block="Laser %laserpin switch %laserState || Laser %intensity"

    //% laserState.shadow="toggleOnOff"

    //% weight=25

    //% laserpin.fieldEditor="gridpicker"

    //% laserpin.fieldOptions.width=220

    //% laserpin.fieldOptions.columns=2

    //% intensity.min=0 intensity.max=1023

    //% expandableArgumentMode="toggle"

    //% subcategory="Audio-visual" group="Laser Module"

    export function laserController(laserpin: Write_pin, laserState: boolean, intensity: number = 1023): void {

        let pin79

        if (laserpin == 1) {



            pin79 = AnalogPin.P0;

        }

        if (laserpin == 2) {

            pin79 = AnalogPin.P16;

        }

        if (laserpin == 3) {

            pin79 = AnalogPin.P1;

        }

        if (laserpin == 4) {



            pin79 = AnalogPin.P12;

        }

        if (laserpin == 5) {

            pin79 = AnalogPin.P2;

        }

        if (laserpin == 6) {

            pin79 = AnalogPin.P8;

        }

        if (laserState) {

            pins.analogSetPeriod(pin79, 1023);

            pins.analogWritePin(pin79, Math.map(intensity, 0, 1023, 0, 1023));

        }

        else {

            pins.analogWritePin(pin79, 0);

            intensity = 0;

        }

    }

    /////////////////录音模块///////////////////


    //% blockId="record_id" block="Recording Module play %recordID "

    //% magState.shadow="toggleOnOff"

    //% weight=2

    //% recordID.fieldEditor="gridpicker"

    //% recordID.fieldOptions.width=220

    //% recordID.fieldOptions.columns=2

    //% expandableArgumentMode="toggle"

    //% group="Recording Module" subcategory="Audio-visual"

    export function Record_id(recordID: Record_list): void {
        pins.i2cWriteNumber(0x18, recordID, NumberFormat.UInt8BE)
    }



    enum Recodpin {
        //% block="(P0,P13)"

        rc1 = 13,
        //% block="(P1,P14)"

        rc2 = 114,

        //% block="(P2,P15)"

        rc3 = 215
    }

}
