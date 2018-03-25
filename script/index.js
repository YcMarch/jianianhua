$(function() {
    var frameStart = true;
    var screenW = $(window).width() * 1.5;
    var screenH = $(window).height() * 1.5;
    var screenTargetW = 368;
    var screenTargetH = 206;
    var totalFrame = 5;
    var bgpEnd = -9324;
    var bgpStart = 0;
    var tranY = -50;
    var currentFrame = 0;
    var scaleRange = [0, 3];
    var fadeRange = [2, 3];
    var flipRange = [3, 5];
    var flipComplete = false;
    var goToNextFrame = true;
    $("#dowebok").fullpage({
        anchors: ["head", "indexPart2", "indexPart3", "footer",'footerl'],
        afterRender: function() {
            console.log("afterRender");
            if (!/\#indexPart2 | \#indexPart3 | \#footer| #footerl/.test(location.href)) {
                $.fn.fullpage.setAllowScrolling(false);
                frameStart = true;
                $(".title-1").velocity("transition.slideUpIn", {
                    duration: 3000,
                    display: "block",
                    queue: false
                });
                $(".title-2").velocity("transition.fadeIn", {
                    delay: 300,
                    duration: 2500,
                    display: "block",
                    queue: false
                });
                $(".screen").width(screenW);
                $(".screen").height(screenH);
                $(".screen").css({
                    "margin-left": -screenW / 2 + "px",
                    "margin-top": -screenH / 2 + "px"
                })
            } else {
                frameStart = false;
                flipComplete = true
            }
        },
        onLeave: function(index, nextIndex, direction) {
            if (nextIndex == 1) {
                $(".headDiv").removeClass("on")
            } else {
                $(".headDiv").addClass("on")
            }
            if (nextIndex == 4) {
                indexPart4Fun()
            }
            if (nextIndex == 1) {} else {
                frameStart = false;
                $.fn.fullpage.setAllowScrolling(true)
            }
        },
        afterLoad: function(anchorLink, index) {
            if (anchorLink == "head") {
                frameStart = true;
                $.fn.fullpage.setAllowScrolling(false)
            }
        }
    });
    $(document).on("mousewheel", function(eve) {
        if (!frameStart) {
            return
        }
        if (goToNextFrame == false) {
            return
        }
        if (eve.deltaY < 0) {
            currentFrame++
        } else {
            currentFrame--
        }
        if (currentFrame < 0) {
            currentFrame = 0;
            return
        }
        if (currentFrame > totalFrame) {
            currentFrame = totalFrame;
            if (flipComplete) {
                $.fn.fullpage.moveSectionDown()
            }
            return
        }
        render(currentFrame)
    });

    function render(currFrame) {
        if (currFrame >= scaleRange[0] && currFrame <= scaleRange[1]) {
            renderScreenScale(currFrame)
        }
        if (currFrame >= fadeRange[0] && currFrame <= fadeRange[1]) {
            if (currFrame == fadeRange[1]) {
                $(".phone").velocity({
                    opacity: 1
                }, {
                    duration: 500,
                    queue: false
                })
            }
            if (currFrame == fadeRange[0]) {
                $(".phone").velocity({
                    opacity: 1
                }, {
                    duration: 100,
                    queue: false
                })
            }
        }
        if (currFrame >= flipRange[0] && currFrame <= flipRange[1]) {
            renderPhoneFlip(currFrame)
        }
    }
    function renderPhoneFlip(currFrame) {
        var y = (bgpEnd - bgpStart) / (flipRange[1] - flipRange[0]) * currFrame - flipRange[0] * (bgpEnd - bgpStart) / (flipRange[1] - flipRange[0]);
        $(".phone").velocity({
            backgroundPositionY: y + "px"
        }, {
            easing: [14],
            duration: 500,
            begin: function() {
                goToNextFrame = false;
                if (currFrame != flipRange[1]) {
                    $(".prods-wrap").removeClass("active")
                }
            },
            complete: function() {
                if (currFrame == flipRange[1]) {
                    $(".prods-wrap").addClass("active");
                    window.setTimeout(function() {
                        goToNextFrame = true;
                        flipComplete = true
                    }, 750)
                } else {
                    $(".prods-wrap").removeClass("active");
                    goToNextFrame = true;
                    flipComplete = false
                }
            }
        });
        var y2 = (tranY - 0) / (flipRange[1] - flipRange[0]) * currFrame - flipRange[0] * (tranY - 0) / (flipRange[1] - flipRange[0]);
        var opc = (1 - 0) / (flipRange[1] - 1 - flipRange[0]) * currFrame - flipRange[0] * (1 - 0) / (flipRange[1] - 1 - flipRange[0]);
        $(".title-3").velocity({
            translateY: y2 + "px",
            opacity: opc
        }, {
            duration: 500,
            queue: false
        });
        $(".title-4").velocity({
            translateY: y2 + "px",
            opacity: opc
        }, {
            duration: 500,
            delay: 100,
            queue: false
        })
    }
    function renderScreenScale(currFrame) {
        if (currFrame == 0) {
            $(".screen").velocity({
                "width": screenW,
                "height": screenH,
                "marginLeft": -screenW / 2 + "px",
                "marginTop": -screenH / 2 + "px"
            }, {
                duration: 200,
                queue: false,
                begin: function() {
                    goToNextFrame = false;
                    if (currFrame != scaleRange[1]) {
                        $(".screen").show()
                    }
                },
                complete: function() {
                    goToNextFrame = true;
                    if (currFrame === scaleRange[1]) {
                        $(".screen").hide()
                    }
                }
            });
            $(".screen").removeClass("animating")
        } else {
            $(".screen").addClass("animating");
            var top = (65 - 50) / (scaleRange[1] - scaleRange[0]) * currFrame + 50 - (65 - 50) / (scaleRange[1] - scaleRange[0]) * scaleRange[0];
            $(".screen").velocity({
                width: (screenTargetW - screenW) / totalFrame / (scaleRange[1] / totalFrame) * currFrame + screenW,
                height: (screenTargetH - screenH) / totalFrame / (scaleRange[1] / totalFrame) * currFrame + screenH,
                "top": top + "%",
                "marginLeft": -((screenTargetW - screenW) / totalFrame / (scaleRange[1] / totalFrame) * currFrame + screenW) / 2 + "px",
                "marginTop": -((screenTargetH - screenH) / totalFrame / (scaleRange[1] / totalFrame) * currFrame + screenH) / 2 + "px"
            }, {
                duration: 200,
                queue: false,
                begin: function() {
                    goToNextFrame = false;
                    if (currFrame != scaleRange[1]) {
                        $(".screen").show()
                    }
                },
                complete: function() {
                    goToNextFrame = true;
                    if (currFrame === scaleRange[1]) {
                        $(".screen").hide()
                    } else {
                        $(".screen").show()
                    }
                }
            });
            if (currFrame === scaleRange[1]) {
                $(".screen").addClass("in-phone")
            } else {
                $(".screen").removeClass("in-phone")
            }
        }
        var opc = currFrame / (scaleRange[0] - (scaleRange[1] - 1)) + (scaleRange[1] - 1) / ((scaleRange[1] - 1) - scaleRange[0]);
        $(".title-1, .title-2").velocity("stop").velocity({
            opacity: opc
        }, {
            duration: 200,
            queue: false
        })
    }
});