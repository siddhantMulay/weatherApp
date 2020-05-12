
let latitude = '';
let longitude = '';

var data = `{
    "lat": 19.26,
    "lon": 72.86,
    "timezone": "Asia/Kolkata",
    "current": {
      "dt": 1589292378,
      "sunrise": 1589243691,
      "sunset": 1589290505,
      "temp": 31,
      "feels_like": 33.77,
      "pressure": 1006,
      "humidity": 70,
      "dew_point": 24.88,
      "uvi": 12.85,
      "clouds": 12,
      "visibility": 6000,
      "wind_speed": 5.1,
      "wind_deg": 290,
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ]
    },
    "hourly": [
      {
        "dt": 1589292000,
        "temp": 31,
        "feels_like": 33.65,
        "pressure": 1006,
        "humidity": 70,
        "dew_point": 24.88,
        "clouds": 12,
        "wind_speed": 5.28,
        "wind_deg": 302,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ]
      },
      {
        "dt": 1589295600,
        "temp": 30.46,
        "feels_like": 33.23,
        "pressure": 1006,
        "humidity": 68,
        "dew_point": 23.88,
        "clouds": 10,
        "wind_speed": 4.25,
        "wind_deg": 304,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1589299200,
        "temp": 29.79,
        "feels_like": 32.36,
        "pressure": 1008,
        "humidity": 69,
        "dew_point": 23.49,
        "clouds": 7,
        "wind_speed": 4.21,
        "wind_deg": 304,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1589302800,
        "temp": 29.21,
        "feels_like": 32.22,
        "pressure": 1008,
        "humidity": 73,
        "dew_point": 23.87,
        "clouds": 5,
        "wind_speed": 3.89,
        "wind_deg": 312,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1589306400,
        "temp": 28.81,
        "feels_like": 31.7,
        "pressure": 1008,
        "humidity": 75,
        "dew_point": 23.93,
        "clouds": 5,
        "wind_speed": 4.12,
        "wind_deg": 329,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1589310000,
        "temp": 28.53,
        "feels_like": 31.35,
        "pressure": 1008,
        "humidity": 75,
        "dew_point": 23.86,
        "clouds": 34,
        "wind_speed": 4,
        "wind_deg": 335,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ]
      },
      {
        "dt": 1589313600,
        "temp": 28.28,
        "feels_like": 31.49,
        "pressure": 1007,
        "humidity": 76,
        "dew_point": 23.7,
        "clouds": 31,
        "wind_speed": 3.42,
        "wind_deg": 342,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ]
      },
      {
        "dt": 1589317200,
        "temp": 28.07,
        "feels_like": 31.81,
        "pressure": 1006,
        "humidity": 76,
        "dew_point": 23.52,
        "clouds": 25,
        "wind_speed": 2.49,
        "wind_deg": 339,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ]
      },
      {
        "dt": 1589320800,
        "temp": 27.94,
        "feels_like": 31.86,
        "pressure": 1006,
        "humidity": 76,
        "dew_point": 23.34,
        "clouds": 20,
        "wind_speed": 2.14,
        "wind_deg": 334,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ]
      },
      {
        "dt": 1589324400,
        "temp": 27.81,
        "feels_like": 31.81,
        "pressure": 1006,
        "humidity": 76,
        "dew_point": 23.31,
        "clouds": 16,
        "wind_speed": 1.92,
        "wind_deg": 338,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ]
      },
      {
        "dt": 1589328000,
        "temp": 27.73,
        "feels_like": 31.82,
        "pressure": 1007,
        "humidity": 76,
        "dew_point": 23.2,
        "clouds": 14,
        "wind_speed": 1.73,
        "wind_deg": 340,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ]
      },
      {
        "dt": 1589331600,
        "temp": 27.8,
        "feels_like": 31.82,
        "pressure": 1008,
        "humidity": 76,
        "dew_point": 23.23,
        "clouds": 0,
        "wind_speed": 1.88,
        "wind_deg": 342,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1589335200,
        "temp": 28.41,
        "feels_like": 32.59,
        "pressure": 1009,
        "humidity": 73,
        "dew_point": 23.12,
        "clouds": 0,
        "wind_speed": 1.6,
        "wind_deg": 359,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1589338800,
        "temp": 29.48,
        "feels_like": 33.7,
        "pressure": 1009,
        "humidity": 68,
        "dew_point": 22.99,
        "clouds": 0,
        "wind_speed": 1.42,
        "wind_deg": 354,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1589342400,
        "temp": 30.88,
        "feels_like": 34.67,
        "pressure": 1009,
        "humidity": 61,
        "dew_point": 22.64,
        "clouds": 0,
        "wind_speed": 1.66,
        "wind_deg": 318,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1589346000,
        "temp": 31.81,
        "feels_like": 34.57,
        "pressure": 1009,
        "humidity": 57,
        "dew_point": 22.34,
        "clouds": 0,
        "wind_speed": 2.94,
        "wind_deg": 305,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1589349600,
        "temp": 32.59,
        "feels_like": 34.43,
        "pressure": 1009,
        "humidity": 54,
        "dew_point": 22.25,
        "clouds": 0,
        "wind_speed": 4.13,
        "wind_deg": 296,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1589353200,
        "temp": 32.97,
        "feels_like": 34.22,
        "pressure": 1008,
        "humidity": 54,
        "dew_point": 22.56,
        "clouds": 0,
        "wind_speed": 5.24,
        "wind_deg": 297,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1589356800,
        "temp": 33.07,
        "feels_like": 34.14,
        "pressure": 1007,
        "humidity": 55,
        "dew_point": 22.91,
        "clouds": 0,
        "wind_speed": 5.81,
        "wind_deg": 300,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1589360400,
        "temp": 33.34,
        "feels_like": 34.33,
        "pressure": 1006,
        "humidity": 53,
        "dew_point": 22.75,
        "clouds": 0,
        "wind_speed": 5.64,
        "wind_deg": 301,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1589364000,
        "temp": 33.15,
        "feels_like": 33.63,
        "pressure": 1005,
        "humidity": 53,
        "dew_point": 22.54,
        "clouds": 0,
        "wind_speed": 6.23,
        "wind_deg": 300,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1589367600,
        "temp": 32.7,
        "feels_like": 33.26,
        "pressure": 1005,
        "humidity": 55,
        "dew_point": 22.49,
        "clouds": 0,
        "wind_speed": 6.27,
        "wind_deg": 295,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1589371200,
        "temp": 31.91,
        "feels_like": 32.64,
        "pressure": 1005,
        "humidity": 58,
        "dew_point": 22.8,
        "clouds": 0,
        "wind_speed": 6.13,
        "wind_deg": 287,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1589374800,
        "temp": 31.04,
        "feels_like": 32.41,
        "pressure": 1005,
        "humidity": 63,
        "dew_point": 23.2,
        "clouds": 0,
        "wind_speed": 5.65,
        "wind_deg": 288,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1589378400,
        "temp": 30.45,
        "feels_like": 33.04,
        "pressure": 1006,
        "humidity": 65,
        "dew_point": 23.25,
        "clouds": 2,
        "wind_speed": 3.88,
        "wind_deg": 291,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1589382000,
        "temp": 30.06,
        "feels_like": 32.84,
        "pressure": 1007,
        "humidity": 68,
        "dew_point": 23.54,
        "clouds": 3,
        "wind_speed": 3.92,
        "wind_deg": 293,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1589385600,
        "temp": 29.74,
        "feels_like": 32.76,
        "pressure": 1007,
        "humidity": 71,
        "dew_point": 24.11,
        "clouds": 6,
        "wind_speed": 3.92,
        "wind_deg": 303,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1589389200,
        "temp": 29.43,
        "feels_like": 32.58,
        "pressure": 1008,
        "humidity": 73,
        "dew_point": 24.29,
        "clouds": 5,
        "wind_speed": 3.87,
        "wind_deg": 319,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1589392800,
        "temp": 29.15,
        "feels_like": 32.27,
        "pressure": 1007,
        "humidity": 75,
        "dew_point": 24.31,
        "clouds": 4,
        "wind_speed": 4.07,
        "wind_deg": 326,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1589396400,
        "temp": 28.9,
        "feels_like": 31.65,
        "pressure": 1007,
        "humidity": 75,
        "dew_point": 24.23,
        "clouds": 0,
        "wind_speed": 4.39,
        "wind_deg": 339,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1589400000,
        "temp": 28.67,
        "feels_like": 31.82,
        "pressure": 1006,
        "humidity": 76,
        "dew_point": 24.16,
        "clouds": 0,
        "wind_speed": 3.82,
        "wind_deg": 351,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1589403600,
        "temp": 28.45,
        "feels_like": 32.23,
        "pressure": 1006,
        "humidity": 76,
        "dew_point": 23.94,
        "clouds": 0,
        "wind_speed": 2.74,
        "wind_deg": 358,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1589407200,
        "temp": 28.34,
        "feels_like": 32.74,
        "pressure": 1006,
        "humidity": 75,
        "dew_point": 23.49,
        "clouds": 0,
        "wind_speed": 1.59,
        "wind_deg": 11,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1589410800,
        "temp": 28.24,
        "feels_like": 32.61,
        "pressure": 1006,
        "humidity": 74,
        "dew_point": 23.22,
        "clouds": 3,
        "wind_speed": 1.37,
        "wind_deg": 7,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ]
      },
      {
        "dt": 1589414400,
        "temp": 28.48,
        "feels_like": 32.94,
        "pressure": 1007,
        "humidity": 72,
        "dew_point": 22.97,
        "clouds": 11,
        "wind_speed": 1.06,
        "wind_deg": 340,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02n"
          }
        ]
      },
      {
        "dt": 1589418000,
        "temp": 28.65,
        "feels_like": 32.89,
        "pressure": 1007,
        "humidity": 71,
        "dew_point": 22.99,
        "clouds": 55,
        "wind_speed": 1.32,
        "wind_deg": 319,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ]
      },
      {
        "dt": 1589421600,
        "temp": 29.02,
        "feels_like": 33.16,
        "pressure": 1008,
        "humidity": 70,
        "dew_point": 23.02,
        "clouds": 64,
        "wind_speed": 1.56,
        "wind_deg": 317,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ]
      },
      {
        "dt": 1589425200,
        "temp": 29.77,
        "feels_like": 33.59,
        "pressure": 1009,
        "humidity": 67,
        "dew_point": 23.09,
        "clouds": 70,
        "wind_speed": 2.01,
        "wind_deg": 313,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ]
      },
      {
        "dt": 1589428800,
        "temp": 30.7,
        "feels_like": 33.96,
        "pressure": 1009,
        "humidity": 63,
        "dew_point": 22.86,
        "clouds": 70,
        "wind_speed": 2.7,
        "wind_deg": 319,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ]
      },
      {
        "dt": 1589432400,
        "temp": 31.83,
        "feels_like": 34.1,
        "pressure": 1009,
        "humidity": 56,
        "dew_point": 22.23,
        "clouds": 66,
        "wind_speed": 3.43,
        "wind_deg": 324,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ]
      },
      {
        "dt": 1589436000,
        "temp": 32.99,
        "feels_like": 34.27,
        "pressure": 1008,
        "humidity": 50,
        "dew_point": 21.29,
        "clouds": 57,
        "wind_speed": 4.26,
        "wind_deg": 313,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ]
      },
      {
        "dt": 1589439600,
        "temp": 33.37,
        "feels_like": 33.7,
        "pressure": 1008,
        "humidity": 48,
        "dew_point": 21.17,
        "clouds": 0,
        "wind_speed": 5.39,
        "wind_deg": 296,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1589443200,
        "temp": 33.13,
        "feels_like": 33.1,
        "pressure": 1007,
        "humidity": 50,
        "dew_point": 21.58,
        "clouds": 0,
        "wind_speed": 6.23,
        "wind_deg": 296,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1589446800,
        "temp": 33.19,
        "feels_like": 32.82,
        "pressure": 1006,
        "humidity": 50,
        "dew_point": 21.4,
        "clouds": 0,
        "wind_speed": 6.76,
        "wind_deg": 299,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1589450400,
        "temp": 33.01,
        "feels_like": 32.18,
        "pressure": 1005,
        "humidity": 50,
        "dew_point": 21.25,
        "clouds": 0,
        "wind_speed": 7.29,
        "wind_deg": 300,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1589454000,
        "temp": 32.63,
        "feels_like": 31.25,
        "pressure": 1005,
        "humidity": 49,
        "dew_point": 20.74,
        "clouds": 0,
        "wind_speed": 7.6,
        "wind_deg": 303,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1589457600,
        "temp": 32.58,
        "feels_like": 31.63,
        "pressure": 1005,
        "humidity": 48,
        "dew_point": 20.16,
        "clouds": 0,
        "wind_speed": 6.72,
        "wind_deg": 303,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      },
      {
        "dt": 1589461200,
        "temp": 31.8,
        "feels_like": 32.34,
        "pressure": 1006,
        "humidity": 52,
        "dew_point": 21,
        "clouds": 0,
        "wind_speed": 5,
        "wind_deg": 298,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ]
      }
    ],
    "daily": [
      {
        "dt": 1589265000,
        "sunrise": 1589243691,
        "sunset": 1589290505,
        "temp": {
          "day": 31,
          "min": 29.27,
          "max": 31,
          "night": 29.27,
          "eve": 31,
          "morn": 31
        },
        "feels_like": {
          "day": 33.02,
          "night": 32.29,
          "eve": 33.02,
          "morn": 33.02
        },
        "pressure": 1006,
        "humidity": 70,
        "dew_point": 24.88,
        "wind_speed": 6.17,
        "wind_deg": 309,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": 12,
        "uvi": 12.85
      },
      {
        "dt": 1589351400,
        "sunrise": 1589330067,
        "sunset": 1589376929,
        "temp": {
          "day": 32.59,
          "min": 27.76,
          "max": 33.34,
          "night": 29.15,
          "eve": 31.91,
          "morn": 27.76
        },
        "feels_like": {
          "day": 34.43,
          "night": 32.27,
          "eve": 32.64,
          "morn": 31.87
        },
        "pressure": 1009,
        "humidity": 54,
        "dew_point": 22.25,
        "wind_speed": 4.13,
        "wind_deg": 296,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": 0,
        "uvi": 12.72
      },
      {
        "dt": 1589437800,
        "sunrise": 1589416445,
        "sunset": 1589463353,
        "temp": {
          "day": 32.99,
          "min": 28.48,
          "max": 33.19,
          "night": 29.66,
          "eve": 32.58,
          "morn": 28.48
        },
        "feels_like": {
          "day": 34.27,
          "night": 32.34,
          "eve": 31.63,
          "morn": 32.94
        },
        "pressure": 1008,
        "humidity": 50,
        "dew_point": 21.29,
        "wind_speed": 4.26,
        "wind_deg": 313,
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": 57,
        "uvi": 12.75
      },
      {
        "dt": 1589524200,
        "sunrise": 1589502823,
        "sunset": 1589549777,
        "temp": {
          "day": 31.57,
          "min": 28.91,
          "max": 33,
          "night": 28.91,
          "eve": 32.9,
          "morn": 29.15
        },
        "feels_like": {
          "day": 33.01,
          "night": 31.56,
          "eve": 31.78,
          "morn": 31.69
        },
        "pressure": 1009,
        "humidity": 55,
        "dew_point": 21.67,
        "wind_speed": 4.22,
        "wind_deg": 349,
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": 87,
        "uvi": 13.66
      },
      {
        "dt": 1589610600,
        "sunrise": 1589589203,
        "sunset": 1589636201,
        "temp": {
          "day": 33.78,
          "min": 28.04,
          "max": 33.78,
          "night": 29.2,
          "eve": 32.81,
          "morn": 28.04
        },
        "feels_like": {
          "day": 34.52,
          "night": 32.98,
          "eve": 31.34,
          "morn": 31.44
        },
        "pressure": 1008,
        "humidity": 47,
        "dew_point": 20.92,
        "wind_speed": 4.83,
        "wind_deg": 311,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": 0,
        "uvi": 13.52
      },
      {
        "dt": 1589697000,
        "sunrise": 1589675583,
        "sunset": 1589722625,
        "temp": {
          "day": 31.99,
          "min": 28.1,
          "max": 32.33,
          "night": 28.42,
          "eve": 31.72,
          "morn": 28.1
        },
        "feels_like": {
          "day": 32.68,
          "night": 31.29,
          "eve": 30.93,
          "morn": 31.38
        },
        "pressure": 1009,
        "humidity": 52,
        "dew_point": 21.15,
        "wind_speed": 4.91,
        "wind_deg": 314,
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": 20,
        "uvi": 13.07
      },
      {
        "dt": 1589783400,
        "sunrise": 1589761965,
        "sunset": 1589809049,
        "temp": {
          "day": 31.15,
          "min": 27.48,
          "max": 31.54,
          "night": 28.61,
          "eve": 30.49,
          "morn": 27.48
        },
        "feels_like": {
          "day": 32.06,
          "night": 31.94,
          "eve": 31.77,
          "morn": 30.47
        },
        "pressure": 1008,
        "humidity": 60,
        "dew_point": 22.66,
        "wind_speed": 5.76,
        "wind_deg": 296,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": 43,
        "uvi": 13.69
      },
      {
        "dt": 1589869800,
        "sunrise": 1589848347,
        "sunset": 1589895474,
        "temp": {
          "day": 31.05,
          "min": 28.4,
          "max": 31.69,
          "night": 28.4,
          "eve": 30.47,
          "morn": 28.75
        },
        "feels_like": {
          "day": 33.02,
          "night": 31.13,
          "eve": 32.24,
          "morn": 31.9
        },
        "pressure": 1008,
        "humidity": 62,
        "dew_point": 23.01,
        "wind_speed": 4.6,
        "wind_deg": 280,
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": 47,
        "uvi": 13.06
      }
    ]
  }`

