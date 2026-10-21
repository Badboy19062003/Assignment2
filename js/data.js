
const $=s=>document.querySelector(s);

const areas=[
 ["Family Law","Divorce, custody and family agreements handled with care.","We guide you through divorce, separation, child custody and maintenance, aiming for a fair outcome with as little conflict as possible.",["Divorce and separation","Child custody and maintenance","Family agreements"]],
 ["Criminal Law","Strong defence at every stage of proceedings.","From the first police interview to trial and appeal, we protect your rights and build a clear, well-prepared defence.",["Police interviews and bail","Defence at trial","Appeals"]],
 ["Labour / Employment Law","Contracts, dismissals and workplace disputes.","We advise employers and employees on contracts, dismissals and workplace disputes, often before the matter reaches court.",["Employment contracts","Dismissal claims","Workplace disputes"]],
 ["Tenancy & Rental Law","Landlord and tenant rights, leases and evictions.","Clear advice on leases and on the rights and duties of landlords and tenants, including recovery of possession.",["Lease drafting and review","Rent disputes","Eviction procedures"]],
 ["Commercial Law","Practical counsel for businesses of every size.","Practical legal support for companies: contracts, trading terms, partnerships and everyday business questions.",["Business contracts","Partnerships and shareholders","Compliance advice"]],
 ["Contractual Disputes","Resolving breaches quickly and decisively.","When a contract is broken we assess your position quickly and pursue the fastest route to a result, by negotiation or in court.",["Breach of contract claims","Negotiated settlements","Court proceedings"]],
 ["Litigation & Arbitration","Advocacy in court and in international tribunals.","Experienced advocacy before all levels of court and in domestic and international arbitration.",["Civil litigation","International arbitration","Enforcement of judgments and awards"]],
 ["Mediation","Settlement paths that save time and cost.","A confidential, faster and cheaper alternative to court, where we help both sides reach an agreement they can live with.",["Commercial mediation","Family mediation","Settlement agreements"]],
 ["Contract Drafting","Clear, enforceable agreements built to last.","Clear, enforceable agreements written for your situation, and reviewed with you before you sign.",["Drafting from scratch","Contract review","Negotiating terms"]]];

const articles=[
 ["Family Law","Understanding your rights in a divorce","Placeholder summary for the first article.","images/article-1.jpg"],
 ["Commercial","Five clauses every contract needs","Placeholder summary for the second article.","images/article-2.jpg"],
 ["Arbitration","Why businesses choose arbitration","Placeholder summary for the third article.","images/article-3.jpg"]];
const reviews=[
 ["Excellent, professional and clear throughout.","Naila Munglah"],
 ["Outstanding result in a difficult case.","Mahdiyyah Boodun"],
 ["Excellent service with clear communication and great attention to detail.", "Aurelie Catian"],
 ["The service was slower than expected, and communication could have been better.", "Numaan Tursoo"],
 ["Abdallah is very professional and provided amazing  consultations", "Sonea Ayacootee"],
 ["Professional, trustworthy and provided excellent guidance throughout my case.", "Nicolas Toi"],
 ["Extremely disappointing experience. Poor communication, missed deadlines and a lack of professionalism throughout my case.", "Daryl Manna"],
 ["Professional, reliable and supportive throughout the entire process.", "Natanaela Rasoanaivo"]];


const MAP_QUERY='PML Ebene Mauritius';
const MAP_EMBED_URL='https://www.google.com/maps?q='+encodeURIComponent(MAP_QUERY)+'&output=embed';
const MAP_PLACE_LINK='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(MAP_QUERY);
