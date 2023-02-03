---
title: 'Color'
description: 'Judicious use of color can enhance communication, evoke your brand, provide visual continuity, communicate status and feedback, and help people understand information.'
date: '2023-01-02T12:34:56+0000'
---

Judicious use of color can enhance communication, evoke your brand, provide visual continuity, communicate status and feedback, and help people understand information.

The system defines colors that look good on various backgrounds and appearance modes, and can automatically adapt to vibrancy and accessibility settings. People are familiar with the system colors, and using them is a convenient way to make your experience feel at home on the device.

You may also want to use custom colors to enhance the visual experience of your app or game and express its unique personality. The following guidelines can help you use color in ways that people appreciate, regardless of whether you use system-defined or custom colors.

## Best practices
**Use color sparingly in nongame apps**. In a nongame app, overuse of color can make communication less clear and can be distracting. Prefer using touches of color to call attention to important information or show the relationship between parts of the interface.

**Avoid using the same color to mean different things**. Use color consistently throughout your interface, especially when you use it to help communicate information like status or interactivity. For example, an app might use blue to indicate that people can tap text to view more. Even when the app communicates interactivity using a visual indicator that doesn't rely on color — such as a chevron or arrow icon — using a color other than blue for the interactive text is confusing.

**Make sure your app’s colors work well in both light and dark appearance modes**. With the exception of watchOS, which always uses a pure black background, the platforms offer a dark alternative to the default light appearance. Dark Mode uses a darker color palette for all screens, views, menus, and controls, and can increase *vibrancy* — a subtle effect that dynamically blends foreground and background colors — to make foreground content stand out against darker backgrounds. System colors automatically support both appearances; if you use a custom color, you need to supply both light and dark variants. For guidance, see [Dark Mode](https://developer.apple.com/design/human-interface-guidelines/foundations/dark-mode).

**Test your app’s color scheme under a variety of lighting conditions**. Colors can look different when you run your app outside on a sunny day or in dim light. Adjust colors to provide an optimal viewing experience in the majority of use cases.

**Test your app on devices with different displays**. For example, the True Tone display — available on certain iPhone, iPad, and Mac models — uses ambient light sensors to automatically adjust the white point of the display to adapt to the lighting conditions of the current environment. Apps that focus primarily on reading, photos, video, and gaming can strengthen or weaken this effect by specifying a white point adaptivity style (for developer guidance, see [UIWhitePointAdaptivityStyle](https://developer.apple.com/documentation/bundleresources/information_property_list/uiwhitepointadaptivitystyle)). Test tvOS apps on multiple brands of HD and 4K TVs, and with different display settings. You can also test the appearance of your app using different color profiles on a Mac — such as P3 and Standard RGB (sRGB) — by choosing a profile in System Settings > Displays. For guidance, see [Color management](https://developer.apple.com/design/human-interface-guidelines/foundations/color/#color-management).

**Consider how artwork and translucency affect nearby colors**. Variations in artwork sometimes warrant changes to nearby colors to maintain visual continuity and prevent interface elements from becoming overpowering or underwhelming. Maps, for example, displays a light color scheme when in map mode but switches to a dark color scheme when in satellite mode. Colors can also appear different when placed behind or applied to a translucent element like a toolbar.

**If your app lets people choose colors, prefer system-provided color controls where available**. Using built-in color pickers provides a consistent user experience, in addition to letting people save a set of colors they can access from any app. For developer guidance, see [NSColorPanel](https://developer.apple.com/documentation/appkit/nscolorpanel) (macOS), and [UIColorWell](https://developer.apple.com/documentation/uikit/uicolorwell) and [UIColorPickerViewController](https://developer.apple.com/documentation/uikit/uicolorpickerviewcontroller) (iOS, iPadOS, and Mac Catalyst).

## Inclusive color
**Avoid relying solely on color to differentiate between objects, indicate interactivity, or communicate essential information**. When you use color to convey information, be sure to provide the same information in alternative ways so people with color blindness or other visual disabilities can understand it. For example, you can use labels or glyph shapes to identify objects or states.

**Avoid using colors that make it hard to perceive content in your app**. For example, insufficient contrast can cause icons and text to blend with the background and make content hard to read, and people who are color blind might not be able to distinguish some color combinations. For guidance, see Color and effects.

**Consider how the colors you use might be perceived in other countries and cultures**. For example, red communicates danger in some cultures, but has positive connotations in other cultures. Make sure the colors in your app send the message you intend.

## System colors
**Avoid hard-coding system color values in your app**. Documented color values are for your reference during the app design process. The actual color values may fluctuate from release to release, based on a variety of environmental variables. Use APIs like [Color](https://developer.apple.com/documentation/swiftui/color) to apply system colors.

iOS and macOS also define sets of *dynamic system colors* that match the color schemes of standard UI components and automatically adapt to both light and dark appearances. Each dynamic color is semantically defined by its purpose, rather than its appearance or color values. For example, some colors represent view backgrounds at different levels of hierarchy and other colors represent foreground content, such as labels, links, and separators.

**Avoid replicating dynamic system colors**. Dynamic system colors — some of which can be patterns — may fluctuate from release to release, based on a variety of environmental variables.

**Avoid redefining the semantic meanings of dynamic system colors**. To ensure a consistent experience and ensure your interface looks great when the appearance of macOS changes in the future, use dynamic system colors as intended.

## Color management
A color *space* represents the colors in a *color model* like RGB or CMYK. Common color spaces — sometimes called gamuts — are sRGB and Display P3.

A *color profile* describes the colors in a color space using, for example, mathematical formulas or tables of data that map colors to numerical representations. An image embeds its color profile so that a device can interpret the image’s colors correctly and reproduce them on a display.

**Apply color profiles to your images**. Color profiles help ensure that your app’s colors appear as intended on different displays. The sRGB color space produces accurate colors on most displays.

**Use wide color to enhance the visual experience on compatible displays**. Wide color displays support a P3 color space, which can produce richer, more saturated colors than sRGB. As a result, photos and videos that use wide color are more lifelike, and visual data and status indicators that use wide color can be more meaningful. When appropriate, use the Display P3 color profile at 16 bits per pixel (per channel) and export images in PNG format. Note that you need to use a wide color display to design wide color images and select P3 colors.

**Provide color space–specific image and color variations if necessary**. In general, P3 colors and images appear fine on sRGB displays. Occasionally, it may be hard to distinguish two very similar P3 colors when viewing them on an sRGB display. Gradients that use P3 colors can also sometimes appear clipped on sRGB displays. To avoid these issues and to ensure visual fidelity on both wide color and sRGB displays, you can use the asset catalog of your Xcode project to provide different versions of images and colors for each color space.

To learn more, see [How to start designing assets in Display P3](https://developer.apple.com/news?id=5cda5ipr).
