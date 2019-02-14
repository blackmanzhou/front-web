$(function () {
  // $('ul li').hover(function () {
  //   $(this).prevAll().addClass('click-item')
  //   $(this).nextAll().removeClass('click-item')
  // })

  $('ul li').click(function () {
    $(this).prevAll().addClass('click-item')
    $(this).addClass('click-item')
    $(this).nextAll().removeClass('click-item')
  })
})