Handlebars.registerHelper('iconHelper', function (forecast) {
    var retData = '';
    switch (forecast) {
        case "few clouds": {
            retData = 'cloudy'
            break;
        }

        case "scattered clouds": {
            retData = 'cloudy'
            break;
        }

        case "clear sky": {
            retData = 'clear'
            break;
        }

        case "broken clouds": {
            retData = 'brokenCloud'
            break;
        }

        case "overcast clouds": {
            retData = 'overcast'
            break;
        }

    }
    return retData;
});

Handlebars.registerHelper('rounder', function (data) {
    var retData = Math.round(data);
    return retData;
})

Handlebars.registerHelper('formatDay', function (data) {
    var retData = '';
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var theDate = new Date(data * 1000);
    retData = days[theDate.getDay()];
    return retData;
})

Handlebars.registerHelper('formatTime', function (data) {
    var retData = '';
    var theDate = new Date(data * 1000);
    var hours = theDate.getHours();
    var minutes = theDate.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    retData = hours + ':' + minutes + ' ' + ampm;
    return retData;
})


$(document).ready(function () {

    ipLookUp = () => {
        $.ajax('http://ip-api.com/json')
            .then(
                function success(response) {
                    var userLoc = `${response.city}, ${response.regionName}`;
                    $('#searchText').val(userLoc);
                    getWeatherData(latitude, longitude);
                    $('.pageLoader').attr('data-active', false);
                },

                function fail(data, status) {
                    console.log('Request failed.  Returned status of',
                        status);
                }
            );
    }

    if ("geolocation" in navigator) {
        // check if geolocation is supported/enabled on current browser
        navigator.geolocation.getCurrentPosition(function success(position) {
            // for when getting location is a success
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            ipLookUp();
        },
            function error(error_message) {
                // for when getting location results in an error
                console.error('An error has occured while retrieving location', error_message)

            }
        )
    }
    else {
        console.log('geolocation is not enabled on this browser')
    }

    //Get Hourly Forecast Data
    getForecastData = (data) => {
        var retData = [];
        data.forEach((item) => {
            var theDate = new Date(item.dt * 1000);
            var hr = theDate.getHours();
            if (hr > 8 && hr < 15) {
                retData.push(item.temp);
            }
        })
        initalizeCharts(retData.splice(5))
    }

    //Get Weather Data
    getWeatherData = (lat, lon) => {
        $('.pageLoader').attr('data-active', true);
        var url = `${config.WEATHER_API_URL}onecall?lat=${lat}&lon=${lon}&appid=${config.WEATHER_API_KEY}&units=metric`;
        apiRequest(url, (response) => {
            console.log(response)
            bindDataToDOM('weatherPageTemplate', 'weatherData', response);
            getForecastData(response.hourly)
            $('.pageLoader').attr('data-active', false);
            $('#suggestions').empty().attr('data-visible', false)
        })
    }

    //Get Current Weather Data
    getCurrentWeatherData = (location, callback) => {
        var url = `${config.WEATHER_API_URL}weather?q=${location}&appid=${config.WEATHER_API_KEY}&units=metric`;
        apiRequest(url, (response) => {
            callback(response)
        })
    }


    var searchData = `{"coord":{"lon":72.85,"lat":19.01},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":30,"feels_like":34.5,"temp_min":30,"temp_max":30,"pressure":1007,"humidity":79},"visibility":5000,"wind":{"speed":3.6,"deg":300},"clouds":{"all":11},"dt":1589300341,"sys":{"type":1,"id":9052,"country":"IN","sunrise":1589243716,"sunset":1589290485},"timezone":19800,"id":1275339,"name":"Mumbai","cod":200}`

    //Search Block
    $('#searchText').keyup(function (e) {
        var val = $(this).val();
        if (e.keyCode !== 8 && val.length > 2) {
            searchCities(val, (response) => {
                var data = response.data;
                bindDataToDOM('searchResultsTemplate', 'suggestions', data);
                $('#suggestions').attr('data-visible', true);
            })
        }
        else if (val.length === 0) {
            $('#suggestions').empty().attr('data-visible', false)
        }
    })

    //View Weather Data
    $('body').off('click', '.item').on('click', '.item', function () {
        var lat = $(this).attr('data-lat');
        var long = $(this).attr('data-long');
        var city = $(this).attr('data-city');
        var region = $(this).attr('data-region');
        var userLoc = `${city}, ${region}`;
        $('#searchText').val(userLoc);
        getWeatherData(lat, long);
    })

})