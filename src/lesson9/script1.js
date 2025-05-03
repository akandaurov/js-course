window.addEventListener('load', function () {
  const start = document.getElementById('start');
  start.addEventListener('click', function () {
    animation.start();
  });

  const stop = document.getElementById('stop');
  stop.addEventListener('click', function () {
    animation.stop();
  });
});

class Animation {
  started = false;

  delay(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  }

  setProgress(value) {
    const progress = document.getElementById('progress1');
    progress.style.width = `${value}%`;
    progress.textContent = `${value}%`;
  }

  setRadio(value, index) {
    const radio = document.getElementById(`radio${index}`);
    radio.checked = value;
  }

  setSwitch(value, index) {
    const radio = document.getElementById(`switch${index}`);
    radio.checked = value;
  }

  async start() {
    let value = 0;

    const updateProgressAsync = async () => {
      for (let i = 0; i <= 100; i += 5) {
        this.setProgress(i);
        await this.delay(100);
      }
      this.setProgress(0);
    };

    const animateRadiosAsync = async () => {
      for (let i = 1; i <= 3; i++) {
        this.setRadio(true, i);
        if (i > 1) {
          this.setRadio(false, i - 1);
        }
        await this.delay(200);
      }
      this.setRadio(false, 3);
    };

    const animateSwitchesAsync = async () => {
      for (let i = 1; i <= 3; i++) {
        this.setSwitch(true, i);
        if (i > 1) {
          this.setSwitch(false, i - 1);
        }
        await this.delay(200);
      }
      this.setSwitch(false, 3);
    };

    const doAnimation = async () => {
      await Promise.all([updateProgressAsync(), animateRadiosAsync(), animateSwitchesAsync()]);
    };

    this.started = true;

    while (this.started) {
      await doAnimation();
    }
  }

  stop() {
    this.started = false;
  }
}

const animation = new Animation();

async function callExternalApi() {
  const url =
    'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m';

  const fetchApi = async () => {
    const response = await fetch(url);
    if (response.ok) {
      console.log(await response.json());
    } else {
      throw new Error('Network response was not ok.');
    }
  };

  try {
    await fetchApi();
  } catch (error) {
    console.log('Error occurred');
  }
}
