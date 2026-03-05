/* ============================================
   BOI Companion Site - Animations & Micro-interactions
   IntersectionObserver-based reveal, counters, progress bar
   ============================================ */

(function () {
  'use strict';

  // Bail out entirely if user prefers reduced motion
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var reducedMotion = prefersReducedMotion.matches;

  // Listen for changes (user may toggle mid-session)
  prefersReducedMotion.addEventListener('change', function (e) {
    reducedMotion = e.matches;
  });

  // ==========================================
  // 1. Reading Progress Bar
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

    // Set initial state
    updateProgress();
  }

  // ==========================================
  // 2. Scroll-Triggered Reveal Animations
  // ==========================================
  function initRevealAnimations() {
    if (!('IntersectionObserver' in window)) {
      // Fallback: just show everything
      var allReveal = document.querySelectorAll('.reveal');
      for (var i = 0; i < allReveal.length; i++) {
        allReveal[i].classList.add('revealed');
      }
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add('revealed');
          observer.unobserve(entries[i].target);
        }
      }
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    });

    // Apply .reveal class to target elements
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
      '.closing__body'
    ];

    var elements = document.querySelectorAll(selectors.join(', '));

    for (var j = 0; j < elements.length; j++) {
      var el = elements[j];
      // Skip if already has reveal (e.g., staggered children handle themselves)
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
      }
      if (reducedMotion) {
        el.classList.add('revealed');
      } else {
        observer.observe(el);
      }
    }
  }

  // ==========================================
  // 3. Staggered Grid Reveals
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
            var child = children[c];
            child.classList.add('stagger-' + (c + 1));
            if (reducedMotion) {
              child.classList.add('revealed');
            }
          }

          // Trigger reveal with a small RAF delay so stagger classes are applied
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

      // Add reveal class to each child
      for (var c = 0; c < children.length; c++) {
        children[c].classList.add('reveal');
      }

      gridObserver.observe(grid);
    }
  }

  // ==========================================
  // 4. Animated Stat Counters
  // ==========================================
  function animateCounter(el) {
    var target = parseFloat(el.getAttribute('data-count-to'));
    var prefix = el.getAttribute('data-count-prefix') || '';
    var suffix = el.getAttribute('data-count-suffix') || '';
    var duration = 1200; // ms
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
        // Final value
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
  // 5. Pull Quote Border Animation
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
  // Initialize all animations on DOMContentLoaded
  // ==========================================
  function init() {
    initProgressBar();
    initRevealAnimations();
    initStaggeredGrids();
    initCounters();
    initPullQuoteAnimation();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
