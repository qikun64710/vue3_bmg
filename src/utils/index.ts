/**
 * js模拟a链接点击
 *
 * @param {string} url 目标地址
 * @param {*} option 是否新窗口、是否要求不跟踪
 */
 export const goto = (
    url: string | undefined,
    option = {
      newWindow: true,
      nofollow: true
    }
  ) => {
    if (!url) {
      console.warn('无效的链接！');
    }
  
    const aEle = document.createElement('a');
    aEle.href = url as string;
    aEle.style.display = 'none';
  
    if (option.newWindow) {
      aEle.target = '_blank';
    }
  
    if (option.nofollow) {
      aEle.rel = 'noopener noreferrer';
    }
  
    document.body.appendChild(aEle);
    aEle.click();
    document.body.removeChild(aEle);
  };