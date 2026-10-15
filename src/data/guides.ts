/**
 * ------------------------------------------------------------------
 * GUIDES / BLOG â€” EDIT HERE
 * ------------------------------------------------------------------
 * Each guide is one object. Add a new object to the array and it
 * appears on /guides automatically, with its own page at
 * /guides/<slug> and its own <title>, meta description and URL.
 *
 * RULES FOLLOWED HERE, KEEP THEM UP:
 * - No author names, no credentials, no publish dates that have not
 *   actually happened.
 * - No specific prices, warranties or guarantees. Guides explain what
 *   affects a job; the quote comes after a call or a photo.
 */

export type GuideBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'note'; text: string };

export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  minutes: number;
  image: 'sofaUpholstery' | 'sofaFabric' | 'leatherDetail' | 'workshop' | 'craftsmanship' | 'sittingRoom' | 'serviceArea' | 'contactRoom';
  blocks: GuideBlock[];
  related: string[];
};

export const guides: Guide[] = [
  {
    slug: 'how-much-does-sofa-repair-cost-in-gurugram',
    title: 'How Much Does Sofa Repair Cost in Gurugram?',
    metaTitle: 'How Much Does Sofa Repair Cost in Gurugram? | Mizan Sofa Repair',
    metaDescription:
      'The factors that decide the cost of sofa repair in Gurugram â€” size, material, condition and what needs replacing â€” explained by Mizan Sofa Repair.',
    excerpt:
      'Two sofas can need the same repair and cost very different amounts. Here is what actually decides the price, and how to get a figure you can rely on.',
    category: 'Sofa Repair',
    minutes: 5,
    image: 'sittingRoom',
    blocks: [
      {
        type: 'p',
        text: 'The most common question we get on the phone is simple: how much will it cost? A straight answer is not possible from a phone call alone, because the same repair on a two-seater and a large sectional is not the same job. What we can do is explain exactly which parts of your sofa decide the number, so you know what you are being quoted for.',
      },
      { type: 'h2', text: 'What decides the cost of a sofa repair' },
      {
        type: 'ul',
        items: [
          'Size and style â€” a three-seater, a sectional, a sofa bed and a chaise each take a different amount of time to strip, cut and stitch.',
          'What needs doing â€” foam replacement alone is one job; a full fabric change with new piping and cushion covers is another.',
          'The material â€” plain woven fabric is quicker to work with than a patterned, striped or heavily textured cloth, which has to be matched across panels.',
          'Leatherette or rexine â€” these are cut from sheets and stitched in panels, so the labour depends heavily on the shape of the sofa.',
          'The condition of the frame and the old covering â€” old foam, hardened glue, webbing that has stretched and fixing material that has crumbled all add time.',
          'Access â€” whether the sofa can be moved in the room, and whether the work can be done on site or needs to go to the workshop.',
        ],
      },
      { type: 'h2', text: 'Which jobs are usually the most economical' },
      {
        type: 'p',
        text: 'In our experience the jobs that make the most financial sense are the ones where the frame is still solid. A fabric change on a good three-seater, or replacing foam across a sofa, costs a fraction of buying a replacement. A sofa with a broken frame, rotted webbing and perished foam is a different conversation, and we will say so on the call rather than take the job on.',
      },
      { type: 'h2', text: 'Repairing a single section instead of the whole sofa' },
      {
        type: 'p',
        text: 'Plenty of sofas develop one torn seat, one flattened cushion or one faded arm while the rest is perfectly fine. Reupholstering just the affected section, and matching the fabric to the rest, is often the sensible middle ground. It is worth asking about, and worth sending us a photo so we can tell you whether the match will look acceptable.',
      },
      {
        type: 'note',
        text: 'Send us photos of the whole sofa plus a close-up of the problem on WhatsApp. It is the fastest way to get a useful figure instead of a guess.',
      },
      { type: 'h2', text: 'How to get a quote you can rely on' },
      {
        type: 'ol',
        items: [
          'Photograph the whole piece, not just the damaged part.',
          'Photograph the problem close up in good light.',
          'Tell us the approximate size â€” two-seater, three-seater, sectional, sofa bed.',
          'Say how the sofa is used, and how many people sit on it regularly.',
          'Mention if the frame is solid, loose or creaking. This changes the answer more than anything else.',
        ],
      },
      {
        type: 'p',
        text: 'Once we have that, we can talk about the work in specific terms and let you decide. If it turns out that replacing the sofa is the better call, we will mention that too â€” it is not worth spending money on a piece that will need the same work again in two years.',
      },
      {
        type: 'p',
        text: 'Call or WhatsApp +91 9599931360 and describe the sofa. There is no obligation to go ahead with anything after the conversation.',
      },
    ],
    related: ['sofa-repair-vs-buying-a-new-sofa', 'when-should-you-replace-sofa-foam'],
  },

  {
    slug: 'sofa-repair-vs-buying-a-new-sofa',
    title: 'Sofa Repair vs Buying a New Sofa',
    metaTitle: 'Sofa Repair vs Buying a New Sofa | Mizan Sofa Repair',
    metaDescription:
      'A practical way to decide whether your sofa is worth repairing or should be replaced. The questions to ask before spending money on either one.',
    excerpt:
      'A straight comparison: when repair makes financial sense, when it does not, and the handful of questions that answer the question in one phone call.',
    category: 'Sofa Repair',
    minutes: 4,
    image: 'sofaUpholstery',
    blocks: [
      {
        type: 'p',
        text: 'This is the question we are asked most often, usually by someone standing in front of a sofa they have already been thinking about replacing. The answer is different for every piece, but there is a short list of things worth checking before deciding either way.',
      },
      { type: 'h2', text: 'Look at the frame, not the fabric' },
      {
        type: 'p',
        text: 'The covering is the part you can see, so it is the part that bothers people most. But the frame decides how long the sofa will last. Sit on it and check: is the frame solid or does it flex? Do the legs feel tight, or are they loose at the joint? Is the webbing underneath stretched or torn? When you press the seat, does it feel supportive or does it bottom out?',
      },
      {
        type: 'ul',
        items: [
          'Frame solid, joints tight, webbing intact â€” repair is usually the right call.',
          'Frame creaking or flexing under weight, legs wobbling â€” the frame work is now the main cost, and a new sofa may be more sensible.',
          'Foam flattened but everything else fine â€” foam replacement is a small, well-spent job.',
        ],
      },
      { type: 'h2', text: 'Compare the shapes you actually need' },
      {
        type: 'p',
        text: 'It is easy to want a new sofa because the old one is uncomfortable, and then discover the discomfort is a cushion you could have replaced. Before shopping, list what bothers you. If it is "it looks tired", repair works. If it is "I cannot fit three people on it" or "I want a chaise for lying on", that is a shape problem, and no amount of reupholstery will change it.',
      },
      { type: 'h2', text: 'The room matters too' },
      {
        type: 'p',
        text: 'A sofa that has been repaired looks like a sofa that has been repaired. That is often completely fine, and it is genuinely satisfying. But if the rest of the room has moved on and the sofa is the last piece from ten years ago, a new one may be the change the room needs. Neither answer is wrong â€” it is a question of what you want the room to look like.',
      },
      {
        type: 'note',
        text: 'Worth weighing up: a repaired sofa keeps the shape and proportions that suit your room, which is often the hardest part of buying a new one.',
      },
      { type: 'h2', text: 'A rough way to think about it' },
      {
        type: 'p',
        text: 'If what you need is a new fabric, new foam, new stitching or a repair to a leg, you are spending on extending something that works. If what you need is a different size, a different layout, or a piece that matches a room you have changed, you are spending on a purchase. Both are reasonable â€” they are just different decisions.',
      },
      {
        type: 'p',
        text: 'If you are not sure which one you are looking at, send photos on WhatsApp and we will tell you which category it falls into. We would rather talk you out of a job than into one.',
      },
    ],
    related: ['how-much-does-sofa-repair-cost-in-gurugram', 'how-to-choose-the-right-sofa-fabric'],
  },

  {
    slug: 'when-should-you-replace-sofa-foam',
    title: 'When Should You Replace Sofa Foam?',
    metaTitle: 'When Should You Replace Sofa Foam? | Mizan Sofa Repair',
    metaDescription:
      'The signs that your sofa foam has gone, how to check it yourself, and what replacing it involves. From Mizan Sofa Repair, Gurugram.',
    excerpt:
      'If your sofa feels flat but still looks fine, the foam is the most likely culprit. Here is how to tell, and what to expect when it is changed.',
    category: 'Sofa Foam',
    minutes: 4,
    image: 'sofaFabric',
    blocks: [
      {
        type: 'p',
        text: 'Foam is the part of a sofa nobody thinks about until it stops working. The frame and the fabric can look perfectly acceptable while the inside has quietly given up, and that is what makes sofa foam replacement such a worthwhile job.',
      },
      { type: 'h2', text: 'The signs it is time' },
      {
        type: 'ul',
        items: [
          'You sit down and feel the frame instead of the cushion.',
          'The seat needs a cushion on top of it to be comfortable.',
          'The sofa looks flat from across the room, or the seat has a permanent dip where people sit.',
          'You catch yourself sitting on the arm, or shifting sideways to find a comfortable spot.',
          'A noise that used to be the frame is now a creak from the foam settling.',
        ],
      },
      { type: 'h2', text: 'How to check it yourself' },
      {
        type: 'p',
        text: 'Undo the seat cushion covers if you can and press a hand firmly into the foam. Good foam pushes back and springs slowly back to shape. Worn foam takes the shape of your hand and stays there. If the foam feels crumbly, or if you can feel the webbing straps underneath through it, replacement is the only real option â€” no amount of reshaping will bring that back.',
      },
      { type: 'h2', text: 'What replacing foam involves' },
      {
        type: 'ol',
        items: [
          'The old foam is taken out of the seat, backrest and arms.',
          'Any stretched webbing or loose deck cloth underneath is checked and corrected.',
          'New foam goes in at the right density and thickness for the way the sofa is used.',
          'The covers go back on, and the stitching and seams are checked before the job is called done.',
        ],
      },
      {
        type: 'p',
        text: 'Because the frame and covering stay, foam replacement is one of the least disruptive jobs we do. In most cases it is finished on site in a single visit.',
      },
      { type: 'note',
        text: 'If you are also changing the fabric, doing both at once usually makes sense â€” it is cheaper in labour than re-covering twice.',
      },
      { type: 'h2', text: 'Choosing the density' },
      {
        type: 'p',
        text: 'Foam comes in different densities and this is where it is worth asking rather than assuming. A firm foam suits a sofa that gets heavy daily use or has children on it. A softer, higher-density foam feels better to sit on but can compress faster if the sofa is used hard every day. Tell us how the sofa is used â€” a formal living room seating four people a week is a very different case from a family sofa.',
      },
      {
        type: 'p',
        text: 'If you are not sure whether the foam is the problem, send a photo of the seat cushion and the sofa in use. We can usually tell you from that whether foam is the issue or whether something else needs looking at first.',
      },
    ],
    related: ['how-much-does-sofa-repair-cost-in-gurugram', 'leatherette-vs-fabric-sofa-upholstery'],
  },

  {
    slug: 'how-to-choose-the-right-sofa-fabric',
    title: 'How to Choose the Right Sofa Fabric',
    metaTitle: 'How to Choose the Right Sofa Fabric | Mizan Sofa Repair',
    metaDescription:
      'A plain-language guide to sofa fabrics â€” what each one is like to live with, how hard it is to clean, and which suits your home in Gurugram.',
    excerpt:
      'Colour is the easy part. Here is what actually matters when you choose upholstery fabric: how it feels, how it wears and how hard it is to keep clean.',
    category: 'Fabric Guide',
    minutes: 6,
    image: 'sofaFabric',
    blocks: [
      {
        type: 'p',
        text: 'People choose upholstery fabric based on colour, which is understandable, but colour is the least important decision. Two fabrics in exactly the same shade can behave completely differently depending on how they are woven and how much traffic the sofa sees.',
      },
      { type: 'h2', text: 'Start with how the sofa will be used' },
      {
        type: 'ul',
        items: [
          'Family sofa, kids and everyday use â€” durability and easy cleaning come first.',
          'Formal living room, used a few times a week â€” texture and feel matter more, but still pick something you can wipe.',
          'Apartment or society where the sofa is shared by flatmates and guests â€” a hard-wearing, darker tone hides marks better.',
          'Pet household â€” this is where light-coloured woven fabric causes ongoing frustration.',
        ],
      },
      { type: 'h2', text: 'The main fabric types you will be offered' },
      {
        type: 'p',
        text: 'You do not need to learn textile terminology. What matters is the plain description, and how it feels in your hand.',
      },
      {
        type: 'ul',
        items: [
          'Cotton and linen blends â€” feel natural and breathable, look good in daylight, and show marks. Best for drier, lower-traffic rooms.',
          'Polyester and microfibre woven fabrics â€” hard-wearing, colourfast, and usually the easiest to clean. A sensible default for family use.',
          'Chenille â€” soft and slightly fuzzy, and it drapes well. It can pill over time, so ask how it wears.',
          'Velvet and corduroy â€” the hardest to keep looking tidy, because the nap shows where people sit. They do look luxurious when new.',
          'Canvas and heavy woven cloth â€” among the most durable options, and they improve rather than degrade with a patina of use.',
        ],
      },
      { type: 'h2', text: 'Pattern is a commitment' },
      {
        type: 'p',
        text: 'A plain fabric on a sofa is forgiving. Pattern, particularly stripes, has to be matched carefully across the back, the seat cushions, the arms and the front rail. Done well it looks deliberate; done badly the mismatch shows immediately. If you want a pattern, it is worth allowing more time for cutting and stitching, and worth seeing a large sample before committing.',
      },
      {
        type: 'note',
        text: 'Ask to handle the fabric before you decide, and imagine it in your actual room rather than in the shop. Lighting changes colour more than most people expect.',
      },
      { type: 'h2', text: 'Colour in a real room' },
      {
        type: 'p',
        text: 'A useful rule: if your room gets strong daylight, a light fabric will go slightly yellow over a few years, and a very dark fabric will show every mark. Mid-tones â€” warm greys, oatmeal, camel, olive, warm taupe â€” are the most forgiving in most Indian homes, and they sit well with both wood and metal furniture.',
      },
      { type: 'h2', text: 'Ask these questions before you decide' },
      {
        type: 'ol',
        items: [
          'Can this be wiped with a damp cloth, or does it need dry cleaning?',
          'Will it fade in direct sunlight, and is the colour even across the whole roll?',
          'How does it wear at the front edge, where feet and children reach it?',
          'Is a pattern involved? If so, how will the panels be matched?',
          'Is a protective treatment included, and what does it actually do?',
        ],
      },
      {
        type: 'p',
        text: 'If you tell us how the room is used and what you like the look of, we can point you at two or three fabrics that make sense rather than a wall of samples.',
      },
    ],
    related: ['leatherette-vs-fabric-sofa-upholstery', 'how-to-maintain-upholstered-furniture'],
  },

  {
    slug: 'how-to-maintain-upholstered-furniture',
    title: 'How to Maintain Upholstered Furniture',
    metaTitle: 'How to Maintain Upholstered Furniture | Mizan Sofa Repair',
    metaDescription:
      'Simple care habits for fabric and leatherette sofas and chairs that keep them looking good for longer. Practical advice from Mizan Sofa Repair, Gurugram.',
    excerpt:
      'Most upholstery problems are caused by small habits rather than bad luck. A short routine keeps a sofa looking new for years longer.',
    category: 'Care & Maintenance',
    minutes: 5,
    image: 'sittingRoom',
    blocks: [
      {
        type: 'p',
        text: 'A reupholstered sofa looks its best for a few years, then starts to look tired. That is normal, but the difference between a sofa that ages well and one that looks worn after a year is usually down to a handful of small habits.',
      },
      { type: 'h2', text: 'Weekly' },
      {
        type: 'ul',
        items: [
          'Vacuum the sofa properly, including the gap between the seat cushions and the back, and the seam where the arms meet the frame.',
          'Turn and plump the cushions so they do not wear down in one spot.',
          'Pluck off crumbs rather than pushing them deeper into the fabric.',
        ],
      },
      { type: 'h2', text: 'Monthly' },
      {
        type: 'ul',
        items: [
          'Check under the seat cushions for anything dropped, and for small tears before they run.',
          'Rotate loose cushions so wear is spread evenly.',
          'Wipe armrests and headboards, which take most of the contact and most of the marks.',
        ],
      },
      { type: 'h2', text: 'Spills' },
      {
        type: 'ol',
        items: [
          'Blot, do not rub. Rubbing works a spill deeper into the weave.',
          'Use a clean, light-coloured cloth, and work from the outside of the stain inwards.',
          'For a plain water spill on most fabrics, cool water and a dry cloth is usually enough.',
          'Test any cleaner on a hidden area first, and never use hot water on a synthetic fabric.',
        ],
      },
      {
        type: 'note',
        text: 'If a spill has already soaked in, blot what you can and then call us. Spills that are dried out are far harder to deal with than ones dealt with the same day.',
      },
      { type: 'h2', text: 'Direct sunlight' },
      {
        type: 'p',
        text: 'A sofa in full sun will fade unevenly and the colour will warm up over a few years. If the layout allows, move it away from a window, or use a light curtain on the strongest hours. It is a small inconvenience compared with replacing faded fabric.',
      },
      { type: 'h2', text: 'Leatherette and rexine' },
      {
        type: 'p',
        text: 'These are the easiest to maintain. A damp cloth and a mild soap is enough for most weeks, and they do not absorb spills the way woven fabric does. Two things to avoid: leaving a colour transfer from new clothing to sit for days, and using solvent cleaners or alcohol-based products, which can strip the surface.',
      },
      { type: 'h2', text: 'Cushions and covers' },
      {
        type: 'p',
        text: 'Loose covers are the easiest part of a sofa to keep presentable, but only if they are washed. Check the care label and wash more often than feels necessary â€” covers take the brunt of the daily mess while the sofa underneath stays relatively clean.',
      },
      {
        type: 'p',
        text: 'If a tear appears, deal with it early. A small split in a seam is a quick fix. Left for a year, it becomes a panel replacement, and the same tear is what makes a whole sofa look beyond saving.',
      },
    ],
    related: ['how-to-choose-the-right-sofa-fabric', 'leatherette-vs-fabric-sofa-upholstery'],
  },

  {
    slug: 'leatherette-vs-fabric-sofa-upholstery',
    title: 'Leatherette vs Fabric Sofa Upholstery',
    metaTitle: 'Leatherette vs Fabric Sofa Upholstery | Mizan Sofa Repair',
    metaDescription:
      'A straight comparison of leatherette, rexine and fabric for sofa upholstery â€” cleaning, durability, comfort and how each one ages.',
    excerpt:
      'Leatherette looks like leather and wipes clean in seconds. Fabric feels warmer and is often cheaper. Here is how to choose between them.',
    category: 'Fabric Guide',
    minutes: 4,
    image: 'leatherDetail',
    blocks: [
      {
        type: 'p',
        text: 'This comes up more than any other upholstery question, and there is no single right answer â€” it depends on the room, the household and how much maintenance you want to do. Here is an honest comparison.',
      },
      { type: 'h2', text: 'The short version' },
      {
        type: 'ul',
        items: [
          'Choose leatherette or rexine if cleaning matters most, the sofa gets heavy use, or there are children or pets.',
          'Choose fabric if comfort and feel matter more, the sofa is in a lower-traffic room, and you are happy to vacuum it regularly.',
        ],
      },
      { type: 'h2', text: 'Cleaning' },
      {
        type: 'p',
        text: 'This is the real difference. Leatherette and rexine wipe clean with a damp cloth and a little mild soap. Spills can be lifted straight off rather than soaked in. Woven fabric absorbs first and cleans second, and some stains will always leave a mark. If you have ever tried to clean a light fabric sofa after a child has been on it with a biscuit, you already know how this goes.',
      },
      { type: 'h2', text: 'How each one feels' },
      {
        type: 'p',
        text: 'Fabric is warmer and softer to sit against, and it does not feel cold in winter. Leatherette is smoother, feels cooler to the touch, and can be slippery in a loose cover. Both are comfortable; they suit different people.',
      },
      { type: 'h2', text: 'How they wear' },
      {
        type: 'p',
        text: 'Good leatherette creases rather than wears â€” it develops a slight sheen and softness in the areas people sit. Cheap leatherette is the opposite: it becomes shiny, sticky and cracked, and the surface starts peeling within a few years. Rexine is the budget version and generally wears faster than leatherette.',
      },
      {
        type: 'note',
        text: 'Ask to see the material in person and press a fingernail into it. Quality leatherette flexes and springs back. Cheap covering stays permanently dented.',
      },
      { type: 'h2', text: 'Matching furniture' },
      {
        type: 'p',
        text: 'If you are reupholstering part of a set, the hardest part is matching new material to the pieces you are keeping. Warm neutral shades are much easier to match than anything with a pattern or a strong undertone. Send photos of all the pieces together so we can advise before cutting anything.',
      },
      { type: 'h2', text: 'Cost' },
      {
        type: 'p',
        text: 'The material is only one part of the cost, and it is often not the part people expect. Cutting, stitching and fitting labour is the same either way, which is why reupholstering a single section to match existing furniture can be less expensive than people anticipate. Call with a photo and we can talk it through properly.',
      },
      {
        type: 'p',
        text: 'Whichever you are leaning towards, handle the sample at home first and check it under your evening light before deciding.',
      },
    ],
    related: ['how-to-choose-the-right-sofa-fabric', 'how-to-maintain-upholstered-furniture'],
  },
];

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);

/** Newest-looking first is not possible without dates, so we keep editorial order. */
export const guideCategories = [...new Set(guides.map((g) => g.category))];
