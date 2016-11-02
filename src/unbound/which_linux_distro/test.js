const test = require('ava')
const whichLinuxDistro = require('.')

test('whichLinuxDistro detects "linux centos"', (t) => {
  ;[
    'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.0.5) Gecko/2008121911 CentOS/3.0.5-1.el5.centos Firefox/3.0.5',
    'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.8.0.12) Gecko/20080419 CentOS/1.5.0.12-0.15.el4.centos Firefox/1.5.0.12 pango-text'
  ].forEach((ua) => {
    t.is(whichLinuxDistro(ua), 'linux centos')
  })
})

test('whichLinuxDistro detects "linux debian"', (t) => {
  ;[
    'Mozilla/5.0 (compatible; Konqueror/3.5; Linux; x86_64) KHTML/3.5.5 (like Gecko) (Debian)',
    'Mozilla/5.0 (X11; U; Linux i686; de; rv:1.9.1.5) Gecko/20091112 Iceweasel/3.5.5 (like Firefox/3.5.5; Debian-3.5.5-1)'
  ].forEach((ua) => {
    t.is(whichLinuxDistro(ua), 'linux debian')
  })
})

test('whichLinuxDistro detects "linux fedora"', (t) => {
  ;[
    'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.6) Gecko/20060905 Fedora/1.5.0.6-10 Firefox/1.5.0.6 pango-text',
    'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko Fedora/1.9.0.8-1.fc10 Kazehakase/0.5.6'
  ].forEach((ua) => {
    t.is(whichLinuxDistro(ua), 'linux fedora')
  })
})

test('whichLinuxDistro detects "linux gentoo"', (t) => {
  ;[
    'Mozilla/5.0 (X11; U; Linux Gentoo i686; pl; rv:1.8.0.8) Gecko/20061219 Firefox/1.5.0.8',
    'ELinks (0.11.3; Linux 2.6.23-gentoo-r6 i686; 128x48)'
  ].forEach((ua) => {
    t.is(whichLinuxDistro(ua), 'linux gentoo')
  })
})

test('whichLinuxDistro detects "linux red hat"', (t) => {
  ;[
    'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.2.22) Gecko/20110904 Red Hat/3.6-1.el5_7 Firefox/3.6.22',
    'Mozilla/5.0 (X11; U; Linux x86_64; en-US; rv:1.9.0.12) Gecko/2009070811 Red Hat/3.0.12-1.el5_3 Firefox/3.0.12',
    'Mozilla/5.0 (compatible; Konqueror/4.3; Linux) KHTML/4.3.4 (like Gecko) Red Hat Enterprise Linux/4.3.4-21.el6_5',
    'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.2.9) Gecko/20100827 Red Hat/3.6.9-2.el6 Firefox/41.0.2',
    'Mozilla/5.0/Rebulid/By/Tyn (X11; Red Hat Enterprise; Linux i686; rv:43.0) Gecko/20100101 Firefox/43.0',
    'Mozilla/5.0 (X11; Red Hat Enterprise; Linux i686; rv:41.0) Gecko/20100101 Firefox/41.0',
    'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.2.9) Gecko/20100827 Red Hat/3.6.9-2.el6 Firefox/3.6.9'
  ].forEach((ua) => {
    t.is(whichLinuxDistro(ua), 'linux red hat')
  })
})

test('whichLinuxDistro detects "linux ubuntu"', (t) => {
  ;[
    'Mozilla/5.0 (X11; U; Linux x86_64; en; rv:1.9.0.14) Gecko/20080528 Ubuntu/9.10 (karmic) Epiphany/2.22 Firefox/3.0',
    'Mozilla/5.0 (X11; U; Linux x86_64; zh-TW; rv:1.9.0.8) Gecko/2009032712 Ubuntu/8.04 (hardy) Firefox/3.0.8 GTB5',
    'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:40.0) Gecko/20100101 Firefox/40.0'
  ].forEach((ua) => {
    t.is(whichLinuxDistro(ua), 'linux ubuntu')
  })
})

test('whichLinuxDistro detects "linux"', (t) => {
  ;[
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36',
    'Mozilla/5.0 (X11; Linux i586; rv:31.0) Gecko/20100101 Firefox/31.0'
  ].forEach((ua) => {
    t.is(whichLinuxDistro(ua), 'linux')
  })
})

test("whichLinuxDistro returns if OS can't be detected", (t) => {
  t.is(whichLinuxDistro('wutDistro'), undefined)
})