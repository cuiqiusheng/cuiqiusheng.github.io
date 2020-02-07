(function() {
  function genSrc() {
    // 各稀有度式神概率
    const probs = {
      sp: +$('#prob_sp').val() || 1,
      ssr: +$('#prob_ssr').val() || 2,
      sr: +$('#prob_sr').val() || 5,
      r: +$('#prob_r').val() || 92,
    };
    const sum = probs.sp + probs.ssr + probs.sr + probs.r;

    let pool;
    let src;
    let grade;
    const random = genRandom(1, sum + 1);
    if (random + probs.sp > sum) {
      pool = arrSp;
      grade = 'SP';
    } else if (random + probs.ssr > sum) {
      pool = arrSsr;
      grade = 'SSR';
    } else if (random + probs.sr > sum) {
      pool = arrSr;
      grade = 'SR';
    } else {
      pool = arrR;
      grade = 'R';
    }
    src = pool[genRandom(0, pool.length)]
    name = src.slice(src.lastIndexOf('/') + 1, src.lastIndexOf('.'));
    return { src, grade, name };
  }

  function genToast(grade, name) {
    let toast = '';
    switch (grade) {
      case 'SP':
        toast = `神眷！！！抽中 SP 阶式神 ${name}!`;
        break;
      case 'SSR':
        toast = `运气真好！抽中 SSR 阶式神 ${name}!`;
        break;
      case 'SR':
        toast = `不错哦，抽中 SR 阶式神 ${name}!`;
        break;
      default:
        toast = `运气一般...抽中 R 阶式神 ${name}!`;
        break;
    }
    return toast;
  }

  function luckyOne() {
    const { src, grade, name } = genSrc();
    const img = document.createElement('img');
    img.src = src;
    $('#shishen_img').empty();
    $('#shishen_img').append(img);
    $('#tip').html(`${grade} ${name}`);
    $('#desc').html(genToast(grade, name));
  }

  $('#lucky_one').on('click', function() {
    $('#lucky_one').hide();
    $('#desc').hide();
    let stop = false;
    setTimeout(function () {
      stop = true;
      $('#lucky_one').show();
      $('#desc').show();
    }, 2000);
    const timer = setInterval(function() {
      if (stop) {
        clearInterval(timer);
      } else {
        luckyOne();
      }
    }, 200);
  });

  $('#lucky_ten').on('click', function() {
    console.log('10')
  });
})();
