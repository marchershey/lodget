/*! hotel-datepicker 4.0.3 - Copyright 2021 Benito Lopez (http://lopezb.com) - https://github.com/benitolopez/hotel-datepicker - MIT */
window.HotelDatepicker = (function () {
    "use strict";
    function s(e, t) {
        (this._boundedEventHandlers = {}),
            (this.id = s.getNewId()),
            (t = t || {}),
            (this.format = t.format || "YYYY-MM-DD"),
            (this.infoFormat = t.infoFormat || this.format),
            (this.separator = t.separator || " - "),
            (this.startOfWeek = t.startOfWeek || "sunday"),
            (this.startDate = t.startDate || new Date()),
            (this.endDate = t.endDate || !1),
            (this.minNights = t.minNights || 1),
            (this.maxNights = t.maxNights || 0),
            (this.selectForward = t.selectForward || !1),
            (this.disabledDates = t.disabledDates || []),
            (this.noCheckInDates = t.noCheckInDates || []),
            (this.noCheckOutDates = t.noCheckOutDates || []),
            (this.disabledDaysOfWeek = t.disabledDaysOfWeek || []),
            (this.enableCheckout = t.enableCheckout || !1),
            (this.preventContainerClose = t.preventContainerClose || !1),
            (this.container = t.container || ""),
            (this.animationSpeed = t.animationSpeed || ".5s"),
            (this.hoveringTooltip = t.hoveringTooltip || !0),
            (this.autoClose = void 0 === t.autoClose || t.autoClose),
            (this.showTopbar = void 0 === t.showTopbar || t.showTopbar),
            (this.moveBothMonths = t.moveBothMonths || !1),
            (this.i18n = t.i18n || {
                selected: "Your stay:",
                night: "Night",
                nights: "Nights",
                button: "Close",
                "checkin-disabled": "Check-in disabled",
                "checkout-disabled": "Check-out disabled",
                "day-names-short": [
                    "Sun",
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat",
                ],
                "day-names": [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                ],
                "month-names-short": [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                "month-names": [
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                ],
                "error-more": "Date range should not be more than 1 night",
                "error-more-plural":
                    "Date range should not be more than %d nights",
                "error-less": "Date range should not be less than 1 night",
                "error-less-plural":
                    "Date range should not be less than %d nights",
                "info-more": "Please select a date range of at least 1 night",
                "info-more-plural":
                    "Please select a date range of at least %d nights",
                "info-range":
                    "Please select a date range between %d and %d nights",
                "info-default": "Please select a date range",
            }),
            (this.getValue =
                t.getValue ||
                function () {
                    return e.value;
                }),
            (this.setValue =
                t.setValue ||
                function (t) {
                    e.value = t;
                }),
            (this.onDayClick = void 0 !== t.onDayClick && t.onDayClick),
            (this.onOpenDatepicker =
                void 0 !== t.onOpenDatepicker && t.onOpenDatepicker),
            (this.onSelectRange =
                void 0 !== t.onSelectRange && t.onSelectRange),
            (this.input = e),
            this.init();
    }
    var t = 0;
    return (
        (s.prototype.addBoundedListener = function (t, e, s, a) {
            t in this._boundedEventHandlers ||
                (this._boundedEventHandlers[t] = {}),
                e in this._boundedEventHandlers[t] ||
                    (this._boundedEventHandlers[t][e] = []);
            s = s.bind(this);
            this._boundedEventHandlers[t][e].push([s, a]),
                t.addEventListener(e, s, a);
        }),
        (s.prototype.removeAllBoundedListeners = function (t, e) {
            if (t in this._boundedEventHandlers) {
                var s = this._boundedEventHandlers[t];
                if (e in s)
                    for (var a = s[e], i = a.length; i--; ) {
                        var n = a[i];
                        t.removeEventListener(e, n[0], n[1]);
                    }
            }
        }),
        (s.getNewId = function () {
            return ++t;
        }),
        (s.prototype.setFechaI18n = function () {
            fecha.setGlobalDateI18n({
                dayNamesShort: this.i18n["day-names-short"],
                dayNames: this.i18n["day-names"],
                monthNamesShort: this.i18n["month-names-short"],
                monthNames: this.i18n["month-names"],
            });
        }),
        (s.prototype.getWeekDayNames = function () {
            var t = "";
            if ("monday" === this.startOfWeek) {
                for (var e = 0; e < 7; e++)
                    t +=
                        '<th class="datepicker__week-name">' +
                        this.lang("day-names-short")[(1 + e) % 7] +
                        "</th>";
                return t;
            }
            for (var s = 0; s < 7; s++)
                t +=
                    '<th class="datepicker__week-name">' +
                    this.lang("day-names-short")[s] +
                    "</th>";
            return t;
        }),
        (s.prototype.getMonthDom = function (t) {
            return document.getElementById(this.getMonthTableId(t));
        }),
        (s.prototype.getMonthName = function (t) {
            return this.lang("month-names")[t];
        }),
        (s.prototype.getDatepickerId = function () {
            return "datepicker-" + this.generateId();
        }),
        (s.prototype.getMonthTableId = function (t) {
            return "month-" + t + "-" + this.generateId();
        }),
        (s.prototype.getCloseButtonId = function () {
            return "close-" + this.generateId();
        }),
        (s.prototype.getTooltipId = function () {
            return "tooltip-" + this.generateId();
        }),
        (s.prototype.getNextMonth = function (t) {
            t = new Date(t.valueOf());
            return new Date(t.setMonth(t.getMonth() + 1, 1));
        }),
        (s.prototype.getPrevMonth = function (t) {
            t = new Date(t.valueOf());
            return new Date(t.setMonth(t.getMonth() - 1, 1));
        }),
        (s.prototype.getDateString = function (t, e) {
            return (
                void 0 === e && (e = this.format),
                this.setFechaI18n(),
                fecha.format(t, e)
            );
        }),
        (s.prototype.parseDate = function (t, e) {
            return (
                void 0 === e && (e = this.format),
                this.setFechaI18n(),
                fecha.parse(t, e)
            );
        }),
        (s.prototype.init = function () {
            (this.parent = this.container || this.input.parentElement),
                (this.start = !1),
                (this.end = !1),
                (this.minDays = 1 < this.minNights ? this.minNights + 1 : 2),
                (this.maxDays = 0 < this.maxNights ? this.maxNights + 1 : 0),
                this.startDate &&
                    "string" == typeof this.startDate &&
                    (this.startDate = this.parseDate(this.startDate)),
                this.endDate &&
                    "string" == typeof this.endDate &&
                    (this.endDate = this.parseDate(this.endDate)),
                this.isTouchDevice() && (this.hoveringTooltip = !1),
                (this.isOpen = !1),
                (this.changed = !1),
                this.createDom();
            var t = new Date();
            this.startDate &&
                this.compareMonth(t, this.startDate) < 0 &&
                (t = new Date(this.startDate.getTime())),
                this.endDate &&
                    0 < this.compareMonth(this.getNextMonth(t), this.endDate) &&
                    (t = new Date(this.getPrevMonth(this.endDate.getTime()))),
                0 < this.disabledDates.length && this.parseDisabledDates(),
                this.showMonth(t, 1),
                this.showMonth(this.getNextMonth(t), 2),
                this.topBarDefaultText(),
                this.addListeners(),
                (this.isFirstDisabledDate = 0),
                (this.lastDisabledDate = !1);
        }),
        (s.prototype.addListeners = function () {
            for (
                var e = this,
                    t = this.datepicker.getElementsByClassName(
                        "datepicker__month-button--next"
                    ),
                    s = 0;
                s < t.length;
                s++
            )
                t[s].addEventListener("click", function (t) {
                    return e.goToNextMonth(t);
                });
            for (
                var a = this.datepicker.getElementsByClassName(
                        "datepicker__month-button--prev"
                    ),
                    i = 0;
                i < a.length;
                i++
            )
                a[i].addEventListener("click", function (t) {
                    return e.goToPreviousMonth(t);
                });
            this.addBoundedListener(this.input, "click", function (t) {
                return e.openDatepicker(t);
            }),
                this.showTopbar &&
                    document
                        .getElementById(this.getCloseButtonId())
                        .addEventListener("click", function (t) {
                            return e.closeDatepicker(t);
                        }),
                this.datepicker.addEventListener("mouseover", function (t) {
                    return e.datepickerHover(t);
                }),
                this.datepicker.addEventListener("mouseout", function (t) {
                    return e.datepickerMouseOut(t);
                }),
                this.addBoundedListener(this.input, "change", function () {
                    return e.checkAndSetDefaultValue();
                });
        }),
        (s.prototype.generateId = function () {
            return this.input.id || this.id;
        }),
        (s.prototype.createDom = function () {
            var t = this.createDatepickerDomString();
            this.parent.insertAdjacentHTML("beforeend", t),
                (this.datepicker = document.getElementById(
                    this.getDatepickerId()
                ));
        }),
        (s.prototype.createDatepickerDomString = function () {
            var t =
                '<div id="' +
                this.getDatepickerId() +
                '" style="display:none" class="datepicker datepicker--closed">';
            (t += '<div class="datepicker__inner">'),
                this.showTopbar &&
                    (t +=
                        '<div class="datepicker__topbar"><div class="datepicker__info datepicker__info--selected"><span class="datepicker__info datepicker__info--selected-label">' +
                        this.lang("selected") +
                        ' </span> <strong class="datepicker__info-text datepicker__info-text--start-day">...</strong> <span class="datepicker__info-text datepicker__info--separator">' +
                        this.separator +
                        '</span> <strong class="datepicker__info-text datepicker__info-text--end-day">...</strong> <em class="datepicker__info-text datepicker__info-text--selected-days">(<span></span>)</em></div><div class="datepicker__info datepicker__info--feedback"></div><button type="button" id="' +
                        this.getCloseButtonId() +
                        '" class="datepicker__close-button">' +
                        this.lang("button") +
                        "</button></div>"),
                (t += '<div class="datepicker__months">');
            for (var e = 1; e <= 2; e++)
                t +=
                    '<table id="' +
                    this.getMonthTableId(e) +
                    '" class="datepicker__month datepicker__month--month' +
                    e +
                    '"><thead><tr class="datepicker__month-caption"><th><span class="datepicker__month-button datepicker__month-button--prev" month="' +
                    e +
                    '">&lt;</span></th><th colspan="5" class="datepicker__month-name"></th><th><span class="datepicker__month-button datepicker__month-button--next" month="' +
                    e +
                    '">&gt;</span></th></tr><tr class="datepicker__week-days">' +
                    this.getWeekDayNames(e) +
                    "</tr></thead><tbody></tbody></table>";
            return (
                (t += "</div>"),
                (t +=
                    '<div style="display:none" id="' +
                    this.getTooltipId() +
                    '" class="datepicker__tooltip"></div>'),
                (t += "</div>"),
                (t += "</div>")
            );
        }),
        (s.prototype.showMonth = function (t, e) {
            t.setHours(0, 0, 0, 0);
            var s = this.getMonthName(t.getMonth()),
                a = this.getMonthDom(e),
                i = a.getElementsByClassName("datepicker__month-name")[0],
                a = a.getElementsByTagName("tbody")[0];
            (i.textContent = s + " " + t.getFullYear()),
                this.emptyElement(a),
                a.insertAdjacentHTML("beforeend", this.createMonthDomString(t)),
                this.updateSelectableRange(),
                (this["month" + e] = t);
        }),
        (s.prototype.createMonthDomString = function (t) {
            var e = this,
                s = [],
                a = "";
            t.setDate(1);
            var i = t.getDay(),
                n = t.getMonth();
            if (0 < (i = 0 === i && "monday" === this.startOfWeek ? 7 : i))
                for (var o = i; 0 < o; o--) {
                    var r = new Date(t.getTime() - 864e5 * o),
                        h = e.isValidDate(r.getTime());
                    ((e.startDate && e.compareDay(r, e.startDate) < 0) ||
                        (e.endDate && 0 < e.compareDay(r, e.endDate))) &&
                        (h = !1),
                        s.push({
                            date: r,
                            type: "lastMonth",
                            day: r.getDate(),
                            time: r.getTime(),
                            valid: h,
                        });
                }
            for (var d = 0; d < 40; d++) {
                var l = e.addDays(t, d);
                (h = e.isValidDate(l.getTime())),
                    ((e.startDate && e.compareDay(l, e.startDate) < 0) ||
                        (e.endDate && 0 < e.compareDay(l, e.endDate))) &&
                        (h = !1),
                    s.push({
                        date: l,
                        type: l.getMonth() === n ? "visibleMonth" : "nextMonth",
                        day: l.getDate(),
                        time: l.getTime(),
                        valid: h,
                    });
            }
            for (var c = 0; c < 6 && "nextMonth" !== s[7 * c].type; c++) {
                a += '<tr class="datepicker__week-row">';
                for (var p = 0; p < 7; p++) {
                    var m,
                        g,
                        u,
                        y =
                            s[
                                7 * c +
                                    (y = "monday" === e.startOfWeek ? p + 1 : p)
                            ],
                        D =
                            e.getDateString(y.time) ===
                            e.getDateString(new Date()),
                        f =
                            e.getDateString(y.time) ===
                            e.getDateString(e.startDate),
                        k = !1,
                        _ = !1,
                        v = !1,
                        b = !1,
                        C = !1,
                        M = !1;
                    (!y.valid && "visibleMonth" !== y.type) ||
                        ((m = e.getDateString(y.time, "YYYY-MM-DD")),
                        0 < e.disabledDates.length &&
                            ((u = e.getClosestDates(y.date))[0] &&
                                u[1] &&
                                e.compareDay(y.date, u[0]) &&
                                0 < e.countDays(u[0], u[1]) - 2 &&
                                ((g = e.countDays(u[1], y.date) - 1),
                                (u = e.countDays(y.date, u[0]) - 1),
                                ((e.selectForward && g < e.minDays) ||
                                    (!e.selectForward &&
                                        g < e.minDays &&
                                        u < e.minDays)) &&
                                    (y.valid = !1),
                                !y.valid &&
                                    e.enableCheckout &&
                                    2 == g &&
                                    (M = !0)),
                            -1 < e.disabledDates.indexOf(m)
                                ? ((k = !(y.valid = !1)),
                                  e.isFirstDisabledDate++,
                                  (e.lastDisabledDate = y.date))
                                : (e.isFirstDisabledDate = 0),
                            y.valid &&
                                e.lastDisabledDate &&
                                0 < e.compareDay(y.date, e.lastDisabledDate) &&
                                2 === e.countDays(y.date, e.lastDisabledDate) &&
                                (C = !0)),
                        0 < e.disabledDaysOfWeek.length &&
                            -1 <
                                e.disabledDaysOfWeek.indexOf(
                                    fecha.format(y.time, "dddd")
                                ) &&
                            (b = !(y.valid = !1)),
                        0 < e.noCheckInDates.length &&
                            -1 < e.noCheckInDates.indexOf(m) &&
                            (C = !(_ = !0)),
                        0 < e.noCheckOutDates.length &&
                            -1 < e.noCheckOutDates.indexOf(m) &&
                            (v = !0));
                    (C = [
                        "datepicker__month-day--" + y.type,
                        "datepicker__month-day--" +
                            (y.valid ? "valid" : "invalid"),
                        D ? "datepicker__month-day--today" : "",
                        k ? "datepicker__month-day--disabled" : "",
                        k && e.enableCheckout && 1 === e.isFirstDisabledDate
                            ? "datepicker__month-day--checkout-enabled"
                            : "",
                        M ? "datepicker__month-day--before-disabled-date" : "",
                        f || C ? "datepicker__month-day--checkin-only" : "",
                        _ ? "datepicker__month-day--no-checkin" : "",
                        v ? "datepicker__month-day--no-checkout" : "",
                        b ? "datepicker__month-day--day-of-week-disabled" : "",
                    ]),
                        (b = "");
                    _ && (b = e.i18n["checkin-disabled"]),
                        v &&
                            (b && (b += ". "),
                            (b += e.i18n["checkout-disabled"]));
                    C = { time: y.time, class: C.join(" ") };
                    b && (C.title = b),
                        (a +=
                            '<td class="datepicker__month-day ' +
                            C.class +
                            '" ' +
                            e.printAttributes(C) +
                            ">" +
                            y.day +
                            "</td>");
                }
                a += "</tr>";
            }
            return a;
        }),
        (s.prototype.openDatepicker = function () {
            var e = this;
            this.isOpen ||
                (this.removeClass(this.datepicker, "datepicker--closed"),
                this.addClass(this.datepicker, "datepicker--open"),
                this.checkAndSetDefaultValue(),
                this.slideDown(this.datepicker, this.animationSpeed),
                (this.isOpen = !0),
                this.showSelectedDays(),
                this.disableNextPrevButtons(),
                this.addBoundedListener(document, "click", function (t) {
                    return e.documentClick(t);
                }),
                this.onOpenDatepicker && this.onOpenDatepicker());
        }),
        (s.prototype.closeDatepicker = function () {
            var t;
            this.isOpen &&
                (this.removeClass(this.datepicker, "datepicker--open"),
                this.addClass(this.datepicker, "datepicker--closed"),
                this.slideUp(this.datepicker, this.animationSpeed),
                (this.isOpen = !1),
                (t = document.createEvent("Event")).initEvent(
                    "afterClose",
                    !0,
                    !0
                ),
                this.input.dispatchEvent(t),
                this.removeAllBoundedListeners(document, "click"));
        }),
        (s.prototype.autoclose = function () {
            this.autoClose &&
                this.changed &&
                this.isOpen &&
                this.start &&
                this.end &&
                this.closeDatepicker();
        }),
        (s.prototype.documentClick = function (t) {
            this.parent.contains(t.target) || t.target === this.input
                ? "td" === t.target.tagName.toLowerCase() &&
                  this.dayClicked(t.target)
                : this.preventContainerClose || this.closeDatepicker();
        }),
        (s.prototype.datepickerHover = function (t) {
            t.target.tagName &&
                "td" === t.target.tagName.toLowerCase() &&
                this.dayHovering(t.target);
        }),
        (s.prototype.datepickerMouseOut = function (t) {
            t.target.tagName &&
                "td" === t.target.tagName.toLowerCase() &&
                (document.getElementById(this.getTooltipId()).style.display =
                    "none");
        }),
        (s.prototype.checkAndSetDefaultValue = function () {
            var t = this.getValue(),
                e = t ? t.split(this.separator) : "";
            e && 2 <= e.length
                ? ((t = this.format),
                  (this.changed = !1),
                  this.setDateRange(
                      this.parseDate(e[0], t),
                      this.parseDate(e[1], t)
                  ),
                  (this.changed = !0))
                : this.showTopbar &&
                  (this.datepicker.getElementsByClassName(
                      "datepicker__info--selected"
                  )[0].style.display = "none");
        }),
        (s.prototype.setDateRange = function (t, e) {
            t.getTime() > e.getTime() &&
                ((s = e), (e = t), (t = s), (s = null));
            var s = !0;
            if (
                !(s =
                    (this.startDate &&
                        this.compareDay(t, this.startDate) < 0) ||
                    (this.endDate && 0 < this.compareDay(e, this.endDate))
                        ? !1
                        : s)
            )
                return (
                    this.showMonth(this.startDate, 1),
                    this.showMonth(this.getNextMonth(this.startDate), 2),
                    this.showSelectedDays(),
                    void this.disableNextPrevButtons()
                );
            t.setTime(t.getTime() + 432e5),
                e.setTime(e.getTime() + 432e5),
                (this.start = t.getTime()),
                (this.end = e.getTime()),
                0 < this.compareDay(t, e) &&
                    0 === this.compareMonth(t, e) &&
                    (e = this.getNextMonth(t)),
                0 === this.compareMonth(t, e) && (e = this.getNextMonth(t)),
                this.showMonth(t, 1),
                this.showMonth(e, 2),
                this.showSelectedDays(),
                this.disableNextPrevButtons(),
                this.checkSelection(),
                this.showSelectedInfo(),
                this.autoclose();
        }),
        (s.prototype.showSelectedDays = function () {
            var t = this;
            if (this.start || this.end)
                for (
                    var e = this.datepicker.getElementsByTagName("td"), s = 0;
                    s < e.length;
                    s++
                ) {
                    var a = parseInt(e[s].getAttribute("time"), 10);
                    (t.start && t.end && t.end >= a && t.start <= a) ||
                    (t.start &&
                        !t.end &&
                        t.getDateString(t.start, "YYYY-MM-DD") ===
                            t.getDateString(a, "YYYY-MM-DD"))
                        ? t.addClass(e[s], "datepicker__month-day--selected")
                        : t.removeClass(
                              e[s],
                              "datepicker__month-day--selected"
                          ),
                        t.start &&
                        t.getDateString(t.start, "YYYY-MM-DD") ===
                            t.getDateString(a, "YYYY-MM-DD")
                            ? t.addClass(
                                  e[s],
                                  "datepicker__month-day--first-day-selected"
                              )
                            : t.removeClass(
                                  e[s],
                                  "datepicker__month-day--first-day-selected"
                              ),
                        t.end &&
                        t.getDateString(t.end, "YYYY-MM-DD") ===
                            t.getDateString(a, "YYYY-MM-DD")
                            ? t.addClass(
                                  e[s],
                                  "datepicker__month-day--last-day-selected"
                              )
                            : t.removeClass(
                                  e[s],
                                  "datepicker__month-day--last-day-selected"
                              );
                }
        }),
        (s.prototype.showSelectedInfo = function () {
            var t, e, s, a, i;
            this.showTopbar
                ? ((a = (t = this.datepicker.getElementsByClassName(
                      "datepicker__info--selected"
                  )[0]).getElementsByClassName(
                      "datepicker__info-text--start-day"
                  )[0]),
                  (s = t.getElementsByClassName(
                      "datepicker__info-text--end-day"
                  )[0]),
                  (e = t.getElementsByClassName(
                      "datepicker__info-text--selected-days"
                  )[0]),
                  (i = document.getElementById(this.getCloseButtonId())),
                  (a.textContent = "..."),
                  (s.textContent = "..."),
                  (e.style.display = "none"),
                  this.start &&
                      ((t.style.display = ""),
                      (a.textContent = this.getDateString(
                          new Date(parseInt(this.start, 10)),
                          this.infoFormat
                      ))),
                  this.end &&
                      (s.textContent = this.getDateString(
                          new Date(parseInt(this.end, 10)),
                          this.infoFormat
                      )),
                  this.start && this.end
                      ? ((s =
                            1 == (a = this.countDays(this.end, this.start) - 1)
                                ? a + " " + this.lang("night")
                                : a + " " + this.lang("nights")),
                        (a =
                            this.getDateString(new Date(this.start)) +
                            this.separator +
                            this.getDateString(new Date(this.end))),
                        (e.style.display = ""),
                        (e.firstElementChild.textContent = s),
                        (i.disabled = !1),
                        this.setValue(
                            a,
                            this.getDateString(new Date(this.start)),
                            this.getDateString(new Date(this.end))
                        ),
                        (this.changed = !0))
                      : (i.disabled = !0))
                : this.start &&
                  this.end &&
                  ((i =
                      this.getDateString(new Date(this.start)) +
                      this.separator +
                      this.getDateString(new Date(this.end))),
                  this.setValue(
                      i,
                      this.getDateString(new Date(this.start)),
                      this.getDateString(new Date(this.end))
                  ),
                  (this.changed = !0));
        }),
        (s.prototype.dayClicked = function (t) {
            if (!this.hasClass(t, "datepicker__month-day--invalid")) {
                var e = (this.start && this.end) || (!this.start && !this.end);
                if (e) {
                    if (this.hasClass(t, "datepicker__month-day--no-checkin"))
                        return;
                } else if (
                    this.start &&
                    this.hasClass(t, "datepicker__month-day--no-checkout")
                )
                    return;
                var s = parseInt(t.getAttribute("time"), 10);
                this.addClass(t, "datepicker__month-day--selected"),
                    e
                        ? ((this.start = s), (this.end = !1))
                        : this.start && (this.end = s),
                    this.start &&
                        this.end &&
                        this.start > this.end &&
                        ((s = this.end),
                        (this.end = this.start),
                        (this.start = s)),
                    (this.start = parseInt(this.start, 10)),
                    (this.end = parseInt(this.end, 10)),
                    this.clearHovering(),
                    this.start && !this.end && this.dayHovering(t),
                    this.updateSelectableRange(),
                    this.checkSelection(),
                    this.showSelectedInfo(),
                    this.showSelectedDays(),
                    this.autoclose(),
                    this.onDayClick && this.onDayClick(),
                    this.end && this.onSelectRange && this.onSelectRange();
            }
        }),
        (s.prototype.isValidDate = function (t) {
            if (
                ((t = parseInt(t, 10)),
                (this.startDate && this.compareDay(t, this.startDate) < 0) ||
                    (this.endDate && 0 < this.compareDay(t, this.endDate)))
            )
                return !1;
            if (this.start && !this.end) {
                if (
                    (0 < this.maxDays &&
                        this.countDays(t, this.start) > this.maxDays) ||
                    (0 < this.minDays &&
                        1 < this.countDays(t, this.start) &&
                        this.countDays(t, this.start) < this.minDays)
                )
                    return !1;
                if (this.selectForward && t < this.start) return !1;
                if (0 < this.disabledDates.length) {
                    var e = this.getClosestDates(
                        new Date(parseInt(this.start, 10))
                    );
                    if (e[0] && this.compareDay(t, e[0]) <= 0) return !1;
                    if (e[1] && 0 <= this.compareDay(t, e[1])) return !1;
                }
            }
            return !0;
        }),
        (s.prototype.checkSelection = function () {
            var t = this,
                e = this.countDays(this.end, this.start),
                s =
                    !!this.showTopbar &&
                    this.datepicker.getElementsByClassName(
                        "datepicker__info--feedback"
                    )[0];
            if (this.maxDays && e > this.maxDays) {
                (this.start = !1), (this.end = !1);
                for (
                    var a,
                        i = this.datepicker.getElementsByTagName("td"),
                        n = 0;
                    n < i.length;
                    n++
                )
                    t.removeClass(i[n], "datepicker__month-day--selected"),
                        t.removeClass(
                            i[n],
                            "datepicker__month-day--first-day-selected"
                        ),
                        t.removeClass(
                            i[n],
                            "datepicker__month-day--last-day-selected"
                        );
                this.showTopbar &&
                    ((a = this.maxDays - 1),
                    this.topBarErrorText(s, "error-more", a));
            } else if (this.minDays && e < this.minDays) {
                (this.start = !1), (this.end = !1);
                for (
                    var o = this.datepicker.getElementsByTagName("td"), r = 0;
                    r < o.length;
                    r++
                )
                    t.removeClass(o[r], "datepicker__month-day--selected"),
                        t.removeClass(
                            o[r],
                            "datepicker__month-day--first-day-selected"
                        ),
                        t.removeClass(
                            o[r],
                            "datepicker__month-day--last-day-selected"
                        );
                this.showTopbar &&
                    ((e = this.minDays - 1),
                    this.topBarErrorText(s, "error-less", e));
            } else
                this.start || this.end
                    ? this.showTopbar &&
                      (this.removeClass(s, "datepicker__info--error"),
                      this.removeClass(s, "datepicker__info--help"))
                    : this.showTopbar &&
                      (this.removeClass(s, "datepicker__info--error"),
                      this.addClass(s, "datepicker__info--help"));
        }),
        (s.prototype.addDays = function (t, e) {
            t = new Date(t);
            return t.setDate(t.getDate() + e), t;
        }),
        (s.prototype.countDays = function (t, e) {
            return Math.abs(this.daysFrom1970(t) - this.daysFrom1970(e)) + 1;
        }),
        (s.prototype.compareDay = function (t, e) {
            e =
                parseInt(this.getDateString(t, "YYYYMMDD"), 10) -
                parseInt(this.getDateString(e, "YYYYMMDD"), 10);
            return 0 < e ? 1 : 0 == e ? 0 : -1;
        }),
        (s.prototype.compareMonth = function (t, e) {
            e =
                parseInt(this.getDateString(t, "YYYYMM"), 10) -
                parseInt(this.getDateString(e, "YYYYMM"), 10);
            return 0 < e ? 1 : 0 == e ? 0 : -1;
        }),
        (s.prototype.daysFrom1970 = function (t) {
            return Math.round(this.toLocalTimestamp(t) / 864e5);
        }),
        (s.prototype.toLocalTimestamp = function (t) {
            return (
                "string" !=
                    typeof (t =
                        "object" == typeof t && t.getTime ? t.getTime() : t) ||
                    t.match(/\d{13}/) ||
                    (t = this.parseDate(t).getTime()),
                (t =
                    parseInt(t, 10) - 60 * new Date().getTimezoneOffset() * 1e3)
            );
        }),
        (s.prototype.printAttributes = function (t) {
            var e,
                s = t,
                a = "";
            for (e in t)
                Object.prototype.hasOwnProperty.call(s, e) &&
                    (a += e + '="' + s[e] + '" ');
            return a;
        }),
        (s.prototype.goToNextMonth = function (t) {
            var e = t.target.getAttribute("month"),
                s = 1 < e,
                t = s ? this.month2 : this.month1,
                t = this.getNextMonth(t);
            (!this.isSingleMonth() &&
                !s &&
                0 <= this.compareMonth(t, this.month2)) ||
                this.isMonthOutOfRange(t) ||
                (this.moveBothMonths && s && this.showMonth(this.month2, 1),
                this.showMonth(t, e),
                this.showSelectedDays(),
                this.disableNextPrevButtons());
        }),
        (s.prototype.goToPreviousMonth = function (t) {
            var e = t.target.getAttribute("month"),
                s = 1 < e,
                t = s ? this.month2 : this.month1,
                t = this.getPrevMonth(t);
            (s && this.compareMonth(t, this.month1) <= 0) ||
                this.isMonthOutOfRange(t) ||
                (this.moveBothMonths && !s && this.showMonth(this.month1, 2),
                this.showMonth(t, e),
                this.showSelectedDays(),
                this.disableNextPrevButtons());
        }),
        (s.prototype.isSingleMonth = function () {
            return !this.isVisible(this.getMonthDom(2));
        }),
        (s.prototype.isMonthOutOfRange = function (t) {
            t = new Date(t.valueOf());
            return !!(
                (this.startDate &&
                    new Date(t.getFullYear(), t.getMonth() + 1, 0, 23, 59, 59) <
                        this.startDate) ||
                (this.endDate &&
                    new Date(t.getFullYear(), t.getMonth(), 1) > this.endDate)
            );
        }),
        (s.prototype.disableNextPrevButtons = function () {
            var t, e, s;
            this.isSingleMonth() ||
                ((e = parseInt(this.getDateString(this.month1, "YYYYMM"), 10)),
                (s = parseInt(this.getDateString(this.month2, "YYYYMM"), 10)),
                (t = Math.abs(e - s)),
                (e = this.datepicker.getElementsByClassName(
                    "datepicker__month-button--next"
                )),
                (s = this.datepicker.getElementsByClassName(
                    "datepicker__month-button--prev"
                )),
                1 < t && 89 !== t
                    ? (this.removeClass(
                          e[0],
                          "datepicker__month-button--disabled"
                      ),
                      this.removeClass(
                          s[1],
                          "datepicker__month-button--disabled"
                      ))
                    : (this.addClass(
                          e[0],
                          "datepicker__month-button--disabled"
                      ),
                      this.addClass(
                          s[1],
                          "datepicker__month-button--disabled"
                      )),
                this.isMonthOutOfRange(this.getPrevMonth(this.month1))
                    ? this.addClass(s[0], "datepicker__month-button--disabled")
                    : this.removeClass(
                          s[0],
                          "datepicker__month-button--disabled"
                      ),
                this.isMonthOutOfRange(this.getNextMonth(this.month2))
                    ? this.addClass(e[1], "datepicker__month-button--disabled")
                    : this.removeClass(
                          e[1],
                          "datepicker__month-button--disabled"
                      ));
        }),
        (s.prototype.topBarDefaultText = function () {
            var t, e;
            this.showTopbar &&
                ((t = ""),
                (t =
                    this.minDays && this.maxDays
                        ? this.lang("info-range")
                        : this.minDays && 2 < this.minDays
                        ? this.lang("info-more-plural")
                        : this.minDays
                        ? this.lang("info-more")
                        : this.lang("info-default")),
                (e = this.datepicker.getElementsByClassName(
                    "datepicker__info--feedback"
                )[0]),
                (t = t
                    .replace(/%d/, this.minDays - 1)
                    .replace(/%d/, this.maxDays - 1)),
                this.addClass(e, "datepicker__info--help"),
                this.removeClass(e, "datepicker__info--error"),
                (e.textContent = t));
        }),
        (s.prototype.topBarErrorText = function (t, e, s) {
            this.showTopbar &&
                (this.addClass(t, "datepicker__info--error"),
                this.removeClass(t, "datepicker__info--help"),
                1 < s
                    ? ((e = (e = this.lang(e + "-plural")).replace("%d", s)),
                      (t.textContent = e))
                    : (e = this.lang(e)),
                (this.datepicker.getElementsByClassName(
                    "datepicker__info--selected"
                )[0].style.display = "none"));
        }),
        (s.prototype.updateSelectableRange = function () {
            for (
                var t,
                    e = this,
                    s = this.datepicker.getElementsByTagName("td"),
                    a = this.start && !this.end,
                    i = 0;
                i < s.length;
                i++
            )
                e.hasClass(s[i], "datepicker__month-day--invalid") &&
                    e.hasClass(s[i], "datepicker__month-day--tmp") &&
                    (e.removeClass(s[i], "datepicker__month-day--tmp"),
                    e.hasClass(s[i], "datepicker__month-day--tmpinvalid")
                        ? e.removeClass(
                              s[i],
                              "datepicker__month-day--tmpinvalid"
                          )
                        : (e.removeClass(
                              s[i],
                              "datepicker__month-day--invalid"
                          ),
                          e.addClass(s[i], "datepicker__month-day--valid"))),
                    a
                        ? e.hasClass(
                              s[i],
                              "datepicker__month-day--visibleMonth"
                          ) &&
                          (e.hasClass(s[i], "datepicker__month-day--valid") ||
                              e.hasClass(
                                  s[i],
                                  "datepicker__month-day--disabled"
                              ) ||
                              e.hasClass(
                                  s[i],
                                  "datepicker__month-day--before-disabled-date"
                              )) &&
                          ((t = parseInt(s[i].getAttribute("time"), 10)),
                          e.isValidDate(t)
                              ? (e.addClass(
                                    s[i],
                                    "datepicker__month-day--valid"
                                ),
                                e.addClass(s[i], "datepicker__month-day--tmp"),
                                e.removeClass(
                                    s[i],
                                    "datepicker__month-day--invalid"
                                ),
                                e.removeClass(
                                    s[i],
                                    "datepicker__month-day--disabled"
                                ))
                              : (e.hasClass(
                                    s[i],
                                    "datepicker__month-day--invalid"
                                ) &&
                                    e.addClass(
                                        s[i],
                                        "datepicker__month-day--tmpinvalid"
                                    ),
                                e.addClass(
                                    s[i],
                                    "datepicker__month-day--invalid"
                                ),
                                e.addClass(s[i], "datepicker__month-day--tmp"),
                                e.removeClass(
                                    s[i],
                                    "datepicker__month-day--valid"
                                )))
                        : (e.hasClass(
                              s[i],
                              "datepicker__month-day--checkout-enabled"
                          ) ||
                              e.hasClass(
                                  s[i],
                                  "datepicker__month-day--before-disabled-date"
                              )) &&
                          (e.addClass(s[i], "datepicker__month-day--invalid"),
                          e.removeClass(s[i], "datepicker__month-day--valid"),
                          e.hasClass(
                              s[i],
                              "datepicker__month-day--before-disabled-date"
                          ) ||
                              e.addClass(
                                  s[i],
                                  "datepicker__month-day--disabled"
                              ));
            return !0;
        }),
        (s.prototype.dayHovering = function (t) {
            var e,
                s,
                a,
                i = this,
                n = parseInt(t.getAttribute("time"), 10),
                o = "";
            if (!this.hasClass(t, "datepicker__month-day--invalid")) {
                for (
                    var r,
                        h = this.datepicker.getElementsByTagName("td"),
                        d = 0;
                    d < h.length;
                    d++
                ) {
                    var l = parseInt(h[d].getAttribute("time"), 10);
                    l === n
                        ? i.addClass(h[d], "datepicker__month-day--hovering")
                        : i.removeClass(
                              h[d],
                              "datepicker__month-day--hovering"
                          ),
                        i.start &&
                        !i.end &&
                        ((i.start < l && l <= n) || (i.start > l && n <= l))
                            ? i.addClass(
                                  h[d],
                                  "datepicker__month-day--hovering"
                              )
                            : i.removeClass(
                                  h[d],
                                  "datepicker__month-day--hovering"
                              );
                }
                this.start &&
                    !this.end &&
                    ((r = this.countDays(n, this.start) - 1),
                    this.hoveringTooltip &&
                        ("function" == typeof this.hoveringTooltip
                            ? (o = this.hoveringTooltip(r, this.start, n))
                            : !0 === this.hoveringTooltip &&
                              0 < r &&
                              (o =
                                  r +
                                  " " +
                                  (1 == r
                                      ? this.lang("night")
                                      : this.lang("nights")))));
            }
            o
                ? ((r = t.getBoundingClientRect()),
                  (t = this.datepicker.getBoundingClientRect()),
                  (e = r.left - t.left),
                  (s = r.top - t.top),
                  (e += r.width / 2),
                  ((a = document.getElementById(
                      this.getTooltipId()
                  )).style.display = ""),
                  (a.textContent = o),
                  (r = a.getBoundingClientRect().width),
                  (o = a.getBoundingClientRect().height),
                  (e -= r / 2),
                  (s -= o),
                  setTimeout(function () {
                      (a.style.left = e + "px"), (a.style.top = s + "px");
                  }, 10))
                : (document.getElementById(this.getTooltipId()).style.display =
                      "none");
        }),
        (s.prototype.clearHovering = function () {
            for (
                var t = this.datepicker.getElementsByTagName("td"), e = 0;
                e < t.length;
                e++
            )
                this.removeClass(t[e], "datepicker__month-day--hovering");
            document.getElementById(this.getTooltipId()).style.display = "none";
        }),
        (s.prototype.clearSelection = function () {
            (this.start = !1), (this.end = !1);
            for (
                var t = this.datepicker.getElementsByTagName("td"), e = 0;
                e < t.length;
                e++
            )
                this.removeClass(t[e], "datepicker__month-day--selected"),
                    this.removeClass(
                        t[e],
                        "datepicker__month-day--first-day-selected"
                    ),
                    this.removeClass(
                        t[e],
                        "datepicker__month-day--last-day-selected"
                    );
            this.setValue(""),
                this.checkSelection(),
                this.showSelectedInfo(),
                this.showSelectedDays();
        }),
        (s.prototype.parseDisabledDates = function () {
            var t = [];
            this.setFechaI18n();
            for (var e = 0; e < this.disabledDates.length; e++)
                t[e] = fecha.parse(this.disabledDates[e], "YYYY-MM-DD");
            t.sort(function (t, e) {
                return t - e;
            }),
                (this.disabledDatesTime = t);
        }),
        (s.prototype.getClosestDates = function (t) {
            var e = [!1, !1];
            if (t < this.disabledDatesTime[0])
                e = this.enableCheckout
                    ? [!1, this.addDays(this.disabledDatesTime[0], 1)]
                    : [!1, this.disabledDatesTime[0]];
            else if (
                t > this.disabledDatesTime[this.disabledDatesTime.length - 1]
            )
                e = [
                    this.disabledDatesTime[this.disabledDatesTime.length - 1],
                    !1,
                ];
            else {
                for (
                    var s,
                        a = this.disabledDatesTime.length,
                        i = this.disabledDatesTime.length,
                        n = Math.abs(new Date(0, 0, 0).valueOf()),
                        o = n,
                        r = -n,
                        h = 0;
                    h < this.disabledDatesTime.length;
                    ++h
                )
                    (s = t - this.disabledDatesTime[h]) < 0 &&
                        r < s &&
                        ((i = h), (r = s)),
                        0 < s && s < o && ((a = h), (o = s));
                this.disabledDatesTime[a] && (e[0] = this.disabledDatesTime[a]),
                    void 0 === this.disabledDatesTime[a]
                        ? (e[1] = !1)
                        : this.enableCheckout
                        ? (e[1] = this.addDays(this.disabledDatesTime[i], 1))
                        : (e[1] = this.disabledDatesTime[i]);
            }
            return e;
        }),
        (s.prototype.lang = function (t) {
            return t in this.i18n ? this.i18n[t] : "";
        }),
        (s.prototype.emptyElement = function (t) {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
        }),
        (s.prototype.classRegex = function (t) {
            return new RegExp("(^|\\s+)" + t + "(\\s+|$)");
        }),
        (s.prototype.hasClass = function (t, e) {
            return this.classRegex(e).test(t.className);
        }),
        (s.prototype.addClass = function (t, e) {
            this.hasClass(t, e) || (t.className = t.className + " " + e);
        }),
        (s.prototype.removeClass = function (t, e) {
            t.className = t.className.replace(this.classRegex(e), " ");
        }),
        (s.prototype.isVisible = function (t) {
            return t.offsetWidth || t.offsetHeight || t.getClientRects().length;
        }),
        (s.prototype.slideDown = function (t, e) {
            t.style.display = "";
            var s = t.getBoundingClientRect().height;
            (t.style.height = 0),
                this.recalc(t.offsetHeight),
                (t.style.transition = "height " + e),
                (t.style.height = s + "px"),
                t.addEventListener("transitionend", function () {
                    t.style.height = t.style.transition = t.style.display = "";
                });
        }),
        (s.prototype.slideUp = function (t, e) {
            var s = t.getBoundingClientRect().height;
            (t.style.height = s + "px"),
                this.recalc(t.offsetHeight),
                (t.style.transition = "height " + e),
                (t.style.height = 0),
                t.addEventListener("transitionend", function () {
                    t.style.display = "none";
                });
        }),
        (s.prototype.recalc = function (t) {
            return t.offsetHeight;
        }),
        (s.prototype.isTouchDevice = function () {
            return (
                "ontouchstart" in window ||
                (window.DocumentTouch && document instanceof DocumentTouch)
            );
        }),
        (s.prototype.open = function () {
            this.openDatepicker();
        }),
        (s.prototype.close = function () {
            this.closeDatepicker();
        }),
        (s.prototype.getDatePicker = function () {
            return this.datepicker;
        }),
        (s.prototype.setRange = function (t, e) {
            "string" == typeof t &&
                "string" == typeof e &&
                ((t = this.parseDate(t)), (e = this.parseDate(e))),
                this.setDateRange(t, e);
        }),
        (s.prototype.clear = function () {
            this.clearSelection();
        }),
        (s.prototype.getNights = function () {
            var t,
                e,
                s = 0;
            return (
                this.start && this.end
                    ? (s = this.countDays(this.end, this.start) - 1)
                    : (t = (e = this.getValue())
                          ? e.split(this.separator)
                          : "") &&
                      2 <= t.length &&
                      ((e = this.format),
                      (s =
                          this.countDays(
                              this.parseDate(t[0], e),
                              this.parseDate(t[1], e)
                          ) - 1)),
                s
            );
        }),
        (s.prototype.destroy = function () {
            document.getElementById(this.getDatepickerId()) &&
                (this.removeAllBoundedListeners(this.input, "click"),
                this.removeAllBoundedListeners(document, "click"),
                this.removeAllBoundedListeners(this.input, "change"),
                this.datepicker.parentNode.removeChild(this.datepicker));
        }),
        s
    );
})();
