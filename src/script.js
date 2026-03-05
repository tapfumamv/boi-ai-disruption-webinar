/* ============================================
   BOI Companion Site - Script
   "How AI is Disrupting Business Models"
   ============================================ */

(function () {
  'use strict';

  // ==========================================
  // Utility: Debounce
  // ==========================================
  function debounce(fn, delay) {
    var timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
    };
  }

  // ==========================================
  // Reduced Motion Detection
  // ==========================================
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var reducedMotion = prefersReducedMotion.matches;

  prefersReducedMotion.addEventListener('change', function (e) {
    reducedMotion = e.matches;
  });

  // ==========================================
  // 1. Scroll Restoration
  // ==========================================
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  window.addEventListener('load', function () {
    window.scrollTo(0, 0);
    if (sections && sections.length) {
      updateActiveNav(sections[0].id);
    }
  });

  // ==========================================
  // 2. Dynamic Top Bar Height
  // ==========================================
  function setTopBarOffset() {
    var topBar = document.querySelector('.top-bar');
    if (!topBar) return;
    var h = topBar.offsetHeight;
    document.body.style.paddingTop = h + 'px';
    document.documentElement.style.setProperty('--topbar-height', h + 'px');
  }

  setTopBarOffset();
  window.addEventListener('resize', debounce(setTopBarOffset, 100));

  // ==========================================
  // 3. Theme Toggle
  // ==========================================
  var themeBtn = document.querySelector('.theme-toggle');
  var htmlEl = document.documentElement;

  function getStoredTheme() {
    try {
      return localStorage.getItem('boi-theme');
    } catch (e) {
      return null;
    }
  }

  function setTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('boi-theme', theme);
    } catch (e) {
      // localStorage unavailable
    }
  }

  // Apply stored theme on load (default is light, set in HTML)
  var stored = getStoredTheme();
  if (stored === 'light' || stored === 'dark') {
    setTheme(stored);
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var current = htmlEl.getAttribute('data-theme');
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // ==========================================
  // 4. Mobile Menu
  // ==========================================
  var burgerBtn = document.querySelector('.burger-btn');
  var menuOverlay = document.querySelector('.menu-overlay');
  var menuPanel = document.querySelector('.menu-panel');
  var menuLinks = menuPanel ? menuPanel.querySelectorAll('.nav-item') : [];
  var menuTrigger = null;

  function openMenu() {
    menuTrigger = document.activeElement;
    if (menuOverlay) menuOverlay.classList.add('open');
    if (menuPanel) menuPanel.classList.add('open');
    document.body.classList.add('menu-open');
    if (burgerBtn) burgerBtn.setAttribute('aria-expanded', 'true');
    if (menuLinks.length) menuLinks[0].focus();
  }

  function closeMenu() {
    if (menuOverlay) menuOverlay.classList.remove('open');
    if (menuPanel) menuPanel.classList.remove('open');
    document.body.classList.remove('menu-open');
    if (burgerBtn) burgerBtn.setAttribute('aria-expanded', 'false');
    if (menuTrigger) {
      menuTrigger.focus();
      menuTrigger = null;
    }
  }

  if (burgerBtn) {
    burgerBtn.addEventListener('click', function () {
      var isOpen = menuPanel && menuPanel.classList.contains('open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (menuOverlay) {
    menuOverlay.addEventListener('click', closeMenu);
  }

  menuLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    var menuIsOpen = menuPanel && menuPanel.classList.contains('open');
    if (e.key === 'Escape' && menuIsOpen) {
      closeMenu();
      return;
    }
    if (e.key === 'Tab' && menuIsOpen) {
      var focusable = menuPanel.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  });

  // ==========================================
  // 5. Smooth Scroll for Anchor Links
  // ==========================================
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;

    var targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;

    var target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();

    var topBar = document.querySelector('.top-bar');
    var offset = topBar ? topBar.offsetHeight + 16 : 16;
    var top = target.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top: top,
      behavior: 'smooth'
    });
  });

  // ==========================================
  // 6. Scroll Spy
  // ==========================================
  var navItems = document.querySelectorAll('.sidebar .nav-item, .menu-panel .nav-item');
  var sectionIds = [];
  navItems.forEach(function (item) {
    var href = item.getAttribute('href');
    if (href && href.startsWith('#')) {
      var id = href.slice(1);
      if (sectionIds.indexOf(id) === -1) {
        sectionIds.push(id);
      }
    }
  });

  var sections = sectionIds.map(function (id) {
    return document.getElementById(id);
  }).filter(Boolean);

  function updateActiveNav(activeId) {
    navItems.forEach(function (item) {
      var href = item.getAttribute('href');
      if (href === '#' + activeId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  if (sections.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          updateActiveNav(entry.target.id);
          if (history.replaceState) {
            history.replaceState(null, '', '#' + entry.target.id);
          }
        }
      });
    }, {
      rootMargin: '-10% 0px -60% 0px',
      threshold: 0
    });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  // ==========================================
  // 7. Lightbox / Slide Viewer
  // ==========================================
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = lightbox ? lightbox.querySelector('.lightbox__img') : null;
  var lightboxCaption = lightbox ? lightbox.querySelector('.lightbox__caption') : null;
  var lightboxClose = lightbox ? lightbox.querySelector('.lightbox__close') : null;
  var lightboxPrev = lightbox ? lightbox.querySelector('.lightbox__prev') : null;
  var lightboxNext = lightbox ? lightbox.querySelector('.lightbox__next') : null;
  var slideCards = Array.prototype.slice.call(document.querySelectorAll('.slide-card'));
  var currentSlideIndex = 0;
  var lightboxTrigger = null;

  var expandSvg = '<span class="slide-card__expand"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg></span>';

  slideCards.forEach(function (card) {
    card.insertAdjacentHTML('afterbegin', expandSvg);
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    var caption = card.querySelector('.slide-card__caption');
    if (caption) {
      card.setAttribute('aria-label', 'View slide: ' + caption.textContent);
    }
  });

  function openLightbox(index) {
    if (!lightbox || index < 0 || index >= slideCards.length) return;
    lightboxTrigger = document.activeElement;
    currentSlideIndex = index;
    var card = slideCards[index];
    var img = card.querySelector('img');
    var caption = card.querySelector('.slide-card__caption');
    if (img) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    }
    lightboxCaption.textContent = caption ? caption.textContent : '';
    lightbox.classList.add('active');
    document.body.classList.add('lightbox-open');
    updateNavButtons();
    if (lightboxClose) lightboxClose.focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.classList.remove('lightbox-open');
    if (lightboxTrigger) {
      lightboxTrigger.focus();
      lightboxTrigger = null;
    }
  }

  function showSlide(index) {
    if (index < 0 || index >= slideCards.length) return;
    currentSlideIndex = index;
    var card = slideCards[index];
    var img = card.querySelector('img');
    var caption = card.querySelector('.slide-card__caption');
    if (img) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    }
    lightboxCaption.textContent = caption ? caption.textContent : '';
    updateNavButtons();
  }

  function updateNavButtons() {
    if (!lightboxPrev || !lightboxNext) return;
    lightboxPrev.style.visibility = currentSlideIndex > 0 ? 'visible' : 'hidden';
    lightboxNext.style.visibility = currentSlideIndex < slideCards.length - 1 ? 'visible' : 'hidden';
  }

  slideCards.forEach(function (card, i) {
    card.addEventListener('click', function (e) {
      if (e.target.closest('a')) return;
      openLightbox(i);
    });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(i);
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', function (e) {
      e.stopPropagation();
      if (currentSlideIndex > 0) showSlide(currentSlideIndex - 1);
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', function (e) {
      e.stopPropagation();
      if (currentSlideIndex < slideCards.length - 1) showSlide(currentSlideIndex + 1);
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (!lightbox || !lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (currentSlideIndex > 0) showSlide(currentSlideIndex - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (currentSlideIndex < slideCards.length - 1) showSlide(currentSlideIndex + 1);
    } else if (e.key === 'Tab') {
      var focusable = [];
      if (lightboxClose) focusable.push(lightboxClose);
      if (lightboxPrev && lightboxPrev.style.visibility !== 'hidden') focusable.push(lightboxPrev);
      if (lightboxNext && lightboxNext.style.visibility !== 'hidden') focusable.push(lightboxNext);
      if (!focusable.length) return;
      var idx = focusable.indexOf(document.activeElement);
      if (idx === -1) {
        e.preventDefault();
        focusable[0].focus();
      } else if (e.shiftKey && idx === 0) {
        e.preventDefault();
        focusable[focusable.length - 1].focus();
      } else if (!e.shiftKey && idx === focusable.length - 1) {
        e.preventDefault();
        focusable[0].focus();
      }
    }
  });

  // ==========================================
  // 8. Quick Take Card Expand/Collapse
  // ==========================================
  var qtExpandBtns = document.querySelectorAll('.qt-card__expand');
  qtExpandBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card = btn.closest('.qt-card');
      if (!card) return;
      var hiddenItems = card.querySelectorAll('.qt-card__hidden');
      var revealedItems = card.querySelectorAll('.qt-card__revealed');
      var isExpanded = btn.getAttribute('aria-expanded') === 'true';
      var expandText = btn.querySelector('.qt-card__expand-text');

      if (isExpanded) {
        // Collapse: re-hide items
        revealedItems.forEach(function (item) {
          item.classList.add('qt-card__hidden');
          item.classList.remove('qt-card__revealed');
        });
        btn.setAttribute('aria-expanded', 'false');
        if (expandText) {
          var allHidden = card.querySelectorAll('.qt-card__hidden');
          expandText.textContent = '+' + allHidden.length + ' more';
        }
      } else {
        // Expand: show hidden items
        var count = hiddenItems.length;
        hiddenItems.forEach(function (item) {
          item.classList.remove('qt-card__hidden');
          item.classList.add('qt-card__revealed');
        });
        btn.setAttribute('aria-expanded', 'true');
        if (expandText) {
          expandText.textContent = 'Show less';
        }
      }
    });
  });

  // Expand All / Collapse All for Quick Take
  var expandAllBtn = document.getElementById('qt-expand-all');
  if (expandAllBtn) {
    expandAllBtn.addEventListener('click', function () {
      var isExpanded = expandAllBtn.getAttribute('aria-expanded') === 'true';
      var allCards = document.querySelectorAll('.qt-card');
      allCards.forEach(function (card) {
        var btn = card.querySelector('.qt-card__expand');
        if (!btn) return;
        var currentState = btn.getAttribute('aria-expanded') === 'true';
        if (isExpanded && currentState) btn.click();
        if (!isExpanded && !currentState) btn.click();
      });
      expandAllBtn.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
      expandAllBtn.textContent = isExpanded ? 'Expand All' : 'Collapse All';
    });
  }

  // ==========================================
  // 9. Reading Progress Bar
  // ==========================================
  function initProgressBar() {
    var bar = document.createElement('div');
    bar.className = 'reading-progress';
    bar.setAttribute('role', 'progressbar');
    bar.setAttribute('aria-label', 'Reading progress');
    bar.setAttribute('aria-valuemin', '0');
    bar.setAttribute('aria-valuemax', '100');
    bar.setAttribute('aria-valuenow', '0');
    document.body.appendChild(bar);

    var ticking = false;

    function updateProgress() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progress = Math.min(100, Math.max(0, progress));

      bar.style.width = progress + '%';
      bar.setAttribute('aria-valuenow', Math.round(progress).toString());
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    }, { passive: true });

    updateProgress();
  }

  // ==========================================
  // 10. Scroll-Triggered Reveal Animations
  // ==========================================
  function initRevealAnimations() {
    if (!('IntersectionObserver' in window)) {
      var allReveal = document.querySelectorAll('.reveal');
      for (var i = 0; i < allReveal.length; i++) {
        allReveal[i].classList.add('revealed');
      }
      return;
    }

    var revealObserver = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add('revealed');
          revealObserver.unobserve(entries[i].target);
        }
      }
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    });

    var selectors = [
      '.section-header',
      '.section-narrative p',
      '.slide-card',
      '.pull-quote',
      '.so-what',
      '.case-study-card',
      '.qa-item',
      '.exec-summary h2',
      '.exec-summary__body p',
      '.quick-take h2',
      '.overview h2',
      '.qa-section h2',
      '.closing h2',
      '.closing__body',
      '.qt-card'
    ];

    var elements = document.querySelectorAll(selectors.join(', '));

    for (var j = 0; j < elements.length; j++) {
      var el = elements[j];
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
      }
      if (reducedMotion) {
        el.classList.add('revealed');
      } else {
        revealObserver.observe(el);
      }
    }
  }

  // ==========================================
  // 11. Staggered Grid Reveals
  // ==========================================
  function initStaggeredGrids() {
    if (!('IntersectionObserver' in window)) return;

    var gridSelectors = [
      '.overview-grid',
      '.shifts-grid',
      '.disruption-grid',
      '.tracks-grid'
    ];

    var grids = document.querySelectorAll(gridSelectors.join(', '));

    var gridObserver = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          var grid = entries[i].target;
          var children = grid.children;

          for (var c = 0; c < children.length; c++) {
            children[c].classList.add('stagger-' + (c + 1));
            if (reducedMotion) {
              children[c].classList.add('revealed');
            }
          }

          requestAnimationFrame(function (g) {
            return function () {
              var kids = g.children;
              for (var k = 0; k < kids.length; k++) {
                kids[k].classList.add('revealed');
              }
            };
          }(grid));

          gridObserver.unobserve(grid);
        }
      }
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.05
    });

    for (var g = 0; g < grids.length; g++) {
      var grid = grids[g];
      var children = grid.children;
      for (var c = 0; c < children.length; c++) {
        children[c].classList.add('reveal');
      }
      gridObserver.observe(grid);
    }
  }

  // ==========================================
  // 12. Animated Stat Counters
  // ==========================================
  function animateCounter(el) {
    var target = parseFloat(el.getAttribute('data-count-to'));
    var prefix = el.getAttribute('data-count-prefix') || '';
    var suffix = el.getAttribute('data-count-suffix') || '';
    var duration = 1200;
    var startTime = null;
    var isFloat = target % 1 !== 0;

    function easeOutQuart(t) {
      return 1 - Math.pow(1 - t, 4);
    }

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var elapsed = timestamp - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var easedProgress = easeOutQuart(progress);
      var current = easedProgress * target;

      if (isFloat) {
        el.textContent = prefix + current.toFixed(1) + suffix;
      } else {
        el.textContent = prefix + Math.round(current) + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        if (isFloat) {
          el.textContent = prefix + target.toFixed(1) + suffix;
        } else {
          el.textContent = prefix + target + suffix;
        }
        el.classList.add('count-done');
      }
    }

    if (reducedMotion) {
      if (isFloat) {
        el.textContent = prefix + target.toFixed(1) + suffix;
      } else {
        el.textContent = prefix + target + suffix;
      }
      return;
    }

    el.textContent = prefix + '0' + suffix;
    requestAnimationFrame(step);
  }

  function initCounters() {
    var counters = document.querySelectorAll('[data-count-to]');
    if (!counters.length) return;

    if (!('IntersectionObserver' in window)) {
      for (var i = 0; i < counters.length; i++) {
        animateCounter(counters[i]);
      }
      return;
    }

    var counterObserver = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          animateCounter(entries[i].target);
          counterObserver.unobserve(entries[i].target);
        }
      }
    }, {
      rootMargin: '0px',
      threshold: 0.5
    });

    for (var j = 0; j < counters.length; j++) {
      counterObserver.observe(counters[j]);
    }
  }

  // ==========================================
  // 13. Pull Quote Border Animation
  // ==========================================
  function initPullQuoteAnimation() {
    if (!('IntersectionObserver' in window)) return;

    var quotes = document.querySelectorAll('.pull-quote');
    if (!quotes.length) return;

    var quoteObserver = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add('revealed');
          quoteObserver.unobserve(entries[i].target);
        }
      }
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.2
    });

    for (var i = 0; i < quotes.length; i++) {
      if (reducedMotion) {
        quotes[i].classList.add('revealed');
      } else {
        quoteObserver.observe(quotes[i]);
      }
    }
  }

  // ==========================================
  // Initialize all
  // ==========================================
  function initAnimations() {
    initProgressBar();
    initRevealAnimations();
    initStaggeredGrids();
    initCounters();
    initPullQuoteAnimation();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }

})();

  // ==========================================
  // Slide Gallery dot navigation
  // ==========================================
  document.querySelectorAll('.slide-gallery').forEach(function(gallery) {
    var track = gallery.querySelector('.slide-gallery__track');
    var dots = gallery.querySelectorAll('.slide-gallery__dot');
    if (!track || dots.length === 0) return;

    dots.forEach(function(dot, i) {
      dot.addEventListener('click', function() {
        var cards = track.querySelectorAll('.slide-card');
        if (cards[i]) cards[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      });
    });

    track.addEventListener('scroll', function() {
      var scrollLeft = track.scrollLeft;
      var cardWidth = track.querySelector('.slide-card').offsetWidth + 16;
      var activeIndex = Math.round(scrollLeft / cardWidth);
      dots.forEach(function(dot, i) {
        dot.classList.toggle('active', i === activeIndex);
      });
    });
  });

  // ==========================================
  // Lordicon: play after scroll stops, replay on re-enter, loop on hover
  // ==========================================
  (function() {
    var scrollTimer = null;
    var pendingIcons = new Set();

    // Observer triggers when icons enter/leave viewport
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        var icon = entry.target;
        if (entry.isIntersecting) {
          // Mark as pending, will play when scroll stops
          icon.removeAttribute('trigger');
          pendingIcons.add(icon);
          schedulePlay();
        } else {
          // Left viewport, reset so it replays on return
          pendingIcons.delete(icon);
          icon.removeAttribute('trigger');
        }
      });
    }, { threshold: 0.5 });

    function schedulePlay() {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(function() {
        pendingIcons.forEach(function(icon) {
          icon.removeAttribute('trigger');
          requestAnimationFrame(function() {
            icon.setAttribute('trigger', 'in');
          });
        });
        pendingIcons.clear();
      }, 800);
    }

    // Re-schedule on scroll so icons wait for scroll to stop
    window.addEventListener('scroll', function() {
      if (pendingIcons.size > 0) {
        schedulePlay();
      }
    }, { passive: true });

    document.querySelectorAll('lord-icon').forEach(function(icon) {
      // Remove initial trigger so observer controls it
      icon.removeAttribute('trigger');
      observer.observe(icon);

      // Hover: loop while hovering
      icon.addEventListener('mouseenter', function() {
        pendingIcons.delete(icon);
        icon.setAttribute('trigger', 'loop');
      });
      icon.addEventListener('mouseleave', function() {
        icon.removeAttribute('trigger');
        requestAnimationFrame(function() {
          icon.setAttribute('trigger', 'in');
        });
      });
    });
  })();

  // ==========================================
  // Slide Viewer navigation
  // ==========================================
  document.querySelectorAll('.slide-viewer').forEach(function(viewer) {
    var items = viewer.querySelectorAll('.slide-viewer__item');
    var prev = viewer.querySelector('.slide-viewer__prev');
    var next = viewer.querySelector('.slide-viewer__next');
    var counter = viewer.querySelector('.slide-viewer__current');
    var current = 0;

    function show(index) {
      items.forEach(function(item, i) {
        item.classList.toggle('active', i === index);
      });
      current = index;
      if (counter) counter.textContent = index + 1;
    }

    if (prev) prev.addEventListener('click', function() {
      show(current > 0 ? current - 1 : items.length - 1);
    });
    if (next) next.addEventListener('click', function() {
      show(current < items.length - 1 ? current + 1 : 0);
    });
  });

  // ==========================================
  // Quick Take flow line (connects cards in order)
  // ==========================================
  function drawFlowLine() {
    var flow = document.querySelector('.qt-flow');
    if (!flow) return;
    var cards = flow.querySelectorAll('.qt-card[data-order]');
    if (cards.length < 2) return;

    var oldSvg = flow.querySelector('.qt-flow-svg');
    if (oldSvg) oldSvg.remove();

    var flowRect = flow.getBoundingClientRect();
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'qt-flow-svg');
    svg.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;overflow:visible;';

    var defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    var marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
    marker.setAttribute('id', 'flowArrow');
    marker.setAttribute('viewBox', '0 0 10 7');
    marker.setAttribute('refX', '9');
    marker.setAttribute('refY', '3.5');
    marker.setAttribute('markerWidth', '7');
    marker.setAttribute('markerHeight', '5');
    marker.setAttribute('orient', 'auto');
    var arrowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    arrowPath.setAttribute('d', 'M 1 1 L 8 3.5 L 1 6');
    arrowPath.setAttribute('fill', 'none');
    arrowPath.setAttribute('stroke', 'var(--accent)');
    arrowPath.setAttribute('stroke-width', '1.5');
    arrowPath.setAttribute('stroke-linecap', 'round');
    arrowPath.setAttribute('stroke-linejoin', 'round');
    arrowPath.setAttribute('opacity', '0.4');
    marker.appendChild(arrowPath);
    defs.appendChild(marker);
    svg.appendChild(defs);

    var pts = [];
    cards.forEach(function(card) {
      var r = card.getBoundingClientRect();
      pts.push({
        cx: r.left + r.width / 2 - flowRect.left,
        cy: r.top + r.height / 2 - flowRect.top,
        r: r.right - flowRect.left,
        l: r.left - flowRect.left,
        t: r.top - flowRect.top,
        b: r.bottom - flowRect.top
      });
    });

    // One continuous serpentine line matching the hand-drawn red line
    if (pts.length >= 6) {
      var p = pts;
      // Measure the far-left edge of the layout for the big sweeps
      var farLeft = Math.min(p[0].l, p[1].l, p[3].l, p[4].l) - 60;
      var farRight = Math.max(p[2].r, p[5].r) + 60;
      var d = '';

      // 1→2: Start at card 1 left edge, big arc sweeping down the far-left margin
      d += 'M ' + p[0].l + ',' + (p[0].b - 20);
      d += ' C ' + farLeft + ',' + p[0].b;
      d += ' ' + farLeft + ',' + p[1].t;
      d += ' ' + p[1].l + ',' + (p[1].t + 20);

      // 2→3: From card 2 right side, sweep up in a wide arc to card 3 left side
      d += ' M ' + p[1].r + ',' + (p[1].t + 30);
      d += ' C ' + (p[1].r + 60) + ',' + (p[1].t - 70);
      d += ' ' + (p[2].l - 60) + ',' + (p[2].t - 70);
      d += ' ' + p[2].l + ',' + (p[2].t + 30);

      // 3→4: From card 3 bottom-right, big swooping arc: right, then down, then back left to card 4
      d += ' M ' + p[2].r + ',' + (p[2].b - 30);
      d += ' C ' + farRight + ',' + p[2].b;
      d += ' ' + farRight + ',' + p[3].t;
      d += ' ' + p[3].r + ',' + (p[3].t + 20);

      // 4→5: From card 4 bottom-left, sweep far-left then curve back to card 5
      d += ' M ' + p[3].l + ',' + (p[3].b - 20);
      d += ' C ' + (farLeft - 20) + ',' + p[3].b;
      d += ' ' + (farLeft - 20) + ',' + p[4].t;
      d += ' ' + p[4].l + ',' + (p[4].t + 20);

      // 5→6: From card 5 right, gentle curve right to card 6
      d += ' M ' + p[4].r + ',' + p[4].cy;
      d += ' C ' + (p[4].r + 40) + ',' + (p[4].cy - 15);
      d += ' ' + (p[5].l - 40) + ',' + (p[5].cy + 15);
      d += ' ' + p[5].l + ',' + p[5].cy;

      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', d);
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', 'var(--accent)');
      path.setAttribute('stroke-width', '1.8');
      path.setAttribute('stroke-dasharray', '6 5');
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('opacity', '0.22');
      path.setAttribute('marker-end', 'url(#flowArrow)');
      svg.appendChild(path);
    }

    flow.insertBefore(svg, flow.firstChild);
  }

  setTimeout(drawFlowLine, 300);
  window.addEventListener('resize', drawFlowLine);
