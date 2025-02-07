// export default {
//     name: 'header',
//     title: 'Header',
//     type: 'document',
//     fields: [
//       {
//         name: 'logo',
//         title: 'Logo',
//         type: 'image',
//         options: {
//           hotspot: true,
//         },
//         description: 'Upload the logo for the header.',
//       },
//       {
//         name: 'title',
//         title: 'Title',
//         type: 'string',
//         description: 'The title or brand name displayed in the header.',
//       },
//       {
//         name: 'navigationLinks',
//         title: 'Navigation Links',
//         type: 'array',
//         of: [
//           {
//             type: 'object',
//             fields: [
//               {
//                 name: 'label',
//                 title: 'Label',
//                 type: 'string',
//                 description: 'The display name of the navigation link.',
//               },
//               {
//                 name: 'href',
//                 title: 'URL',
//                 type: 'url',
//                 description: 'The URL the navigation link points to.',
//               },
//             ],
//           },
//         ],
//         description: 'Add links for the navigation bar.',
//       },
//       {
//         name: 'socialLinks',
//         title: 'Social Links',
//         type: 'array',
//         of: [
//           {
//             type: 'object',
//             fields: [
//               {
//                 name: 'platform',
//                 title: 'Platform',
//                 type: 'string',
//                 description: 'Name of the social platform (e.g., Facebook, LinkedIn).',
//               },
//               {
//                 name: 'url',
//                 title: 'URL',
//                 type: 'url',
//                 description: 'The URL for the social media profile.',
//               },
//               {
//                 name: 'icon',
//                 title: 'Icon',
//                 type: 'image',
//                 description: 'Optional icon for the social platform.',
//                 options: {
//                   hotspot: true,
//                 },
//               },
//             ],
//           },
//         ],
//         description: 'Add links to social media profiles.',
//       },
//       {
//         name: 'backgroundColor',
//         title: 'Background Color',
//         type: 'string',
//         description: 'Set the background color of the header (e.g., #ffffff).',
//       },
//       {
//         name: 'textColor',
//         title: 'Text Color',
//         type: 'string',
//         description: 'Set the text color of the header (e.g., #333333).',
//       },
//       {
//         name: 'isSticky',
//         title: 'Sticky Header',
//         type: 'boolean',
//         description: 'Enable or disable a sticky header.',
//       },
//       {
//         name: 'hasShadow',
//         title: 'Shadow',
//         type: 'boolean',
//         description: 'Enable or disable a shadow for the header.',
//       },
//     ],
//   };
  